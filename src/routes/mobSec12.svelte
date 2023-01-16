<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    let arr=[1,2,3,4,5,6,7,8,9,10,11,12];

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var mtl12=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent12",
                start:"top center",
                end:"80% center",
                // markers:true,
                scrub:1
            }
        });

        let obj={
            y:500,
            opacity:0,
            scale:0,
            ease:"slow.out"
        }

        mtl12.from(".mobHead12",obj)
            .from(".mobDesc12",obj)
        let imgs=gsap.utils.toArray(".img12");

        imgs.forEach(x=>mtl12.from(x,obj))
    })
</script>

<div class="mobContent12">
    <div class="mob12">
        <h1 class="mobHead12">Smart Home Projects</h1>
        <p class="mobDesc12">Choose your controls. </p>
        <div class="mobImages12">
            {#each arr as o}
                <img src="src/lib/images/img{o}.png" alt="img{o}" class="col-6 img12">
            {/each}
        </div>
    </div>
</div>

<style>
    .mobContent12{
        padding:20vw 5vw 0;
    }
    .mobHead12,.mobDesc12{
        color: #56483D;
    }
    .mobHead12{
        font-family: 'Playfair Display', serif;
        text-align: center;
        font-size: 10vw;
    }
    .mobDesc12{
        font-family: 'Raleway', sans-serif;
        text-align: center;
    }
</style>