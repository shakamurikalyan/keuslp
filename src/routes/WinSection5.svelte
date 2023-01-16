<script>
    import {onMount} from "svelte"
    import {gsap} from "gsap"
    import {ScrollTrigger} from "gsap/ScrollTrigger"
    import { Row,Col,Collapse } from "sveltestrap";
    import Fa from "svelte-fa"
    import {faCircleChevronDown,faVolumeMute} from "@fortawesome/free-solid-svg-icons";
    import {fade} from "svelte/transition";
    import { activeSec } from "$lib/store";

    let active=1;
    let lock=false;
    let muted=true;
    let tab=1;
    let ele;
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
    let allowPlay=false;
    let vdo;
    let innerWidth;

    let vdoMap={
        1:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Console/Compressed/Smart+Console_3.mp4",
        2:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Wizard/Compressed/scene+wizard_1.mp4",
        3:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+App/Compressed/Smart+App_1080_1.mp4",
        4:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Smart+Voices/Compressed/Smart+Voices_2.mp4"
    }

    const triggerAllow=()=>{
        let y=ele.getBoundingClientRect();
        if(y.top>0){
            if(!vdo.paused) vdo.pause();
            // console.log("paused---------------")
        }
        if(y.top<-(y.height)+200){
            if(!vdo.paused) vdo.pause();
            // console.log("paused------------------")
        }
        allowPlay=y.top<0;
        if(y.top<0 && y.top>-(y.height)+200){
            activeSec.set(5);
            // console.log("playing+++++++++++");
            vdo.play();
        }
    }

    onMount(()=>{
        
        gsap.registerPlugin(ScrollTrigger);
        var tl3=gsap.timeline({
            scrollTrigger:{
                trigger:".container5",
                scrub:1,
                // markers:true,
                start:"20% 80%",
                end:"20% 40%",
            },
        })
        

        tl3.from(".mainHead5",{y:200,scaleX:0,opacity:0,duration:1})
        .from(".desc5",{y:200,scale:0,opacity:0,duration:1})

        gsap.from(".leftFrame",{
            scrollTrigger:{
                trigger:".container5",
                // markers:true,
                scrub:1,
                start:"20% 60%",
                end:"60% 60%"
            },
            x:-700,
            opacity:0
        })
        
        gsap.from(".rightFrame",{
            scrollTrigger:{
                trigger:".container5",
                // markers:true,
                scrub:1,
                start:"20% 60%",
                end:"60% 60%"
            },
            x:700,
            opacity:0
        })
    })
</script>

<svelte:window on:scroll={triggerAllow} bind:innerWidth on:click={()=>muted=false}/>
<div id="product"></div>
<div class="container5" id="cont5" bind:this={ele}  >
        <h1 class="mainHead5">Intuitive Interfaces</h1>
        <p class="desc5">Choose your controls. </p>
        <div class="collapseContainer">
            <Row class="">
                <Col>
                    <div class="leftFrame float-end">
                        {#key tab}
                            <video bind:this={vdo}
                            on:click|self={(e)=>{
                                if(e.target.paused) e.target.play();
                                else e.target.pause();
                            }}
                            muted={muted}
                            preload="auto"
                            transition:fade 
                            src="{vdoMap[tab]}" class="video5" autoplay/>
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
                </Col>
                <Col class="">
                    <div class="rightFrame">
                        {#each obj as o,i}
                            <div class="collapseTab" style="border-radius: {i==0?
                            "1.044vw 1.044vw 0 0":
                            i==obj.length-1? "0 0 1.044vw 1.044vw":""   
                        };padding:{active==i+1? "1vw 1.5vw 0":"1vw"}" on:click={()=>{
                                if(!lock){
                                    lock=true;
                                    active=-1;
                                    tab=i+1;
                                    setTimeout(() => {
                                        active=i+1;
                                        lock=false;
                                    }, 200);
                                }
                            }}>
                                <h1 class="collapseTitle title5"
                                style="font-size:{active==i+1? "2.0868":"1.565"}vw;"
                                >{o.title}
                                {#if active!=i+1}
                                    <span class="float-end">
                                        <Fa icon={faCircleChevronDown} size="1x" />
                                    </span>
                                {/if}
                            </h1>
                                <Collapse isOpen={active==i+1}>
                                    <p class="collapseDesc titleDesc5">{o.desc}</p>
                                </Collapse>
                            </div>
                        {/each}
                    </div>
                </Col>
            </Row>
        </div>
</div>

<style>
    .collapseContainer{
        margin:2vw 0 0;
    }
    .mute{
        position: absolute;
        left:2%;
        top:2%;
    }
    .mute:hover{
        cursor: pointer;
    }
    .container5{
        /* min-height:1100px; */
        margin:1.5vw 0;
        padding:1.5vw 0;
    }
    .desc5,.mainHead5{
        color: #56483D;
        text-align: center;
        /* line-height: 55px; */
        line-height: 2.869vw;
        margin:0;
    }
    .mainHead5,.title5{
        font-family: 'Playfair Display', serif;
    }
    .mainHead5{
        font-weight: 400;
        /* font-size: 50px; */
        font-size: 2.6vw;
    }
    .desc5,.titleDesc5{
        font-family: 'Raleway', sans-serif;
    }
    .desc5{
        font-weight: 500;
        /* font-size: 20px; */
        font-size: 1.044vw;
    }
    .video5{
        width: 100%;
        position: absolute;
    }
    .leftFrame{
        /* width:650px; */
        width:33.9vw;
        height:33.9vw;
        background-color: #fff;
        /* border-radius: 50px; */
        border-radius: 2.6vw;
        overflow: hidden;
    }
    .leftFrame,.rightFrame{
        margin:0 1vw 0;
    }

    .collapseTab{
        background-color: #E3DDD9;
        /* width:560px; */
        width:33.9vw;
        margin:.1vw;
    }
    .collapseTab:hover{
        cursor: pointer;
    }
    .title5,.titleDesc5{
        color:#56483D;
    }
    .title5{
        font-weight: 400;
        /* line-height: 35px; */
        margin-top:1vw;
        font-size: 2.086vw;
        line-height: 1.825vw;
        padding-left: 1.5vw;
    }
    .titleDesc5{
        /* width:455px; */
        font-size: 1vw;
        padding:1vw .5vw 0;
        width:23.73vw;
        margin:auto auto 1.8vw 1vw;
        min-height:11.5vw;
    }
    .title5,.titleDesc5{
        transition: 200ms;
    }
</style>