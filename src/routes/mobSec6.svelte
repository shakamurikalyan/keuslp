<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var mtl6=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent6",
                // markers:true,
                start:"top 60%",
                end:"center 60%",
                scrub:1
            }
        });

        let obj={
            y:500,
            opacity:0,
            ease:"cric.out",
            scale:0,
        }
        mtl6.from(".mobHead6",obj)
            .from(".mobDesc6",obj)
            .from(".mobd6",obj)
            .from(".mimg6",obj);
    })
</script>

<div class="mobContent6">
    <div class="mob6 text-center">
        <h1 class="mobHead6">Meet the smart console</h1>
        <p class="mobDesc6">The only switch system your home needs.</p>
        <p class="mobd6">A home becomes an aesthetic marvel when every single element comes together to define its character. Such exclusive homes deserve the most beautiful consoles.</p>
        <div class="mimg6">
            <img class="mobImage6" src="src/lib/images/console.png" alt="console image" />
        </div>
    </div>
</div>

<style>
    .mobHead6{
        font-family: 'Playfair Display', serif;
        font-size: 14vw;
        margin:15vw auto;
    }
    .mobDesc6,.mobd6{
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        font-size: 6vw;
        margin:5vw auto;
    }
    .mobd6{
        padding:3vw;
        font-size: 5vw;
    }
    .mobHead6,.mobd6,.mobDesc6{
        text-align: center;
    }
    .mob6{
        padding:10vw 5vw;
    }
    .mobImage6{
        width:200%;
        object-fit:fill;
        margin:0 -100vw;
    }
    .mimg6{
        width:80vw;
        height:80vw;
        overflow: hidden;
        margin:auto;
        position:relative;
        border-radius: 10vw;
    }
</style>