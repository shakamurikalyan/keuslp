<script>
    import {Row,Col,Input} from "sveltestrap";
    import Fa from "svelte-fa";
    import Select from "svelte-select";
    import {faFacebook, faInstagram, faLinkedin,} from "@fortawesome/free-brands-svg-icons"
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="mobContent13">
    <div class="mob13">
        <div class="left13 float-end">
            <h1 class="mobHead13">Elevate your living experience</h1>
            <p class="mobDesc13">Register for a exclusive smart home demo at our custom <br/>
                built studio apartment.
            </p>
        </div>
        <div class="form13">
            <form class="formContent13" on:submit|preventDefault>
                <input class="inp" type="text" placeholder="&ensp;&ensp;Full name">
                <input class="inp" type="tel" placeholder="&ensp;&ensp;Mobile">
                <input class="inp" type="email" placeholder="&ensp;&ensp;Email">
                <div class="input">
                    <Select containerStyles="background-color:#373737;border:none;height:2.5vw" inputStyles="background-color:#373737;height:100%;font-size:3.1vw;color:#fff" placeholder="&ensp;&ensp;Property type" />
                </div>
                <div class="input">
                    <Select containerStyles="background-color:#373737;border:none;height:2.5vw" inputStyles="background-color:#373737;height:100%;font-size:3.1vw;color:#fff" placeholder="&ensp;&ensp;Property size" />
                </div>
                <div class="input">
                    <Select containerStyles="background-color:#373737;border:none;height:2.5vw" inputStyles="background-color:#373737;height:100%;font-size:3.1vw;color:#fff" placeholder="&ensp;&ensp;Stage of construction" />
                </div>
                <button type="submit" class="submit">Book your appointment</button>
            </form>
        </div>
        <div class="mobFooter13">
            <div class="d-block">
                <a href="" class="footerLink13">About Us</a>
                <a href="" class="footerLink13">Contact</a>
                <a href="" class="footerLink13">Career</a>
            <br/>
                <a href="" class="footerLink13">Press Room</a>
                <a href="" class="footerLink13">Gallery</a>
                <a href="" class="footerLink13">Awards</a>
            <br/>
                <a href="" class="footerLink13">Cookie Polices</a>
                <a href="" class="footerLink13">Terms & Conditions</a>
                <a href="" class="footerLink13">Service & Support</a>
                   
            </div>
        </div>
    </div>
    <div class="mobFoot13">
        <p class="mobFootDesc13">Copyright &copy 2020 KEUS All rights reserved &emsp;
        </p>
        <p class="iconP text-center">
            <span class="icons13">
                <a href="" class="icon13"><Fa icon={faInstagram} size="2x"  /></a>
                <a href="" class="icon13"><Fa icon={faFacebook} size="2x" /></a>
                <a href="" class="icon13"><Fa icon={faLinkedin} size="2x" /></a>
                <a href="" class="icon13"><Fa icon={faEnvelope} size="2x" /></a>
            </span>
        </p>
    </div>
</div>

<style>
    .icon13{
        margin-left: 8px;
    }
    .footerLink13,.icon13{
        color:#fff;
        text-decoration: none;
    }
    .footerLink13{
        display: block;
        text-align: center;
        margin:2vw;
    }
    .submit{
        color:#fff;
        border:none;
        background-color: #8fbec4;
        font-size: 5vw;
        width:100%;
        margin:3vw auto 10vw;
    }
    .inp{
        background-color: #373737;
        border:none;
        display: block;
        width:100%;
        margin:2vw auto;
        height: 10vw;
        font-size: 4vw;
    }
    .input{
        width:100%;
        margin:2vw auto;
    }
    .mobContent13{
        background-color: #202020;
        color:#fff;
        margin:25vw auto 0;
    }
    .mob13{
        /* margin:10vw auto; */
        padding:0 15vw;
    }
    .iconP{
        margin:0;
    }
    .mobHead13{
        font-family: 'Playfair Display', serif;
        text-align: center;
        font-size: 9vw;
    }
    .mobFoot13{
        background-color: #000;
        margin:10vw auto 0;
    }
    .mobDesc13,.mobFootDesc13{
        font-family: 'Raleway', sans-serif;
        text-align: center;
        font-size: 2.6vw;
        margin:0;
    }
    .mobDesc13{
        margin:3vw auto 8vw;
    }
    .mobFootDesc13{
        display: flex;
        align-items: center;
        justify-content: center;
        margin:3vw auto 3vw;
    }
</style>