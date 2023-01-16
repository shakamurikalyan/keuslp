<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    let obj=[
        {
            title:"Easy control",
            desc:"of scenes, devices and schedules"
        },
        {
            title:"Easy setup",
            desc:"with Alexa and Google Home"
        },
        {
            title:"Easy commands",
            desc:"for a complete smart home experience"
        }
    ]
    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var mtl8=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent8",
                // markers:true,
                scrub:1,
                start:"top center",
                end:"70% center"
            }
        });

        let obj={
            y:500,
            opacity:0,
            scale:0,
            ease:"cric.out"
        }
        mtl8.from(".mobHead8",obj)
            .from(".mobDesc8",obj)
            .from(".mobImg8",obj)
        let titles=gsap.utils.toArray(".mobTitle8");
        let descs=gsap.utils.toArray(".mobd8");
        titles.forEach((x,i)=>{
            mtl8.from(x,{x:-500,opacity:0})
                .from(descs[i],{x:-500,opacity:0})
        })
        mtl8.from(".mobImg8-1",obj)
            .from(".mobImg8-2",obj)
            .from(".mobDesc8-1",obj);
    })
</script>

<div class="mobContent8">
    <div class="mob8">
        <h1 class="mobHead8">
            Smart home at your command
        </h1>
        <p class="mobDesc8">Home that listens</p>
        <div class="mobImg8">
            <img src="src/lib/images/bedRoom.png" alt="bedroom image" class="mimg8">
            <img src="src/lib/images/voice.png" alt="voice control image" class="mvimg8">
        </div>
        {#each obj as o,i}
            <h1 class="mobTitle8">{o.title}</h1>
            <p class="mobd8">{o.desc}</p>
        {/each}
        <div class="mobImg8-1">
            <img src="src/lib/images/googleHome.png" alt="google home image" class="mimg8-1">
        </div>
        <div class="mobImg8-2">
            <img src="src/lib/images/alexa.png" alt="alexa image" class="mimg8-2">
        </div>
        <p class="mobDesc8-1">
            Amazon, Alexa adn all related logo are trademarks of amazon.com, 
            Inc. or its affiliates Google, Google play Google home and other marks are trademarks of Google LLC.
        </p>
    </div>
</div>

<style>
    .mobDesc8-1{
        font-size: 2.5vw;
    }
    .mobHead8{
        font-family: 'Playfair Display', serif;
        font-size: 14vw;
        text-align: center;
    }
    .mobDesc8{
        text-align: center;
        font-size: 6vw;
        margin:6vw auto;
    }
    .mobd8,.mobTitle8,.mobDesc8{
        font-family: 'Source Sans Pro', sans-serif;
    }
    .mobd8{
        font-size: 5vw;
        font-weight: 100;
        opacity:.8;
    }
    .mobTitle8{
        margin:10vw auto 0;
    }
    .mobContent8{
        margin:20vw 10vw;
    }
    .mobImg8{
        overflow: hidden;
        position: relative;
        border-radius: 10vw;
        margin:10vw auto 15vw;
    }
    .mimg8{
        width:130%;
        margin:0 -18vw;
    }
    .mvimg8{
        position: absolute;
        width:25%;
        bottom:55%;
        right:0%;
    }
    .mimg8-2{
        scale:1.3;
    }
    .mimg8-1{
        scale:1.1;
        margin:10vw auto 0;
    }
</style>