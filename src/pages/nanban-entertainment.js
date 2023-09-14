import React from 'react';
import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';
import verticals_banner from '../assets/img/slider/vertical.jpg';
import aari_innerpage_banner from "../assets/img/aari-innerpage-banner.jpg";

import Nanban_entertainment from "../assets/img/news/nanban-entertainment.png";

import linkedin from "../assets/img/icon/linked-in.png";
function Ambassador() {
  return (
    <>
      <header className="carousel-item1">
        <MyDiv className="container">
          <MyDiv className="row">
            <MyDiv className="col-md-12 mob_arc  banner-section ">
              <h1 className="banner-heading  mb-0">Nanban Entertainment</h1>
              {/* <p className="banner-subheading font-weight-light mb-0">Nanban Group is excited to announce the launch of Nanban Gulf in November 2022. The official launch will occur at the RISE summit in Dubai on November 9th for all fellow Nanbans in the Gulf region.</p> */}
            </MyDiv>
          </MyDiv>
        </MyDiv>
        </header>

        {/* <section >
          <img className="common-img" src={aari_innerpage_banner} alt="Story" />
        </section> */}
        <MyDiv className="our-post-mdia-files">
        <MyDiv className="container">
            <MyDiv className="row">
                <MyDiv className="our-post-mdia-info col-md-12 ">
                <img  src={Nanban_entertainment} alt="Nanban entertainment" />
                </MyDiv>
              </MyDiv>
              </MyDiv>
        </MyDiv>
        <Section className="flip-section bg-white text-white mb-0" id="about">
          <MyDiv className="container">
            <MyDiv className="row">
              <MyDiv className="row story_content ambassador-content"> 
                <MyDiv className="col-md-12 mob-story">
                  <h4 className="storys-description sub-title-center sub-title-sm-size"><strong>Announcing Nanban Entertainment, New India-Based Film and Talent Company*</strong></h4>
                  <h4 className="storys-description sub-title-center"><i>Nanban India taps Indian actor, Aari Arujunan, to lead new production studio and talent agency; pursuing opportunities in Indian film sector</i></h4>
                  <h4 className="storys-description"><strong>August 1, 2023</strong> – Nanban India is thrilled to announce the launch of Nanban Entertainment (<a href="https://www.nanbanentertainment.com" target="_blank" className='link-text'>https://www.nanbanentertainment.com</a>), an India-based entertainment company, today. Nanban Entertainment, specializes in producing award-worthy films and documentaries through its studio division. In addition, its global talent agency division seeks to redefine the status quo actors and artists currently face in pursuing a career in the arts in India, whether via the film industry or other diverse art forms.</h4>
                  <h4 className="storys-description">And who better equipped to lead this endeavor than a critically acclaimed Indian actor? This is why Nanban India recruited Aari Arujunan to serve as President of Nanban Entertainment. His 15+ years of acting experience and accrued influential notoriety within the Indian film industry combined with his established network of industry relationships make him ideal leader to launch and develop the company.</h4>       
                  <h4 className="storys-description">“With a vision to reinvent the infrastructure behind the filmmaking process, we seek to diminish market barriers and limitations of the current Indian film sector with Nanban Entertainment,” Aari Arujunan, president of Nanban Entertainment, continues. “We are committed to elevating talented art forms and artists as we kickoff this exciting, new venture in India.”</h4>             
                  <h4 className="storys-description">In this pursuit, Nanban Entertainment is engaging fresh, international talent, including actors, artists, and creative professionals, for its ambitious pipeline of upcoming projects. In addition, the company is actively establishing industry partnerships to drive its growth.</h4>             
                  <h4 className="storys-description">For more information on Nanban Entertainment, visit <a href="https://www.nanbanentertainment.com" target="_blank" className='link-text'>https://www.nanbanentertainment.com</a>.</h4>             
                  <h4 className="storys-description">* Courtesy of Nanban India.</h4>    
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>
       
        
    </>
  );
}

export default Ambassador;