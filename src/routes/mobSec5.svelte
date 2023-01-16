<script>
    import {onMount} from "svelte";
    import Fa from "svelte-fa";
    import {faCircleChevronDown, faVolumeMute} from "@fortawesome/free-solid-svg-icons"
    import { Collapse } from "sveltestrap";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger"

  let active=0;
  let lactive=2;
  let ele;
  let mute=true;

    let obj=[
        {
            title:"Smart Console",
            desc:"Keus really helped us in elevating our new-villa experience with their home automation. Keus really helped us in elevating our new-villa experience with their home automation. Keus really helped us in elevating our new-villa experience with their home automation. "
        },
        {
            title:"Smart Wizard",
            desc:"Keus really helped us in elevating our new-villa experience with their home automation. Keus really helped us in elevating our new-villa experience with their home automation. Keus really helped us in elevating our new-villa experience with their home automation. "
        },
        {
            title:"Smart App",
            desc:"Keus really helped us in elevating our new-villa experience with their home automation. Keus really helped us in elevating our new-villa experience with their home automation. Keus really helped us in elevating our new-villa experience with their home automation. "
        },
        {
            title:"Smart Voice",
            desc:"Keus really helped us in elevating our new-villa experience with their home automation. Keus really helped us in elevating our new-villa experience with their home automation. Keus really helped us in elevating our new-villa experience with their home automation. "
        }
    ]

    let vdoMap={
        1:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Console/Compressed/Smart+Console_3.mp4",
        2:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Wizard/Compressed/scene+wizard_1.mp4",
        3:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+App/Compressed/Smart+App_1080_1.mp4",
        4:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Voices/Compressed/Smart+Voices_2.mp4"
    }

    const triggerAllow=()=>{
        let y=ele.getBoundingClientRect();
        let vdo=document.querySelector(".mobV5")
        if(y.top>500){
            if(!vdo.paused) vdo.pause();
            // console.log("paused---------------")
        }
        if(y.top<-(y.height)){
            if(!vdo.paused) vdo.pause();
            // console.log("paused------------------")
        }
        if(y.top<200 && y.top>-(y.height)){
            // console.log("playing+++++++++++");
            vdo.play();
        }
    }

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);
        var mtl5=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent5",
                // markers:true,
                start:"top center",
                end:"30% center",
                scrub:1
            }
        });

        let obj={
            y:500,
            opacity:0,
            scaleY:0,
            ease:"cric.out"
        }
        mtl5.from(".mobCollapse5",obj);
    })
</script>

<svelte:window
on:click={()=>mute=false}

on:scroll={triggerAllow}

/>

<div class="mobContent5" bind:this={ele}>
    <div class="mob5">
        <div class="mobCollapse5">
            <div class="collTab5"  style="border-radius: 8vw 8vw 0 0;">
                <h1 class="mobTitle5 text-center">
                    Intuitive Interfaces
                </h1>
            </div>
            {#each obj as o,i}
                <div class="collTab5" style="border-radius:{i==3? "0 0 8vw 8vw":""}">
                    <h1 class="mobTitle5"
                        on:click={()=>{
                            if(active!=i){
                                active=-1;
                                setTimeout(()=>active=i,300);
                            }
                        }}
                    >
                        {o.title}
                        {#if active!=i}
                            <span class="mob5Icon float-end">
                                <Fa icon={faCircleChevronDown} size=".8x" />
                            </span>
                        {/if}
                    </h1>
                    <Collapse isOpen={active==i}>
                        <div class="mobVdiv5">
                            {#if mute}
                                <span class="mute5">
                                    <Fa icon={faVolumeMute} color="#fff" size="2x" />
                                </span>
                            {/if}
                            <video src="{vdoMap[i+1]}"
                            muted={mute}
                            preload="auto"
                            autoplay
                            on:click={
                                (e)=>{
                                    if(e.target.paused) e.target.play();
                                    else e.target.pause();
                                }
                            }
                            class="mobV5"></video>
                        </div>
                        <p class="mobDesc5">
                            {o.desc}
                        </p>
                    </Collapse>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .mute5{
        position: absolute;
        z-index: 9999999;
        top:15vw;
        left:5vw;
    }
    .mobVdiv5{
        position: relative;
    }
    .mobContent5{
        margin:20vw auto;
    }
    .mobTitle5{
        font-family: 'Playfair Display', serif;
        color: #46392F;
    }
    .mobDesc5{
        font-family: 'Raleway', sans-serif;
        color:#56483D;
        font-weight: 100;
        font-size: 15px;
        padding:3vw;
    }
    .mobV5{
        width:100%;
        border-radius: 10vw;
        margin:10vw auto 5vw;
    }
    .collTab5{
        padding:5vw;
        background-color:#E3DDD9;
        width:85%;
        margin:1vw auto 0;
    }
    h1{
        font-size:25px;
    }
</style>