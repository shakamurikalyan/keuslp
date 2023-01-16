<script>
    import {onMount} from "svelte";
  import { Collapse } from "sveltestrap";
  import Sun from "$lib/svgs/sun.svelte";
  import Curtains from "$lib/svgs/curtains.svelte";
  import Ac from "$lib/svgs/ac.svelte";
  import Scene from "$lib/svgs/custom_scene.svelte"
  import Clock from "$lib/svgs/clock.svelte";
  import System from "$lib/svgs/system.svelte";
  import Motion from "$lib/svgs/motion.svelte";
  import Fa from "svelte-fa";
  import {faVolumeMute} from "@fortawesome/free-solid-svg-icons";
  import {gsap} from "gsap";
  import {ScrollTrigger} from "gsap/ScrollTrigger"

    let muted=true;    
    let active=0;
    let ele;
    let arr=[
        {
            title:"Smart Lights",
            desc:"Keus really helped us in elevating our new-villa "
        },
        {
            title:"Smart Curtains",
            desc:"Keus really helped us in elevating our new-villa "
        },
        {
            title:"Smart Climate",
            desc:"Keus really helped us in elevating our new-villa. the convenience"
        },
        {
            title:"Smart Scenes",
            desc:"Keus really helped us in elevating our new-villa "
        },
        {
            title:"Smart Schedules",
            desc:"Keus really helped us in elevating our new-villa "
        },
        {
            title:"Smart Media",
            desc:"Keus really helped us in elevating our new-villa ",
        },
        {
            title:"Motion Sensor",
            desc:"Keus really helped us in elevating our new-villa "
        }
    ];

    let vdoMap={
        1:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Lights/Compressed/Smart+Lighting_1080_1.mp4",
        2:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Curtains/Compressed/smart+curtains_1080_1.mp4",
        3:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Lights/Compressed/Smart+Lighting_1080_1.mp4",
        4:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Scenes/Compressed/Smart+Scenes_1080_1.mp4",
        5:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Schedules/Compressed/Smart+Schedules_1080_2.mp4",
        6:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Media/Compressed/Smart+Media_1080_1.mp4",
        7:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Sensors/Compressed/Motion+Sensor_1080_2.mp4"
    }

    const triggerAllow=()=>{
        let y=ele.getBoundingClientRect();
        let vdo=document.querySelector(".mobV4")
        if(y.top>200){
            if(!vdo.paused) vdo.pause();
            // console.log("paused---------------")
        }
        if(y.top<-(y.height)){
            if(!vdo.paused) vdo.pause();
            // console.log("paused------------------")
        }
        if(y.top<200 && y.top>-(y.height)+200){
            // console.log("playing+++++++++++");
            if(vdo.paused)
                vdo.play();
        }
    }

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var mtl4=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent4",
                start:"top 60%",
                end:"center 60%",
                // markers:true,
                scrub:1
            }
        });

        let obj={
            y:500,
            opacity:0,
            scaleX:0,
            ease:"cric.out"
        }
        mtl4.from(".mobHead4",obj)
            .from(".mobDesc4",obj)
            .from(".mtDesc4",obj)
            .from(".mobCollapse4",{...obj,scaleX:1,scaleY:0});
    })
</script>

<svelte:window on:click={()=>{muted=false;}} 

on:scroll={triggerAllow}
/>

<div class="mobContent4" bind:this={ele}>
    <div class="mob4">
        <h1 class="mobHead4">Intelligent Spaces</h1>
        <p class="mobDesc4">A home that senses</p>
        <div class="mtDesc4">
            Experience the sheer
            convenience of smart living throught automated routines and sensory intelligence.
        </div>
        <div class="mobCollapse4">
            {#each arr as tb,i }
                <div class="mobTab4" 
                style="background-color: {i%2==0?  "#C2B0A4":"#D5C7BD"};
                border-radius:{i==0? "6vw 6vw 0 0":i==6? "0 0 6vw 6vw":""}">
                    <h2 class="mobTitle4 d-flex align-items-center"
                        on:click={()=>{
                            if(active!=i){
                                active=-1;
                                setTimeout(()=>active=i,200);
                            }
                        }}
                    >
                        <span class="mob4Icon">
                            {#if i==0}
                                <span class="">
                                    <Sun color="#56483D" width="10vw" />
                                </span>
                                {:else if i==1}
                                <Curtains color="#56483D" width="10vw" />
                                {:else if i==2}
                                <Ac color="#56483D" width="9vw" />
                                {:else if i==3}
                                <Scene  color="#56483D" width="10vw"/>
                                {:else if i==4}
                                <Clock  color="#56483D" width="10vw"/>
                                {:else if i==5}
                                <System  color="#56483D" width="10vw"/>
                                {:else if i==6}
                                <Motion  color="#56483D" width="8vw"/>
                            {/if}
                        </span><span>{tb.title}</span>
                    </h2>
                    <Collapse isOpen={active==i}>
                        <div class="mobTabVdo4">
                            <video src="{vdoMap[i+1]}"
                            preload="auto"
                            autoplay
                            muted={muted}
                            on:click|self={(e)=>{
                                if(e.target.paused) e.target.play();
                                else e.target.pause();  
                            }}
                            class="mobV4"></video>
                            {#if muted}
                                <span class="mute4">
                                    <Fa icon={faVolumeMute} size="2x" color="#fff" />
                                </span>
                            {/if}
                        </div>
                        <p class="mobTitleDesc4">
                            {tb.desc}
                        </p>
                    </Collapse>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .mobTabVdo4{
        position: relative;
    }
    .mute4{
        position: absolute;
        left:5vw;
        top:10vw;
    }
    .mobContent4{
        margin:20vw auto;
    }
    .mob4Icon{
        margin:auto 3vw auto 0;
    }
    .mobHead4,.mobTitle4{
        font-family: 'Playfair Display', serif;
    }
    .mobHead4{
        color:#56483D;
        font-size: 15vw;
        text-align: center;
    }
    .mobTitle4{
        color: #46392F;
    }
    .mobV4{
        width:100%;
        border-radius: 8vw;
        margin:5vw auto 3vw;
    }
    .mobDesc4,.mtDesc4,.mobTitleDesc4{
        font-family: 'Raleway', sans-serif;
        color:#56483D;
        text-align: center;
    }
    .mobTitleDesc4{
        text-align: left;
        color:#282828;
        font-weight: 300;
    }
    .mobDesc4{
        font-size: 6vw;
        font-weight: 400;
        margin-top:5vw ;
    }
    .mtDesc4{
        font-size: 6vw;
        font-weight: 0;
        margin:10vw 5vw 5vw;
    }
    .mobCollapse4{
        width:85%;
        margin:15vw auto 5vw;
    }
    .mobTab4{
        padding:7vw;
    }
    h2{
        margin:0;
    }
</style>