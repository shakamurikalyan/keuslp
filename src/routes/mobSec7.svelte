<script>
    import {gsap} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import {onMount} from "svelte";

    let obj=[{
        title:"Out of the box",
        desc:"Ready to use"
    },
    {
        title:"Wall or table top",
        desc:"You decide"
    },{
        title:"Easy sync",
        desc:"With the Keus app",
    },{
        title:"Total Control",
        desc:"Scens, climate and curtains"
    }]

    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);

        var mtl7=gsap.timeline({
            scrollTrigger:{
                trigger:".mobContent7",
                // markers:true,
                scrub:1,
                start:"top center",
                end:"center center"
            }
        });

        let obj={
            y:500,
            opacity:0,
            scale:0
        }
        mtl7.from(".mobHead7",obj)
            .from(".mobDesc7",obj)
        let heads=gsap.utils.toArray(".mobTitle7");
        let descs=gsap.utils.toArray(".mobd7");
        heads.forEach((x,i)=>{
            mtl7.from(x,{x:-500,opacity:0})
                .from(descs[i],{x:-500,opacity:0})
        })
        mtl7.from(".mimg7",{x:250,y:100,rotate:-90,duration:2})
    })
</script>

<div class="mobContent7">
    <div class="mob7">
        <h1 class="mobHead7">Ambience in you palm</h1>
        <div class="mobCon7">
            {#each obj as o,i}
                <h1 class="mobTitle7">{o.title}</h1>
                <p class="mobd7">{o.desc}</p>
            {/each}
        </div>
        <div class="mobi7">
            <img src="src/lib/images/wizard.png" alt="wizard image" class="mimg7">
        </div>
    </div>
</div>

<style>
    .mob7{
        color:#56483D;
        padding:15vw 10vw;
    }
    .mobHead7{
        font-size: 14vw;
        font-family: 'Playfair Display', serif;
        text-align: center;
    }
    .mobd7,.mobTitle7{
        font-family: 'Source Sans Pro', sans-serif;
    }
    .mobd7{
        font-size: 5vw;
    }
    .mobTitle7{
        margin:8vw auto 0;
    }
    .mimg7{
        width:180%;
    }
</style>