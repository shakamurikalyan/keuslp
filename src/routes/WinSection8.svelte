<script>
    import {Row,Col} from "sveltestrap"
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    
    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(".leftCont8",{
            scrollTrigger:{
                trigger:".container8",
                start:"top 65%",
                end:"center 65%",
                // markers:true,
                scrub:1
            },
            y:800,
            x:-1000,
            scaleY:0,
            opacity:0,
            ease:"cric.out"
        })
        gsap.from(".image8",{
            scrollTrigger:{
                trigger:".container8",
                start:"top 65%",
                end:"center 65%",
                // markers:true,
                scrub:1
            },
            y:800,
            x:800,
            scaleX:0,
            opacity:0,
            ease:"cric.out"
        })
    })
</script>

<div class="container8">
    <div class="content8">
        <Row>
            <Col>
                <div class="leftCont8">
                    <div class="leftColumn8">
                        <h1 class="mainHead8">Smart home at <br/>
                            your command</h1>
                            <p class="desc8 mt-3 mb-5">Home that listens</p>
                        <h2 class="title8 mt-5">Easy control</h2>
                        <p class="titleDesc8">of scenes, devices and schedules</p>
                        <h2 class="title8">Easy setup</h2>
                        <p class="titleDesc8">with Alexa and Google Home</p>
                        <h2 class="title8">Easy commands</h2>
                        <p class="titleDesc8">for a complete smart home experience</p>
                        <Row class="col-10">
                            <Col class="d-flex align-items-center">
                                <img src="src/lib/images/googleHome.png" alt="googleHome image" class="img8-1">
                            </Col>
                            <Col>
                                <img src="src/lib/images/alexa.png" alt="alexa image" class="img8-2">
                            </Col>
                        </Row>
                        <p class="desc8-1">Amazon, Alexa adn all related logo are trademarks of amazon.com, Inc. or its affiliates Google, Google play Google home and other marks are trademarks of Google LLC.</p>
                    </div>
                </div>
            </Col>
            <Col>
                <div class="image8">
                    <img src="src/lib/images/voice.png" alt="voice control" class="img8-3">
                </div>
            </Col>
        </Row>
    </div>
</div>

<style>
    .container8{
        overflow: hidden;
    }
    .image8{
        background-image: url(../lib/images/bedRoom.png);
        background-size: 100% 100%;
        min-height:100vh;
    }
    .img8-1{
        /* width:157px; */
        width:8.190vw;
    }
    .img8-2{
        /* width:168px; */
        width:8.764vw;
    }
    .mainHead8{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        /* font-size: 60px; */
        font-size: 3.13vw;
        /* line-height: 65px; */
        line-height: 3.39vw;
        text-align: left;
        
    }
    .desc8,.desc8-1,.titleDesc8,.title8{
        font-family: 'Source Sans Pro', sans-serif;
    }
    .leftColumn8{
        margin:4vw 0 0;
        padding:1vw 4vw 0;
    }
    .title8{
        /* font-size: 25px; */
        font-size: 1.304vw;
        /* line-height: 30px; */
        line-height: 1.565vw;
        font-weight: 400;
    }
    .titleDesc8{
        font-weight: 300;
        /* font-size: 20px; */
        font-size: 1.044vw;
        /* line-height: 30px; */
        line-height: 1.565vw;
        opacity:.7;
    }
    .desc8,.title8{
        font-weight: 400;
        /* font-size: 24px; */
        font-size: 1.252vw;
        /* line-height: 30px; */
        line-height: 1.565vw;
    }
    .titleDesc8,.desc8-1{
        font-weight: 300;
        /* font-size: 18px; */
        font-size: 0.939vw;
        opacity:.82;
    }
    .titleDesc8{
        /* line-height: 30px; */
        line-height: 1.565vw;
    }
    .desc8-1{
        /* font-size: 10px; */
        font-size: 0.52167vw;
        /* line-height: 15px; */
        line-height: 0.7825vw;
        color:#282828;
        /* width:375px; */
        width:19.5625vw;
    }
    .img8-3{
        position: absolute;
        width:10%;
        right:1.5%;
        bottom:26vw;
    }
</style>