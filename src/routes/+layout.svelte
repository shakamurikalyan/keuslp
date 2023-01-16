<script>
    import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
    import {onMount} from "svelte";
    import Fa from "svelte-fa";
    
    let lscroll;
    let innerWidth;

    const toggle=()=>{
        let ele=document.querySelector(".main");
        let dim=ele?.getBoundingClientRect();
        let nav=document.querySelector(".navbar");
        let gtdiv=document.querySelector(".goToTop");
        if(dim.y>-500 && gtdiv) gtdiv.style.right="-6vw";
        else if(gtdiv) gtdiv.style.right="4vw"

        if(lscroll){
            if(lscroll>dim.y){
                // console.log("closed")
                nav.style.top="-20vw";
                lscroll=dim.y;
            }
            else{
                // console.log("opened")
                 nav.style.top="0";
                 lscroll=dim?.y;
                }
        }
        else lscroll=dim.y
    }
</script>

<svelte:window on:scroll={toggle} bind:innerWidth/>

<nav class="navbar fixed-top pt-0 pb-0 navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="src/lib/images/logo.png" alt="logo" class="mainLogo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#solutions">Solution</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" tabindex="-1" aria-disabled="true">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#product" tabindex="-1" aria-disabled="true">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="top"></div>
 {#if innerWidth>800}
    <div class="goToTop">
      <p class="godesc">Go to top</p>
      <a class="goBtn" href="#top"><span class="goIcon"><Fa icon={faArrowUp } color="#fff" /></span></a>
    </div>
 {/if}
<slot />

<style>
  .godesc{
    font-weight: 500;
    margin:2vw auto;
    font-size:1.2vw;
  }
    .active{
        border-bottom: 3px solid #835031;
    }
    .nav-link{
      font-size: 1vw;
    }
    .nav-item{
        margin:0 3vw;
    }
    .navbar{
        padding-left:3vw;
        transition: 500ms;
    }
    .mainLogo{
        width:4.5vw;
    }
    .goToTop{
      color:#56483D;
      position: fixed;
      z-index: 99999;
      bottom:2.5vw;
      right:-6vw;
      transition:300ms;
      /* text-shadow: 0 .1vw .2vw #fff; */
    }
    .goBtn{
      background-color: #835031;
      border:none;
      padding:1vw 1.6vw;
      font-size: 1.5vw;
      border-radius: 50%;
    }
    @media screen and (max-width:800px){
      .mainLogo{
        width:70%;
      }
      .nav-link{
        font-size: 20px;
      }
    }
</style>