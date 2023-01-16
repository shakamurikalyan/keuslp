<script>
    import Sun from "$lib/svgs/sun.svelte";
    import Adapter from "$lib/svgs/adapter.svelte";
    import Ac from "$lib/svgs/ac.svelte";
    import Curtains from "$lib/svgs/curtains.svelte";
    import System from "$lib/svgs/system.svelte";
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var mtl9=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent9",
                // markers:true,
                scrub:1,
                start:"top center",
                end:"65% center"
            }
        });
        
        let obj={
            y:500,
            opacity:0,
            scale:0,
            ease:"cric.out"
        }
        mtl9.from(".mobHead9",obj)
            .from(".mobDesc9",obj)
            .from(".mobd9",obj)
        let heads=gsap.utils.toArray(".mbTitle9");
        heads.forEach(x=>mtl9.from(x,{x:-500,opacity:0}));
        mtl9.from(".mimg9",{delay:1,x:-500,y:200,opacity:.5,duration:2});
    })
</script>

<div class="mobContent9">
    <div class="mob9">
        <h1 class="mobHead9">Control from any where</h1>
        <p class="mobDesc9">A home that responds</p>

        <p class="mobd9">Access your home from anywhere in the world. Create unique scens,
             define your ambience, schedules your routines, control all devices and elevate your living experience with the Keus smart app.</p>

        <h2 class="mbTitle9">
            <span class="mob9Icon">
                <Sun width="12vw" color="#56483D" />
            </span>
            Light Control
        </h2>
        <h2 class="mbTitle9">
            <span class="mob9Icon">
                <Adapter width={7.5} color="#56483D" />
            </span>
            Appliance Control
        </h2>
        <h2 class="mbTitle9">
            <span class="mob9Icon">
                <Ac width="11vw" color="#56483D" />
            </span>
            Climate Control
        </h2>
        <h2 class="mbTitle9">
            <span class="mob9Icon">
                <Curtains width="11vw" color="#56483D" />
            </span>
            Curtain Control
        </h2>
        <h2 class="mbTitle9">
            <span class="mob9Icon">
                <System width="12vw" color="#56483D" />
            </span>
            Media Control
        </h2>
        <div class="mobImg9">
            <img src="src/lib/images/app.png" alt="app image" class="mimg9">
        </div>
    </div>
</div>

<style>
    .mobContent9{
        color:#56483D;
        padding:25vw 10vw;
    }
    .mob9Icon{
        margin:0 5vw 0 0;
    }
    .mobHead9{
        font-family: 'Playfair Display', serif;
        font-size: 13vw;
        text-align: center;
    }
    .mobDesc9{
        text-align: center;
        font-size: 6vw;
        margin:10vw auto;
    }
    .mobd9,.mbTitle9,.mobDesc9{
        font-family: 'Source Sans Pro', sans-serif;
    }
    .mobd9{
        font-size: 5.5vw;
        padding: 3vw;
        text-align: center;
        opacity: .8;
        margin:0vw auto 15vw;
    }
    .mbTitle9{
        font-size: 6.5vw;
        margin-top: 10vw;
        padding:0 3vw;
    }
    .mimg9{
        width:250%;
        margin:0 -35vw;
    }
</style>