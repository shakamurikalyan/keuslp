<script>
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import {onMount} from "svelte";
    import {Image} from "sveltestrap"

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var tl6=gsap.timeline({
            scrollTrigger:{
                trigger:".container6",
                scrub:1,
                start:"top center",
                end:"45% center",
                // markers:true
            }
        });
        let opt6={
            y:500,
            opacity:0,
            duration:1,
            scaleX:0,
            ease:"cric.out"
        }

        tl6.from(".mainHead6",opt6)
            .from(".mainDesc6",opt6)
            .from(".desc6",opt6)
            .from(".image",{...opt6,scaleX:1,scaleY:0,duration:2})

    })
</script>

<div class="container6 container-fluid">
    <h1 class="mainHead6">Meet the smart console</h1>
    <p class="mainDesc6">The only switch system your home needs.</p>
    <p class="desc6">A home becomes an aesthetic marvel when every single element comes together to define its character. Such exclusive homes deserve the most beautiful consoles.</p>
    <img class="image" src="src/lib/images/console.png" alt="console image" />
</div>

<style>
    .container6{
        text-align: center;
    }
    .image{
        width:60%;
        margin:1.5vw auto 2vw;
        /* border-radius: 20px; */
        border-radius: 2vw;
    }
    .desc6,.mainHead6,.mainDesc6{
        text-align: center;
        /* line-height: 55px; */
        line-height: 2.869vw;
        margin:0;
    }
    .mainHead6,.title6{
        font-family: 'Playfair Display', serif;
        margin:3vw 0 0;
    }
    .mainHead6{
        font-weight: 400;
        /* font-size: 50px; */
        font-size: 2.6vw;
    }
    .desc6,.titleDesc6,.mainDesc6{
        font-family: 'Raleway', sans-serif;
    }
    .desc6{
        margin:1.5vw auto;
        /* width:650px; */
        width:33.9vw;
        font-weight: 300;
        /* font-size: 18px; */
        font-size: .939vw;
        /* line-height: 25px; */
        line-height: 1.3vw;
    }
    .mainDesc6{
        /* font-size: 22px; */
        font-size: 1.1477vw;
        font-weight: 400;
    }
</style>