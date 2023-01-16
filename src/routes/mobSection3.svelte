<script>
  import { Collapse } from "sveltestrap";
  import Day from "$lib/svgs/day.svelte";
  import Relax from "$lib/svgs/relax.svelte";
  import Night from "$lib/svgs/night.svelte";
  import {onMount} from "svelte";
  import {gsap} from "gsap";
  import {ScrollTrigger} from "gsap/ScrollTrigger";


    let active=0;
    let tab=0;
    let lactive=2;
    let ele;
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

    const getVdo=()=>{
        let lpv=lactive>0? lactive+1:3;
        let ppv=lactive>0? active+1:1;
        return `${lpv}${ppv}`;
    }

    const triggerAllow=()=>{
        let y=ele.getBoundingClientRect();
        let vdo=document.querySelector(".mobV3");
        if(y.top>0){
            if(!vdo.paused) vdo.pause();
            // console.log("paused---------------")
        }
        if(y.top<-(y.height)+200){
            if(!vdo.paused) vdo.pause();
            // console.log("paused------------------")
        }
        if(y.top<0 && y.top>-(y.height)){
            // console.log("playing+++++++++++");
            vdo.play();
        }
    }

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var mtl3=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent3",
                // markers:true,
                start:"top center",
                end:"center center",
                scrub:1,
            }
        })
        let obj={
            y:400,
            opacity:0,
            scaleX:0
        }

        mtl3.from(".mobHead3",obj)
            .from(".mobDesc3",obj)
            .from(".mobCollapseDiv3",{...obj,scaleX:1,scaleY:0});
    })


</script>

<svelte:window on:scroll={triggerAllow} />

<div class="mobContent3" bind:this={ele}>
    <div class="mob3">
        <h1 class="mobHead3">
            Ambience Control
        </h1>
        <p class="mobDesc3">
            True convergence of lights, climate, curtains and media
        </p>
        <div class="mobCollapseDiv3">
            {#each arr as o,i}
                <div class="mobColTab3"
                 style="background-color: {i%2==0?  "#C2B0A4":"#D5C7BD"};
                 border-radius:{i==0? "8vw 8vw 0 0":i==2? "0 0 8vw 8vw":""}
                 ">
                    <h1 class="mobt3"
                        on:click={()=>{
                            lactive=active;
                            active=-1;
                            tab=i;
                            setTimeout(()=>{
                                active=i;
                            },300)
                        }}
                    >
                        <span class="mob3Icon">
                            {#if i==0}
                                <Day color="#56483D" width={"12vw"} />
                                {:else if i==1}
                                    <Relax color="#56483D" width={"12vw"} />
                                {:else}
                                    <Night color="#56483D" width={"12vw"} />
                            {/if}
                        </span>
                        {o.title}
                    </h1>
                    <Collapse isOpen={active==i}>
                        <div class="mobVdiv3" >
                            <video src="{vdoMap[getVdo()]}"
                             class="mobV3"
                            autoplay
                            muted
                            ></video>
                        </div>
                        <p class="mobd3">
                            {o.desc}
                        </p>
                    </Collapse>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    h1{
        margin:0;
    }
    .mobV3{
        width:100%;
        height: 70vw;
        object-fit: cover;
        margin:5vw auto 3vw;
        border-radius: 10vw;
    }
    .mob3Icon{
        margin:0 5vw 0 0;
    }
    .mobHead3,.mobDesc3{
        text-align: center;
    }
    .mobHead3{
        color:#56483D;
        margin:10vw auto 5vw;
        font-size: 15vw;
    }
    .mobDesc3{
        font-size: 6vw;
        font-weight: 0;
        margin:10vw 5vw;
    }
    .mobHead3,.mobt3{
        font-family: 'Playfair Display', serif;
    }
    .mobDesc3,.mobd3,.mobTitleDesc4{
        font-family: 'Raleway', sans-serif;
        color:#56483D;
    }
    .mob3{
        padding:10vw 5vw;
    }
    .mobVdiv3{
        padding:2vw;
    }
    .mobColTab3{
        padding:5vw;
    }
</style>