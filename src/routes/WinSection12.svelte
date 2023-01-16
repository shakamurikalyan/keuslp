<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
  import { random } from "gsap/gsap-core";

    let arr=[1,2,3,4,5,6,7,8,9,10,11,12];

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);
        
        var tl12=gsap.timeline({
            scrollTrigger:{
                trigger:".container12",
                start:"top center",
                end:"30% center",
                scrub:1,
                // markers:true
            }
        });
        let tlop={
            y:500,
            opacity:0,
            scaleY:0,
            duration:1
        }
        tl12.from(".mainHead12",tlop)
            .from(".desc12",tlop);

        let imgs=gsap.utils.toArray(".img12")

        imgs.forEach((img,i)=>{
            gsap.from(img,{
            scrollTrigger:{
                trigger:".container12",
                start:"35% center",
                end:"200% center",
                // markers:true,
                toggleActions:"restart none none reverse"
            },
            y:800,
            delay:i/10,
            duration:.8,
            opacity:0,
            ease:"cric.out",
        })
        })
    })
    
</script>

<div class="container12 pt-5">
    <div class="content12 mt-5">
        <h1 class="mainHead12 mt-5">Smart Home Projects</h1>
        <p class="desc12">Choose your controls. </p>
        {#each arr as img}
            <img src="src/lib/images/img{img}.png" alt="img{img}" class="col-md-2 col-sm-6 img12">
        {/each}
    </div>
</div>

<style>
    .container12{
        overflow: hidden;
    }
    .mainHead12,.title12{
        font-family: 'Playfair Display', serif;
    }
    .mainHead12{
        font-weight: 400;
        /* font-size: 50px; */
        font-size: 2.6083vw;
        text-align: center;
    }
    .desc12,.titleDesc12{
        font-family: 'Raleway', sans-serif;
    }
    .desc12{
        font-weight: 500;
        /* font-size: 24px; */
        font-size: 1.252vw;
        text-align: center;
    }
</style>