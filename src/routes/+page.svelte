<script>
    import {onMount,onDestroy} from 'svelte';
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger"
    import {Row,Col,Card,CardBody, Input, Button} from "sveltestrap"
    import Select from "svelte-select";
    import Tab3 from "./section3.svelte";
    import Tab4 from "./section4.svelte"
    import Win5 from "./WinSection5.svelte"
    import Win6 from "./WinSection6.svelte"
    import Win7 from "./WinSection7.svelte";
    import Win8 from "./WinSection8.svelte";
    import Win9 from "./WinSection9.svelte"
    import Win10 from "./WinSection10.svelte"
    import Win11 from "./WinSection11.svelte";
    import Win12 from './WinSection12.svelte';
    import Win13 from "./WinSection13.svelte";
    import Mob4 from "./mobSec4.svelte";
    import Mob5 from "./mobSec5.svelte"
    import Mob3 from "./mobSection3.svelte";
    import Mob6 from "./mobSec6.svelte";
    import Mob7 from "./mobSec7.svelte";
    import Mob8 from "./mobSec8.svelte";
    import Mob9 from "./mobSec9.svelte";
    import Mob10 from "./mobSec10.svelte";
    import Mob11 from "./mobSec11.svelte";
    import Mob12 from "./mobSec12.svelte";
    import Mob13 from "./mobSec13.svelte"

    let innerWidth;
    let innerHeight;
    var tl;
    var formUp;
    var formMobileUp;
    var freezeForm;
    let mob=false;
    var media;

    $:console.log(innerWidth)

    onMount(async ()=>{
        let ele=document.querySelector(".section1");
        ele.style.color="#fff";
        var tl=gsap.timeline();
        let opt1={
            y:100,
            opacity:0,
            duration:1,
            ease:"cric.out"
        }
        tl.from(".ani1",opt1)
            .from(".ani2",opt1)
            .from(".ani3",opt1)
    })

    onDestroy(()=>{
        
    })

</script>

<svelte:window bind:innerWidth bind:innerHeight />
<!-- <p>{innerWidth}</p> -->
<div class="main">
    <!-- <div class="scaleDiv"> -->
        <div class="section1 section">
            <div class="content">
                <div class="intro">
                    <h1 class="mainHeading ani1">Truly smart</h1>
                    <h1 class="mainHeading ani2">Truly wireless</h1><br/>
                    <p class="desc ani3">The Keus smart home is a wireless marvel that delivers deep automation experiences that are easy to install, easier to configure and easiest to use.</p>
                </div>
            </div>
        </div>
    <!-- </div> -->
    <div class="section2 section">
        <div class="form {innerWidth>1350? " float-end":"mx-auto"}">
            <Card class="text-center col-12" style="border:{innerWidth<800? "none":""}">
                <CardBody>
                    <form class="formContent" on:submit|preventDefault>
                        <h3 class="cardHeading mb-3">Smart home demo</h3>
                        <p class="cardText mb-3"
                        >KEUS smart home helps unlock the potential of your spaces to create memorable and transformative experiences.</p>
                        <div class="inputs">
                            <div class="input">
                                <Input type="text" placeholder="*Full name" style="font-size:{innerWidth>800? "0.939vw":"18px"}" />
                            </div>
                            <div class="input">
                                <Input type="text" placeholder="*Mobile" style="font-size:{innerWidth>800? "0.939vw":"18px"}" />
                            </div>
                            <div class="input">
                                <Input type="text" placeholder="*Email" style="font-size:{innerWidth>800? "0.939vw":"18px"}" />
                            </div>
                            <div class="input">
                                {#if innerWidth>700}
                                    <Select placeholder="*Property type" inputStyles="font-size:0.939vw" containerStyles="height:1.8vw" />
                                    {:else}
                                    <Select placeholder="*Property type" />
                                {/if}
                            </div>
                            <div class="input">
                                {#if innerWidth>700}
                                    <Select placeholder="Property size" inputStyles="font-size:0.939vw" containerStyles="height:1.8vw" />
                                    {:else}
                                    <Select placeholder="Property size"/>
                                {/if}
                            </div>
                            <div class="input">
                                {#if innerWidth>700}
                                    <Select placeholder="State of construction" inputStyles="font-size:0.939vw" containerStyles="height:1.8vw" />
                                    {:else}
                                    <Select placeholder="State of construction" />
                                {/if}
                            </div>
                        </div>
                        {#if innerWidth>700}
                            <button class="submit" type="submit">Book your appointment</button>
                            {:else}
                            <button class="submit" type="submit" style="font-size:20px;padding:15px;">Book your appointment</button>
                        {/if}
                    </form>
                </CardBody>
            </Card>
        </div>
    </div>
    <div class="section3 section">
        {#if innerWidth>900 && !mob}
            <Tab3 />
            {:else}
            <Mob3 />
        {/if}
    </div>
    <div class="section4 section">
        {#if innerWidth>900 && !mob}
            <Tab4 />
            {:else}
            <Mob4 />
        {/if}
    </div>
    <div class="section section5">
        {#if innerWidth>900 && !mob}
            <Win5 />
            {:else}
            <Mob5 />
        {/if}
    </div>
    <div class="section section6">
        {#if innerWidth>900 && !mob}
            <Win6 />
            {:else}
            <Mob6 />
        {/if}
    </div>
    <div class="section section7">
        {#if innerWidth>900 && !mob}
            <Win7 />
            {:else}
            <Mob7 />
        {/if}
    </div>
    <div class="section section8">
        {#if innerWidth>900 && !mob}
            <Win8 />
            {:else}
            <Mob8 />
        {/if}
    </div>
    <div class="section9 section">
        {#if innerWidth>900 && !mob}
            <Win9 />
            {:else}
            <Mob9 />
        {/if}
    </div>
    <div class="section section10">
        {#if innerWidth>900 && !mob}
            <Win10 />
            {:else}
            <Mob10 />
        {/if}
    </div>
    <div class="section section11">
        {#if innerWidth>900 && !mob}
        <Win11 />
        {:else}
        <Mob11 />
        {/if}
    </div>
    <div class="section12 section">
        {#if innerWidth>900 && !mob}
        <Win12 />
        {:else}
        <Mob12 />
        {/if}
    </div>
    <div class="section13 section">
        {#if innerWidth>900 && !mob}
        <Win13 />
        {:else}
        <Mob13 />
        {/if}
    </div>
</div>

<style>
    /* 0.05216666667 x px */
    .desc{
        width:24.51833vw;
        /* font-size: 25px; */
        font-size: 1.30vw;
    }
    .scaleDiv{
        overflow: hidden;
    }
    .section{
        /* height:1000px; */
        min-height: 100vh; 
        min-width:100%;
        position: relative;
        overflow: hidden;
    }
    .section1{
        background-image: url(../lib/images/hall.jpg);
        /* background-color: transparent; */
        background-size:100% 100%;
        color:transparent;
        background-repeat: no-repeat;
        overflow: hidden;
        min-height:100vh;
    }
    .mainHeading{
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        /* font-size:60px; */
        font-size:3.13vw;
    }
    .cardText,.cardHeading{
        color:#282828;
        margin:auto;
    }
    .cardHeading{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        /* font-size:40px; */
        font-size:2.09vw;
    }
    .cardText{
        font-family: 'Raleway', sans-serif;
        /* font-size: 14px; */
        font-size: 0.73vw;
        /* line-height: 20px; */
        line-height: 1.044vw;
    }
    .content{
        margin:40vh 0 0;
        width:85%;
    }
    .intro{
        margin:30vh 15vw 0;
    }
    .section2{
        position: absolute;
        /* padding:40px 0 0; */
        padding:2.0866vw 0 0;
        top:10vh;
        left:58%;
        min-width: 27vw;
    }
    .input{
        /* width:400px; */
        width:20.86vw;
        /* margin:20px auto; */
        margin:1.044vw auto;
    }
    .form{
        /* width:500px; */
        width:26.0834vw;
        position: inherit;
    }
    .formContent{
        /* padding:35px; */
        padding:1.82583vw;
    }
    .submit{
        width:20.86vw;
        /* height:55px; */
        height:2.869vw;
        color:#fff;
        background-color:#835031;
        margin:1vw 0 0;
        /* font-size: 20px; */
        font-size: 1.044vw;
        border: none;
    }
    .section3,.section4{
        background-color: #E3DDD9;
    }
    .section5{
        background-color: #C8B8AD;
        overflow: hidden;
    }
    .section7{
        background-color: #E3DDD9;
        overflow: hidden;
    }
    .section8{
        min-height:100vh;
    }
    .section9{
        background-color: #E3DDD9;
    }
    .section10{
        min-height: 10vh;
    }
    .section11{
        overflow: hidden;
    }
    .section12{
        min-height: 80vh;
        background-color: #E3DDD9;
    }
    .section13{
        background-color: #202020;
        min-height: 80vh;
    }

    @media screen and (max-width:900px){
        ::-webkit-scrollbar{
            display: none;
        }
        *{
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        .mainHeading{
            font-size:48px;
            /* font-size:2.504vw; */
        }
        .content{
            margin:40vh auto;
            width:100%;
        }
        .intro{
            width:80%;
            margin:auto;
            text-align: left;
        }
        .section1{
            min-height:110vh;
            background-size:cover;
        }
        .desc{
            width:320px;
            font-size: 20px;
        }
        .cardHeading{
            font-size: 45px;
            line-height: 50px;
        }
        .cardText{
            font-size: 18px;
            line-height: 25px;
            width:288px;
        }
        .section2{
            position: relative;
            padding:0;
            min-height:10vh;
            min-width:100%;
            background: #fff;
            left:0;
            top:0;
        }
        .form{
            width:370px;
            position: inherit;
            margin:50px auto;
        }
        .input,.submit{
            width:288px;
        }
        .submit{
            margin:20px auto;
            height:auto;
        }
    }
</style>