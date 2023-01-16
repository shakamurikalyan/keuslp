<script>
  import Ac from "$lib/svgs/ac.svelte";
  import Adapter from "$lib/svgs/adapter.svelte";
  import Curtains from "$lib/svgs/curtains.svelte";
    import Sun from "$lib/svgs/sun.svelte";
  import System from "$lib/svgs/system.svelte";
    import { Col, Row } from "sveltestrap";
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger"

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".img9-1",{
            scrollTrigger:{
                trigger:".container9",
                scrub:1,
                ease:"cric.out",
                start:"top center",
                end:"center center",
                // markers:true
            },
            x:-800,
            y:800,
            opacity:0.5
        })

        gsap.from(".rightSide9",{
            scrollTrigger:{
                trigger:".container9",
                scrub:1,
                ease:"cric.out",
                start:"30% center",
                end:"center center",
                // markers:true
            },
            y:800,
            opacity:0
        })
    })
</script>

<div class="container9" id="solutions">
    <div class="content9">
        <Row>
            <Col>
                <div class="img9-1">

                    <img src="src/lib/images/app.png" alt="app image" class="img9">
                </div>
            </Col>
            <Col class="pt-5 container-fluid">
                <div class="rightSide9">
                    <h1 class="mainHead9">Control from<br/>
                        anywhere</h1>
                    <p class="desc9">A home that responds</p>
                    <p class="titleDesc9">Access your home from anywhere in the world. Create unique scens, define your ambience, schedules your routines, control all devices and elevate your living experience with the Keus smart app.</p>
                    <p class="title9 col-md-4 d-inline-block">
                        <span class="icon9">
                            <Sun color="#56483D" width="2.3vw" />
                        </span>
                        Light Control
                    </p>
                    <p class="title9 col-md-4 d-inline-block">
                        <span class="icon9">
                            <Adapter color="#56483D" width={1.5} />
                        </span>
                        Appliance Control
                    </p>
                    <p class="title9 col-md-4 d-inline-block">
                        <span class="icon9">
                            <Ac width="2.3vw" color="#56483D" />
                        </span>
                        Climate Control
                    </p>
                    <p class="title9 col-md-4 d-inline-block">
                        <span class="icon9">
                            <Curtains color="#56483D" width="2.3vw" />
                        </span>
                        Curtain Control
                    </p>
                    <p class="title9 col-md-4 d-inline-block">
                        <span class="icon9">
                            <System color="#56483D" width="2.3vw" />
                        </span>
                        Media Control
                    </p>
                </div>
            </Col>
        </Row>
    </div>
</div>

<style>
    .img9{
       width:131%
    }
    .icon9{
        margin:0 1vw 0;
    }
    .mainHead9{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        /* font-size: 60px; */
        font-size: 3.13vw;
        /* line-height: 65px; */
        margin:2vw 0 0;
        line-height: 3.3908vw;
        text-align: left;
        color:#56483D;
        
    }
    .desc9,.titleDesc9,.title9{
        font-family: 'Source Sans Pro', sans-serif;
        color:#56483D;
    }
    .desc9{
        /* font-size: 25px; */
        margin: 1vw 0 0;
        font-size: 1.304vw;
        font-weight: 400;
    }
    .title9{
        /* font-size: 25px; */
        /* line-height: 30px; */
        margin:2vw 0 0;
        font-size: 1.304vw;
        line-height: 1.565vw;
        font-weight: 400;
    }
    .titleDesc9{
        font-weight: 300;
        /* font-size: 20px; */
        font-size: 1.044vw;
        /* width:450px; */
        width:23.47vw;
        /* line-height: 30px; */
        line-height: 1.565vw;
        margin:1vw 0;
        /* padding:0 0 1vw; */
        opacity:.7;
    }
    .img9-1{
        /* background-image: url(../lib/images/app.png); */
    }
    .rightSide9{
        margin:5vw 0 0;
        padding:0 0 3vw;
    }
    .container9,.content9{
        min-height:120vh;
        /* width:100%; */
        overflow: hidden;;
    }
</style>