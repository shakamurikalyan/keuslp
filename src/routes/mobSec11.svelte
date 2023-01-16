<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import Fa from "svelte-fa";
    import {faStar,faPlayCircle} from "@fortawesome/free-solid-svg-icons";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger"
    import {onMount} from "svelte"

        let scale=1;
        let innerWidth;
        let playing;
        let isPlaying=false;
        let ele;

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

        var mtl11=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent11",
                // markers:true,
                scrub:1,
                start:"-20% center",
                end:"40% center"
            }
        });

        let obj={
            y:500,
            opacity:0,
            scale:0,
            ease:"cric.out",
            duration:5
        }
        mtl11.from(".mobHead11",obj)
            .from(".mobDesc11",obj)
            .from(".mobTitle11",obj)
            .from(".mobd11",obj)
            .from(".mobdd11",obj)
        let stars=gsap.utils.toArray(".mobStar");
        stars.forEach(x=>mtl11.from(x,{x:-500,opacity:0,duration:.8}));
        mtl11.from(".mobVdiv11,.playBtn",{...obj,duration:1})
            
    })

</script>

<svelte:window bind:innerWidth on:scroll={triggerAllow} />

<div class="mobContent11" bind:this={ele}>
    <div class="mob11">
        <h1 class="mobHead11">Smart Home Tours</h1>
        <p class="mobDesc11">walkthroughs of our recent installations</p>
        <div class="mobSlideDiv11">
            <Splide options={
                {
                    arrows:false,
                    type:"loop"
                }
            }
            on:move={
                ()=>{
                    if(playing && !playing.paused){
                        playing.load();
                        isPlaying=false;
                    }
                }
            }
            >
                {#each arr as o,i}
                    <SplideSlide>
                        <h1 class="mobTitle11">{o.title}</h1>
                        <p class="mobd11">{o.desc}</p>
                        <p class="mobdd11 mobdd11-2">{o.dd}</p>
                        <div class="mobStars11 text-center">
                            <span class="mobStar"><Fa icon={faStar} 
                                color="{o.stars>=1? "#BEBDBD":"#e5e5e5"}"
                                /></span>
                            <span class="mobStar"><Fa icon={faStar} 
                                color="{o.stars>=2? "#BEBDBD":"#e5e5e5"}"
                                /></span>
                            <span class="mobStar"><Fa icon={faStar} 
                                color="{o.stars>=3? "#BEBDBD":"#e5e5e5"}"
                                /></span>
                            <span class="mobStar"><Fa icon={faStar} 
                                color="{o.stars>=4? "#BEBDBD":"#e5e5e5"}"
                                /></span>
                            <span class="mobStar"><Fa icon={faStar} 
                                color="{o.stars>=5? "#BEBDBD":"#e5e5e5"}"
                                /></span>
                        </div>
                        <div class="mobVdiv11">
                            {#if !isPlaying}
                                <span class="playBtn" style="scale:{scale}">
                                    <Fa icon={faPlayCircle} size="{innerWidth*.006}x" color="#827f7e" />
                                </span>
                            {/if}
                            <video src="{o?.link}"
                            preload="auto"
                            on:click={
                                e=>{
                                    if(e.target.paused){
                                        playing=e.target;
                                        isPlaying=true;
                                        e.target.play();
                                    }else{
                                        e.target.pause();
                                        isPlaying=false;
                                    }
                                }
                            }
                            poster="src/lib/videos/homes/{i+1}/poster.jpg"
                            class="mobV11"></video>
                        </div>
                    </SplideSlide>
                {/each}
            </Splide>
        </div>
    </div>
</div>

<style>
    .playBtn{
        position: absolute;
        bottom:5vw;
        right:7vw;
    }
    .mobSlideDiv11{
        margin:15vw auto;
    }
    .mobContent11{
        padding:10vw 6vw;
    }
    .mobVdiv11{
        width:85vw;
        height:85vw;
        border-radius: 50px;
        position: relative;
        overflow: hidden;
        margin:10vw auto;
    }
    .mobV11{
        width: 100%;
        height: 85vw;
        object-fit: cover;
    }
    .mobHead11,.mobTitle11{
        font-family: 'Playfair Display', serif;
        text-align: center;
        font-size: 10vw;
    }
    .mobd11,.mobDesc11,.mobdd11{
        font-family: 'Raleway', sans-serif;
        text-align: center;
    }
</style>