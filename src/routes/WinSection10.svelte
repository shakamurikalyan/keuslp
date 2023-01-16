<script>
    import '@splidejs/svelte-splide/css';
    import {Splide,SplideSlide,SplideTrack} from "@splidejs/svelte-splide";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import {onMount} from "svelte";
    import Fa from "svelte-fa";
    import {faChevronRight, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
    import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
    
    let playing;
    let active=1;
    let scale=1;
    let ele;
    let isPlaying=false;

    const checkScroll=()=>{
        // console.log("",playingVideo);
        if(playing){
            let y=ele.getBoundingClientRect();
            if(y.top>0){
                if(!playing.paused) {
                    playing.target.load();
                    isPlaying=false;
                }
                // console.log("paused---------------")
            }
            if(y.top<-(y.height)+200){
                if(!playing.paused) playing.target.load();
                isPlaying=false;
                // console.log("paused------------------")
            }
        }
    }

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


    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger)
        var tl10=gsap.timeline({
            scrollTrigger:{
                trigger:".container10",
                start:"top center",
                end:"10% center",
                scrub:1,
                // markers:true
            }
        });
        let tlopt={
            y:100,
            opacity:0,
            scaleY:0,
            ease:"cric.out",
            duration:1
        }
        tl10.from(".mainHead10",tlopt)
            .from(".desc10",tlopt);

        gsap.from(".video10",{
            scrollTrigger:{
                trigger:".container10",
                start:"10% center",
                end:"40% center",
                // markers:true,
                scrub:1
            },
            y:800,
            scaleX:0,
            opacity:0,
            duration:2,
            ease:"cric.out"
        })
    })
</script>

<svelte:window on:scroll={checkScroll} />

<div class="container10 pt-5" bind:this={ele} id="about">
    <div class="content10 mt-5">
        <h1 class="mainHead10">
            Architect Speak
        </h1>
        <p class="desc10">
            Love from the industry
        </p>
        <div class="slider10">
            <Splide hasTrack={false} options={{
                type   : 'loop',
                padding:"24%",
                autoScroll:{
                    speed:3,
                }
            }}
            on:move={e=>{
                if(playing) playing.target.load();
                isPlaying=false;
                active=e?.detail?.index? e.detail.index+1:1;
                
            }}
            >
                <SplideTrack>
                    {#each tabs as tab,i}
                        <SplideSlide>
                            <div class="videos10"
                            style="scale:{active==i+1? "1":".8"};opacity:{active==i+1? 1:.5}">
                                {#if active==i+1 && !isPlaying}
                                    <span class="playBtn" style="scale:{scale}">
                                        <Fa icon={faPlayCircle} size="{innerWidth*.001}x" color="#827f7e" />
                                    </span>
                                {/if}
                                <video
                                on:mouseover={()=>scale=2}
                                on:mouseleave={()=>scale=1}
                                class="video10 d-inline-block"
                                preload="auto"
                                id="video-{i}"
                                poster="src/lib/videos/{tab}/poster.jpg"
                                src="{arr[i]?.link}"
                                on:click={(e)=>{
                                    if(active==i+1){
                                        if(playing && playing.target.id!=e.target.id) playing.target.load();
                                        if(e.target.paused){
                                            e.target.play();
                                            playing=e;
                                            isPlaying=true;
                                        }else{
                                             e.target.pause();
                                            isPlaying=false;
                                            }
                                    }
                                }}
                                ></video>
                                {#if active==i+1}
                                    <h1 class="title10">{arr[i].title}</h1>
                                    <p class="titleDesc10">{arr[i].desc}</p>
                                {/if}
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
        right:15vw;
        bottom:10vw;
        z-index: 9999;
        transition: 100ms;
    }
    .videos10{
        text-align: center;
        margin:auto;
        position: relative;
        transition: 300ms;
    }
    .video10:hover{
        cursor: pointer;
    }
    .video10{
        width:60%;
        /* height:550px; */
        height:28.69vw;
        object-fit: cover;
        /* margin:50px auto; */
        margin:2.6vw auto;
        /* border-radius: 80px; */
        border-radius: 4.173vw;
        /* transition: 500ms; */
    }
    .mainHead10,.title10{
        font-family: 'Playfair Display', serif;
    }
    .title10{
        font-size:2.60vw;
    }
    .mainHead10{
        font-weight: 400;
        /* font-size: 50px; */
        font-size: 2.6083vw;
        text-align: center;
    }
    .desc10,.titleDesc10{
        font-family: 'Raleway', sans-serif;
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
        left:20vw;
    }
    .nextBtn10{
        right:20vw;
    }
    .titleDesc10{
        font-size: 1.043vw;
        margin: 0 0 1.5vw;
    }
    .desc10{
        font-weight: 500;
        /* font-size: 20px; */
        font-size: 1.044vw;
        text-align: center;
    }
</style>