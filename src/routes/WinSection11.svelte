<script>
    import '@splidejs/svelte-splide/css';
    import {Splide,SplideSlide, SplideTrack} from "@splidejs/svelte-splide"
    import {gsap} from "gsap";
    import { slide,blur,fly } from "svelte/transition";
    import { Col, Row } from "sveltestrap";
    import Slide from "$lib/common/HSlide"
    import {onMount} from "svelte";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import Fa from "svelte-fa";
    import {faChevronRight, faStar,faPlayCircle} from "@fortawesome/free-solid-svg-icons"

    let playing=false;
    let playingVideo;
    let active;
    let scale=1;

    let ele;

    const checkScroll=()=>{
        // console.log("",playingVideo);
        if(playingVideo){
            let y=ele.getBoundingClientRect();
            if(y.top>0){
                if(!playingVideo.paused) playingVideo.load();
                playing=false;
                // console.log("paused---------------")
            }
            if(y.top<-(y.height)+200){
                if(!playingVideo.paused) playingVideo.load();
                playing=false;
                // console.log("paused------------------")
            }
        }
    }

    let arr=[
        {
            title:"Villa No.70",
            desc:"Cyprus Palms",
            dd:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            stars:5,
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Home+Videos/Compressed+Videos/cyprus.webm"
        },
        {
            title:"Villa No.70",
            desc:"Cyprus Palms",
            dd:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            stars:2,
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Home+Videos/Compressed+Videos/villa-39.webm"
        },
        {
            title:"Villa No.70",
            desc:"Cyprus Palms",
            dd:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            stars:3,
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Home+Videos/Compressed+Videos/brijesh.webm"
        }
    ]

    onMount(()=>{
        active=1;
        gsap.registerPlugin(ScrollTrigger);
        var tl11=gsap.timeline({
            scrollTrigger:{
                trigger:".container11",
                start:"top center",
                end:"20% center",
                scrub:1,
                // markers:true
            }
        });
        let tl1opt={
            y:100,
            opacity:0,
            duration:1,
            scaleY:0,
            ease:"cric.out"
        }
        tl11.from(".mainHead11",tl1opt)
            .from(".desc11",tl1opt)
            .from(".splideDiv11",{...tl1opt,scaleX:0})
    })
</script>

<svelte:window on:scroll={checkScroll} />

<div class="container11" bind:this={ele}>
    <div class="content11">
        <h1 class="mainHead11">Smart Home Tours</h1>
        <p class="desc11">walkthroughs of our recent installations</p>
        <div class="splideDiv11">
            <Splide hasTrack={false}
            on:move={
                e=>{
                    playing=false;
                    playingVideo.load();
                    active=(e?.detail.index)+1
                }
            }
            options={
                {
                    type:"loop",
                    focus:"center"
                }
            }>
                <SplideTrack>
                    {#each arr as o,i}
                    <SplideSlide>
                        <div class="slide11">
                            <Row>
                                {#if !playing}
                                    <div transition:Slide={{duration:200}} id="leftCol11" class="col-6">
                                        <div class="left11">
                                            <h1 class="title11 mt-5">{o.title}</h1>
                                            <p class="desc11-1">{o.desc}</p>
                                            <p class="titleDesc11 mt-5">
                                                {o.dd}
                                            </p>
                                            <div class="winStars11">
                                                <span class="winStar"><Fa icon={faStar} 
                                                    color="{o.stars>=1? "#BEBDBD":"#e5e5e5"}"
                                                    /></span>
                                                <span class="winStar"><Fa icon={faStar} 
                                                    color="{o.stars>=2? "#BEBDBD":"#e5e5e5"}"
                                                    /></span>
                                                <span class="winStar"><Fa icon={faStar} 
                                                    color="{o.stars>=3? "#BEBDBD":"#e5e5e5"}"
                                                    /></span>
                                                <span class="winStar"><Fa icon={faStar} 
                                                    color="{o.stars>=4? "#BEBDBD":"#e5e5e5"}"
                                                    /></span>
                                                <span class="winStar"><Fa icon={faStar} 
                                                    color="{o.stars>=5? "#BEBDBD":"#e5e5e5"}"
                                                    /></span>
                                            </div>
                                        </div>
                                    </div>
                                {/if}
                                <Col class="px-0 w-100">
                                    {#if active==i+1 && !playing}
                                        <span class="playBtn" style="scale:{scale}">
                                            <Fa icon={faPlayCircle} size="{innerWidth*.001}x" color="#827f7e" />
                                        </span>
                                    {/if}
                                    <video
                                    on:mouseover={()=>scale=2}
                                    on:mouseleave={()=>scale=1}
                                    id="video-{i+1}"
                                    preload="auto"
                                    src="{arr[i]?.link}" poster="src/lib/videos/homes/{i+1}/poster.jpg" on:click={(e)=>{
                                        if(e.target.paused){
                                            playing=true;
                                            e.target.play();
                                            playingVideo=e.target;
                                        }
                                        else {
                                            playing=false;
                                            setTimeout(()=>e.target.load(),400)
                                        }
                                    }} class="video11"></video>
                                </Col>
                            </Row>
                        </div>
                    </SplideSlide>
                    {/each}
                </SplideTrack>
                <div class="splide__arrows" style="">
                    <button class="splide__arrow splide__arrow--prev prevBtn10">
                        <span class="prev10">
                            <Fa icon={faChevronRight} />
                        </span>
                    </button>
                    <button class="splide__arrow splide__arrow--next nextBtn10">
                        <span class="next10">
                            <Fa icon={faChevronRight} />

                        </span>
                    </button>
                </div>
            </Splide>
        </div>
    </div>
</div>


<style>
    .playBtn{
        position: absolute;
        right:12vw;
        bottom:4vw;
        z-index: 9999;
        transition: 100ms;
    }
    #leftCol11{
        padding:0;
    }
    .content11{
        margin:6vw 0 2vw;
        overflow: hidden;
    }
    .video11{
        width:100%;
        height:80vh;
        object-fit: cover;
        transition: 1s;
    }
    .video11:hover{
        cursor: pointer;
    }
    .splideDiv11{
        margin:2vw 0 0;
    }
    .slide11{
        width:80%;
        /* border-radius: 50px; */
        border-radius: 2vw;
        overflow: hidden;
        transition:500ms;
        margin:1.5vw auto 2vw;
    }
    .left11{
        width:100%;
        min-height: 100%;
        max-height:80vh;
        overflow: hidden;
        background-color: #F0F0F0;
        /* padding:200px 150px 50px; */
        padding:5.43vw 5.82vw 2.6vw;
    }
    .mainHead11,.title11{
        font-family: 'Playfair Display', serif;
    }
    .mainHead11{
        font-weight: 400;
        /* font-size: 60px; */
        font-size: 3.13vw;
        text-align: center;
    }
    .desc11,.titleDesc11{
        font-family: 'Raleway', sans-serif;
    }
    .desc11{
        font-weight: 500;
        /* font-size: 22px; */
        font-size: 1.14767vw;
        text-align: center;
    }
    .title11{
        /* font-size: 50px; */
        font-size: 2.6083vw;
    }
    .desc11-1{
        /* font-size: 25px; */
        font-size:1.3041vw;
        font-weight: 400;
        /* line-height: 34px; */
        line-height: 1.77367vw;
    }
    .titleDesc11{
        width:80%;
        /* font-size: 24px; */
        font-size: 1.252vw;
        font-weight: 300;
    }
    .prev10,.next10{
        font-size: 1.2vw;
        position:absolute;
    }
    .prevBtn10,.nextBtn10{
        position: absolute;
        font-size: 1.2vw;
    }
    .prevBtn10{
        left:5vw;
    }
    .nextBtn10{
        right:5vw;
    }
</style>