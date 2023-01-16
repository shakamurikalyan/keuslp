<script>
  import { onMount } from "svelte";
  import { Col, Row } from "sveltestrap";
  import Day from "$lib/svgs/day.svelte"
  import Relax from "$lib/svgs/relax.svelte"
  import Night from "$lib/svgs/night.svelte"
  import {fade} from "svelte/transition";
  import {gsap} from "gsap";
  import {ScrollTrigger} from "gsap/ScrollTrigger";
  import { activeSec } from "$lib/store";

    let active=1;
    let lastActive=-1;
    let cur=1;
    let lock=false;
    let muted=true;
    let ele;
    let player;
    let arr=[{
        title:"Day Scene",
        desc:"Lighting: 50%, Art Accent: 10% | Curtains: Open |  AC: Off",
    },{
        title:"Relax",
        desc:"Lighting:  50%, Art Accent: 10%, Curtains: Open, AC: off",
    },{
        title:"Night",
        desc:"Lighting:  50%, Art Accent: 10%, Curtains: Open, AC: off",
    }]

    let vdoMap={
        12:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Ambience+Control/Compressed/Day+to+Relax_1.mp4",
        31:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Ambience+Control/Compressed/Night+to+Day_1.mp4",
        23:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Ambience+Control/Compressed/Relax+to+Night_1.mp4",
        32:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Ambience+Control/Compressed/Night+to+Relax_1.mp4",
        21:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Ambience+Control/Compressed/Relax+to+Day_1.mp4",
        13:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Ambience+Control/Compressed/Relax+to+Day_1.mp4"
    }

    const triggerAllow=()=>{
        let y=ele.getBoundingClientRect();
        let vdo=player?.firstChild;
        if(y.top>0){
            if(!vdo.paused) vdo.pause();
            // console.log("paused---------------")
        }
        if(y.top<-(y.height)+200){
            if(!vdo.paused) vdo.pause();
            // console.log("paused------------------")
        }
        if(y.top<0 && y.top>-(y.height)+200){
            activeSec.set(5);
            // console.log("playing+++++++++++");
            vdo.play();
        }
    }

    const getVdo=()=>{
        let lpv=lastActive>0? lastActive:3;
        let ppv=lastActive>0? cur:1;
        return `${lpv}${ppv}`;
    }

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);
        var tl1=gsap.timeline({
            scrollTrigger:{
                trigger:".content1",
                scrub:1,
                start:"20% 80%",
                end:"20% 40%",
                // markers:true,
            }
        })

        tl1.from(".mainHead",{y:200,scaleY:0,opacity:0,duration:1})
            .from(".desc1",{y:200,opacity:0,scaleY:0,duration:1})
            .from(".mainContainer",{y:500,opacity:0,scaleX:0,duration:1});
    })

</script>

<svelte:window on:scroll={triggerAllow} />

<div class="content1" bind:this={ele}>
    <h1 class="mainHead">Ambience Control</h1>
    <p class="desc1">True convergence of lights, climate, curtains and media</p>
    <div class="mainContainer mt-3 col-10">
        <div class="player" bind:this={player}>
            {#key cur}
                <video
                preload="auto"
                on:click={(e)=>{
                    if(e.target.paused) e.target.play();
                    else e.target.pause();
                }}
                muted
                transition:fade src="{vdoMap[getVdo()]}" class="video3" autoplay/>
            {/key}
        </div>
        <div class="tabs">
            <Row class="h-100">
                {#each arr as tab,i}
                    <div class="tab {active==i+1? "col-8":"col-2"}"
                    style="background-color: {i%2==0?  "#C2B0A4":"#D5C7BD"};"
                    on:click={
                        ()=>{
                            if(!lock && i+1!=active){
                                lock=true;
                                lastActive=active;
                                active=i+1;
                                cur=i+1;
                                setTimeout(() => {
                                    lock=false;
                                }, 900);
                            }
                        }
                    }>
                       <Row class="h-100 text-center">
                            <div class={active==i+1? "col-2":""}>
                                <Col class="mx-auto h-100">
                                    <div class="d-inline-block icon3">
                                        {#if i==0}
                                            <Day color="#56483D" width={"3.5vw"} />
                                            {:else if i==1}
                                                <Relax color="#56483D" width={"3.5vw"} />
                                            {:else}
                                                <Night color="#56483D" width={"3.5vw"} />
                                        {/if}
                                    </div>
                                </Col>
                            </div>
                            {#if active==i+1}
                                <div transition:fade={{duration:800,delay:active==i+1? 200:500}} class="col-10">
                                    <h2 class="title mt-3">{tab.title}</h2>
                                    <p class="titleDesc">{tab.desc}</p>
                                </div>
                            {/if}
                       </Row>
                    </div>
                {/each}
            </Row>
        </div>
    </div>
</div>

<style>
    .content1{
        /* min-height:1000px; */
        padding:4vw 0 0;
    }
    .title,.titleDesc{
        color:#46392F;
        text-align: left;
    }
    .icon3{
        margin:.8vw 0 0;
    }
    .video3{
        max-width: 100%;
        min-width:100%;
        position: absolute;
    }
    .desc1,.mainHead{
        color: #56483D;
        text-align: center;
        /* line-height: 55px; */
        line-height: 2.869vw;
        margin:0;
    }
    .mainHead,.title{
        font-family: 'Playfair Display', serif;
    }
    .mainHead{
        font-weight: 400;
        /* font-size: 50px; */
        font-size: 2.6084vw;
    }
    .desc1,.titleDesc{
        font-family: 'Raleway', sans-serif;
    }
    .desc1{
        font-weight: 500;
        /* font-size: 20px; */
        font-size: 1.044vw;
    }
    .mainContainer{
        background-color: #fff;
        /* height:805px; */
        min-height:40vw;
        padding:0 .05vw 0;
        /* width:1280px; */
        width:66.7vw;
        margin:auto;
        /* border-radius: 20px; */
        border-radius: 2vw;
        overflow: hidden;
    }
    .player{
        /* min-height:705px; */
        min-height:35.1vw;
        position: relative;
        overflow: hidden;
    }
    .tabs{
        /* height:100px; */
        height:5.216vw;
        min-width:100%;
    }
    .tab{
        transition: 700ms;
        
    }
    .tab:hover{
        cursor: pointer;
    }
    .title{
        /* font-size: 22px; */
        font-size:1.147vw;
    }
    .titleDesc{
        /* font-size:18px; */
        font-size: 0.939vw;
    }
</style>