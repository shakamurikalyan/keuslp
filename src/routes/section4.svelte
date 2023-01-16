<script>
    import {Row,Col} from "sveltestrap";
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import Sun from "$lib/svgs/sun.svelte"
    import Curtain from "$lib/svgs/curtains.svelte"
    import Ac from "$lib/svgs/ac.svelte"
    import Scene from "$lib/svgs/custom_scene.svelte"
    import Clock from "$lib/svgs/clock.svelte";
    import System from "$lib/svgs/system.svelte";
    import Motion from "$lib/svgs/motion.svelte"
    import { activeSec } from "$lib/store";
    import Fa from "svelte-fa";
    import {faVolumeMute} from "@fortawesome/free-solid-svg-icons"

    let active=1;
    let lock=false;
    let lastActive=-1;
    let innerWidth;
    let tv=1;
    let ele;
    let muted=true;
    let player;

    let vdoMap={
        1:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Lights/Compressed/Smart+Lighting_HD_1.mp4",
        2:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Curtains/Compressed/Smart+Curtains_HD_1.mp4",
        3:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Lights/Compressed/Smart+Lighting_1080_1.mp4",
        4:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Scenes/Compressed/Smart+Scenes_HD_1.mp4",
        5:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Schedules/Compressed/Smart+Schedule_HD_2.mp4",
        6:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Media/Compressed/Smart+Media_HD_1.mp4",
        7:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Sensors/Compressed/Motion+Sensor_HD_2.mp4"
    }

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

    $:console.log(innerWidth)

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);
        var tl2=gsap.timeline({
            scrollTrigger:{
                trigger:".content4",
                scrub:1,
                start:"20% 80%",
                end:"20% 40%",
                // markers:true,   
            }
        })

        tl2.from(".mainHead4",{y:200,scaleY:0,opacity:0,duration:.8})
            .from(".desc4",{y:200,scaleY:0,opacity:0,duration:.8})
            .from(".mainContainer4",{y:500,scaleX:0,opacity:0,duration:.8});
    })
</script>

<svelte:window on:scroll={triggerAllow} on:click={()=>muted=false} bind:innerWidth />

<div class="content4 pt-5" bind:this={ele}>
    <div class="pt-5" >
        <h1 class="mainHead4">Intelligent Spaces</h1>
        <p class="desc4">A home that senses</p>
        <div class="mainContainer4 mt-2">
            <div class="player4" bind:this={player}>
                {#key tv}
                    <video
                    on:click={(e)=>{
                        if(e.target.paused) e.target.play();
                        else e.target.pause();
                    }}
                    {muted}
                    preload="auto"
                    transition:fade src="{vdoMap[tv]}" class="videoSec4" autoplay></video>
                {/key}
                {#if muted}
                    <span class="mute">
                        {#if innerWidth>4500}
                            <Fa icon={faVolumeMute} color="#fff" size="5x"/>
                            {:else}
                                <Fa icon={faVolumeMute} color="#fff" size="2x"/>
                        {/if}
                    </span>
                {/if}
            </div>
            <div class="tabs4">
                <Row class="h-100">
                    {#each arr as tab,i}
                        <div class="tab4"
                        style="background-color: {i%2==0?  "#C2B0A4":"#D5C7BD"};width:{active==i+1? innerWidth<2500? "23":"22.3":"7.5"}vw"
                        on:click={
                            ()=>{
                                if(!lock && active!=i+1){
                                    lock=true;
                                    lastActive=active;
                                    active=i+1;
                                    tv=active
                                    setTimeout(() => {
                                        lock=false;
                                    }, 900);
                                }
                                console.log("active",active);
                            }
                        }>
                           <Row class="h-100 text-center">
                                <Col class="mx-auto {active==(i+1)? "col-3":"col-auto"} px-0">
                                    <div class="col-12 tabIcons4">
                                        {#if i==0}
                                            <span class="{active==1? "float-end leftPad":""}">
                                                <Sun color="#56483D" width="2.451vw" />
                                            </span>
                                            {:else if i==1}
                                            <Curtain color="#56483D" width="2.451vw" />
                                            {:else if i==2}
                                            <span class="acIcon4">
                                                <Ac color="#56483D" width="2.6vw" />
                                            </span>
                                            {:else if i==3}
                                            <Scene  color="#56483D" width="2.764vw"/>
                                            {:else if i==4}
                                            <Clock  color="#56483D" width="2.6vw"/>
                                            {:else if i==5}
                                            <span class="sysIcon4">
                                                <System  color="#56483D" width="3.2865vw"/>
                                            </span>
                                            {:else if i==6}
                                            <Motion  color="#56483D" width="2.5vw"/>
                                        {/if}
                                    </div>
                                </Col>
                            {#if active==i+1}
                                <div in:fade={{duration:500,delay:100}} class="col-9">
                                    <h2 class="title4 mt-2">{tab.title}</h2>
                                    <p class="titleDesc4">{tab.desc}</p>
                                </div>
                            {/if}
                           </Row>
                        </div>
                    {/each}
                </Row>
            </div>
        </div>
    </div>
</div>

<style>
    .sysIcon4{
        position: relative;
        top:.3vw;
    }
    .acIcon4{
        position: relative;
        top:.4vw;
    }
    .mute{
        position: absolute;
        left:1%;
        top:1%;
    }
    .mute:hover{
        cursor: pointer;
    }
    .leftPad{
        padding:0 1vw 0;
    }
    .content4{
        background-color: #E3DDD9;
        padding:2vw 0;
        /* height:1100px; */
    }
    .title4,.titleDesc4{
        color:#46392F;
        text-align: left;
    }
    .desc4,.mainHead4{
        color: #56483D;
        text-align: center;
        /* line-height: 55px; */
        line-height: 2.8691vw;
        margin:0;
    }
    .mainHead4,.title4{
        font-family: 'Playfair Display', serif;
    }
    .videoSec4{
        position: absolute;
        width:100%;
        /* object-fit: cover; */
    }
    .mainHead4{
        font-weight: 400;
        /* font-size: 50px; */
        font-size:2.6083vw;
    }
    .desc4,.titleDesc4{
        font-family: 'Raleway', sans-serif;
    }
    .tabIcons4{
        margin:1.3vw auto;
    }
    .desc4{
        font-weight: 500;
        /* font-size: 20px; */
        font-size: 1.044vw;
    }
    .mainContainer4{
        background-color: #fff;
        /* height:800px; */
        min-height:40vw;
        /* width:1280px; */
        width:67vw;
        margin:auto;
        /* border-radius: 20px; */
        border-radius: 2vw;
        overflow: hidden;
    }
    .player4{
        /* height:700px; */
        height:35vw;
        overflow: hidden;
        position: relative;
    }
    .tabs4{
        /* height:100px; */
        height:5.2167vw;
        /* position: absolute; */
        /* left:0.5vw; */
    }
    .tab4{
        transition: .8s;
        padding:.1vw 0;
    }
    .tab4:hover{
        cursor: pointer;
    }
    .title4{
        /* font-size: 22px; */
        font-size: 1.1476vw;
    }
    .titleDesc4{
        /* font-size:18px; */
        font-size: 0.939vw;
        line-height: 1.2vw;
    }
</style>