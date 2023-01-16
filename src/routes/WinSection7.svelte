<script>
  import { Row,Col } from "sveltestrap";
  import {gsap} from "gsap";
  import {ScrollTrigger} from "gsap/ScrollTrigger"
  import {onMount} from "svelte";

  onMount(()=>{
    var tl7=gsap.timeline({
        scrollTrigger:{
            trigger:".container7",
            start:"top center",
            end:"center center",
            // markers:true,
            scrub:1
        }
    });

    tl7.from(".main7",{y:200,opacity:0,duration:1.5,ease:"cric.out"})
        .from(".wizard",{y:200,opacity:0,duration:1.5,ease:"cric.out"});

  })

</script>

<div class="container7 container-fluid pt-5">
    <img src="src/lib/images/wizard.png" alt="wizard image" class="wizard" />
    <div class="main7 col-md-4 float-end rightFloat">
        <h1 class="mainHead7 mb-5">Ambience <br/>
            in your palm</h1>
            <Row class="mt-5 col-10">
                <Col class="mb-3">
                    <h3 class="title7">Out of the box</h3>
                    <p class="titleDesc7">Ready to use</p>
                </Col>
                <Col class="mb-3">
                    <h3 class="title7">Wall or table top</h3>
                    <p class="titleDesc7">You decide</p>
                </Col>
            </Row>
            <Row class="col-10">
                <Col class="pt-3">
                    <h3 class="title7">Easy sync</h3>
                    <p class="titleDesc7">With the Keus app</p>
                </Col>
                <Col class="pt-3">
                    <h3 class="title7">Total Control</h3>
                    <p class="titleDesc7">Scens, climate and curtains</p>
                </Col>
            </Row>
        </div>
</div>

<style>
    .wizard{
        position: absolute;
        width:70%;
        object-fit: cover;
        left:0;
        top:0;
    }
    .container7{
        position: relative;
        width:100vw;
        min-height: 100vh;
        overflow: hidden;
    }
    .mainHead7{
        color: #56483D;
        text-align: center;
        /* line-height: 55px; */
        line-height: 2.869vw;
        margin:0;
    }
    .mainHead7{
        font-family: 'Playfair Display', serif;
    }
    .mainHead7{
        font-weight: 400;
        /* font-size: 60px; */
        font-size: 3.13vw;
        /* line-height: 65px; */
        line-height: 3.39vw;
        /* width:400px; */
        width:20.86vw;
        text-align: left;
        
    }
    .titleDesc7,.title7{
        font-family: 'Source Sans Pro', sans-serif;
        color: #56483D;
    }
    .title7{
        /* font-size: 25px; */
        font-size: 1.304vw;
        /* line-height: 30px; */
        line-height: 1.565vw;
        font-weight: 400;
    }
    .titleDesc7{
        font-weight: 300;
        /* font-size: 20px; */
        font-size: 1.044vw;
        /* line-height: 30px; */
        line-height: 1.565vw;
        opacity:.7;
    }
    .rightFloat{
        /* margin:100px 150px 0; */
        margin:5.2167vw 7.825vw 0;
    }
</style>