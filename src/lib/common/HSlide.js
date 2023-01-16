import {cubicInOut} from "svelte/easing"

export default function Slide(node,params,type){
    let styles=getComputedStyle(node);
    let width=styles.width.match(/(\d+)/)[0];
    let height=styles.height.match(/(\d+)/)[0];
    console.log(width,params.delay);
    return{
        duration:400,
        css:(t,u)=>`width:${t*width}px;max-height:${height};opacity:${t*0.5};z-index:-1`,
        delay:params?.delay || 0,
        easing:cubicInOut
    }
}