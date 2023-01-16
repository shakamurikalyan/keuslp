<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import Fa from "svelte-fa";
  import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
  import {onMount} from "svelte";
  import {gsap} from "gsap";
  import {ScrollTrigger} from "gsap/ScrollTrigger"

    let lastPlaying;
    let playing;
    let isPlaying;
    let innerWidth;
    let ele;
    let scale=1;
    let tabs=["baba","neelesh","priyanka","sravanthiKollur","suprajarao","vaishnaviLinga","naveenPanuganti"]
    let arr=[
        {
            title:"Baba Shashank",
            desc:"Space Fiction Studio",
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Architect+videos/baba.webm"
        },
        {
            title:"S Neelesh Kumar",
            desc:"23 deg Design Shift",
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Architect+videos/nilesh.webm"
        },
        {
            title:"Priyanka Ghattamaneni",
            desc:"Studio Emerald",
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Architect+videos/priyanka.webm"
        },
        {
            title:"Sravanthi Kolluri",
            desc:"Principal Architect EssEnn Architects",
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Architect+videos/sravanti.webm"
        },
        {
            title:"Supraja Rao",
            desc:"Design House",
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Architect+videos/supraja-rao.webm"
        },
        {
            title:"Vishnavi Linga",
            desc:"VAL Atelier",
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Architect+videos/lingavaishanavi.webm"
        },
        {
            title:"Naveen Panuganti",
            desc:'Principal Architect Naveen Associates',
            link:"https://keus-resources.s3.ap-south-1.amazonaws.com/landing_page_files/drive-download-20230116T073317Z-001/Architect+videos/naveen.webm"
        }
    ];
    const triggerAllow=()=>{
        if(playing && !playing.paused){
            let y=ele.getBoundingClientRect();
            let vdo=playing;
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
    }

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var mtl10=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent10",
                // markers:true,
                scrub:1,
                start:"-10% center",
                end:"40% center"
            }
        });

        let obj={
            y:500,
            opacity:0,
            scale:0,
            ease:"cric.out"
        }

        mtl10.from(".mobHead10",obj)
            .from(".mobDesc10",obj)
            .from(".mobV10,.playBtn10",obj)
            .from(".mobTitle10",obj)
            .from(".mobd10",obj)
    })
</script>

<svelte:window bind:innerWidth on:scroll={triggerAllow} />

<div class="mobContent10" bind:this={ele}>
    <div class="mob10">
        <h1 class="mobHead10">Architect Speak</h1>
        <p class="mobDesc10">Love from the industry</p>
        <div class="mobSlider10">
            <Splide options={
                {
                    type:"loop",
                    arrows:false
                }
            }
            on:move={
                ()=>{
                    if(playing && !playing.paused) {
                        playing.load();
                        isPlaying=false;
                    }
                }
            }
            >
                {#each arr as o,i}
                    <SplideSlide>
                        <div class="mobSlide10">
                            <div class="mobVdiv10">
                                {#if !isPlaying}
                                    <span class="playBtn10" style="scale:{scale}">
                                        <Fa icon={faPlayCircle} size="{innerWidth*.006}x" color="#827f7e" />
                                    </span>
                                {/if}
                                <video src="{o?.link}"
                                preload="auto"
                                on:click={
                                    (e)=>{
                                        if(e.target.paused){
                                            if(playing) lastPlaying=playing;
                                            playing=e.target;
                                            e.target.play();
                                            isPlaying=true;
                                        }else{
                                            e.target.pause();
                                            isPlaying=false;
                                        }
                                    }
                                }
                                poster="src/lib/videos/{tabs[i]}/poster.jpg"
                                class="mobV10"></video>
                            </div>
                            <h1 class="mobTitle10">{o.title}</h1>
                            <p class="mobd10">{o.desc}</p>
                        </div>
                    </SplideSlide>
                {/each}
            </Splide>
        </div>
    </div>
</div>

<style>
    .playBtn10{
        position: absolute;
        bottom:48vw;
        right:15vw;
        z-index: 999;
    }
    .mobContent10{
        padding:20vw 0;
    }
    .mobVdiv10{
        width:85vw;
        height:85vw;
        margin:5vw auto;
        overflow: hidden;
        border-radius: 60px;
    }
    .mobV10{
        width:100%;
        object-fit: cover;
    }
    .mobHead10,.mobTitle10{
        font-family: 'Playfair Display', serif;
        text-align: center;
        font-size: 10vw;
    }
    .mobd10,.mobDesc10{
        font-family: 'Raleway', sans-serif;
        text-align: center;
    }
    .mobDesc10{
        margin:3vw auto 5vw;
    }
</style>