<script>
  import { Col, Row, Input } from "sveltestrap";
  import Select from "svelte-select";
  import Fa from 'svelte-fa'
  import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
  import {faFacebook,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons"


</script>

<div class="container13" id="contact">
    <div class="content13">
        <Row>
            <Col class="pt-5">
                <div class="left13 float-end mt-5 pt-5">
                    <h1 class="mainHead13 mt-5">Elevate your <br/> living <br/> experience</h1>
                    <p class="desc13 mt-3">Register for a exclusive smart home demo at our custom <br/>
                        built studio apartment.
                    </p>
                </div>
            </Col>
            <Col class="pt-5">
                <div class="form13 mt-5 pt-5">
                    <form class="formContent13" on:submit|preventDefault>
                        <input class="inp" type="text" placeholder="&ensp;&ensp;Full name">
                        <input class="inp" type="tel" placeholder="&ensp;&ensp;Mobile">
                        <input class="inp" type="email" placeholder="&ensp;&ensp;Email">
                        <div class="input">
                            <Select containerStyles="background-color:#373737;border:none;height:2.6vw" inputStyles="background-color:#373737;height:100%;font-size:1.1vw;color:#fff" placeholder="&ensp;&ensp;Property type" />
                        </div>
                        <div class="input">
                            <Select containerStyles="background-color:#373737;border:none;height:2.6vw" inputStyles="background-color:#373737;height:100%;font-size:1.1vw;color:#fff" placeholder="&ensp;&ensp;Property size" />
                        </div>
                        <div class="input">
                            <Select containerStyles="background-color:#373737;border:none;height:2.6vw" inputStyles="background-color:#373737;height:100%;font-size:1.1vw;color:#fff" placeholder="&ensp;&ensp;Stage of construction" />
                        </div>
                        <button type="submit" class="submit">Book your appointment</button>
                    </form>
                </div>
            </Col>
        </Row>
    </div>
    <div class="footer13 pb-5">
        <div class="d-block">
            <Row class="col-9 mx-auto text-center">
                <Col>
                    <a href="" class="footerLink13">About Us</a>
                    <a href="" class="footerLink13">Contact</a>
                    <a href="" class="footerLink13">Career</a>
                </Col>
                <Col>
                    <a href="" class="footerLink13">Press Room</a>
                    <a href="" class="footerLink13">Gallery</a>
                    <a href="" class="footerLink13">Awards</a>
                </Col>
                <Col>
                    <a href="" class="footerLink13">Cookie Polices</a>
                    <a href="" class="footerLink13">Terms & Conditions</a>
                    <a href="" class="footerLink13">Service & Support</a>
                </Col>
            </Row>
        </div>
    </div>
</div>
<div class="foot13">
    <p class="titleDesc13">Copyright &copy 2020 KEUS All rights reserved &emsp;&emsp;&emsp; 
        <span class="icons13">
            <a href="" class="icon13"><Fa icon={faInstagram} size="2x"  /></a>
            <a href="" class="icon13"><Fa icon={faFacebook} size="2x" /></a>
            <a href="" class="icon13"><Fa icon={faLinkedin} size="2x" /></a>
            <a href="" class="icon13"><Fa icon={faEnvelope} size="2x" /></a>
        </span>
    </p>
</div>

<style>
    ::placeholder{
        color:#78848f;  
    }
    .icon13{
        color:#fff;
        /* margin:0 5px; */
        margin:0 .26vw;
    }
    .footerLink13{
        display: block;
        text-decoration: none;
        color:#fff;
        /* font-size: 18px; */
        font-size: 0.939vw;
        /* margin:10px auto; */
        margin:.521vw auto;
    }
    .content13{
        min-height:100vh;
        overflow: hidden;
        background-color: #202020;
        color:#fff;
    }
    .foot13{
        /* height:80px; */
        height:4.17vw;
        color:#fff;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        /* font-size: 15px; */
        font-size: 0.7825vw;
    }
    .footer13{
        overflow: hidden;
        min-height:100px;
        background-color: #202020;
    }
    .inp{
        /* width:600px; */
        width:31.3vw;
        border:none;
        font-size:1.1vw;
        height:2.6vw;
        padding:0 1vw;
        color:#fff;
        /* margin:20px auto 0; */
        margin:1vw auto 0;
        background-color: #373737;
    }
    .input{
        /* width:600px; */
        width:31.3vw;
        height: 2.6vw;
        /* margin:20px auto; */
        margin:1.043vw auto;
    }
    .form13{
        /* width:600px; */
        width:31.3vw;
        position: inherit;
    }
    .formContent13{
        /* padding:35px; */
        padding:1.825vw;
    }
    .submit{
        /* width:600px; */
        width:31.3vw;
        /* height:55px; */
        height:2.869vw;
        color:#fff;
        background-color:#8fbec4;
        /* margin:20px auto; */;
        margin:1.043vw auto;
        /* font-size: 20px; */
        font-size: 1.044vw;
        border: none;
    }
    .left13{
        width:70%;
    }
    .mainHead13,.title13{
        font-family: 'Playfair Display', serif;
    }
    .mainHead13{
        font-weight: 400;
        /* font-size: 2.6vw; */
        font-size: 2.6083vw;
        /* line-height: 60px; */
        line-height: 3.13vw;
    }
    .desc13,.titleDesc13{
        font-family: 'Raleway', sans-serif;
    }
    .titleDesc13{
        height:2.6vw;
        display: flex;
        align-items: center;
    }
    .desc13{
        font-weight: 500;
        /* font-size: 24px; */
        font-size: 1.252vw;
    }
    @media (max-width:1250px){
        .input{
            margin:1vw auto 1.8vw;
        }
    }
    @media (max-width:1050px){
        .input{
            margin:1vw auto 2.5vw;
        }
    }
</style>