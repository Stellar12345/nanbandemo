import React from 'react';
import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';
import verticals_banner from '../assets/img/slider/vertical.jpg';
import aari_innerpage_banner from "../assets/img/aari-innerpage-banner.jpg";
import linkedin from "../assets/img/icon/linked-in.png";
function Ambassador() {
  return (
    <>
      <header className="carousel-item1">
        <MyDiv className="container">
          <MyDiv className="row">
            <MyDiv className="col-md-8 mob_arc  banner-section">
              <h1 className="banner-heading  mb-0">Nanban India Ambassador</h1>
              {/* <p className="banner-subheading font-weight-light mb-0">Nanban Group is excited to announce the launch of Nanban Gulf in November 2022. The official launch will occur at the RISE summit in Dubai on November 9th for all fellow Nanbans in the Gulf region.</p> */}
            </MyDiv>
          </MyDiv>
        </MyDiv>
        </header>

        <section >
          <img className="common-img" src={aari_innerpage_banner} alt="Story" />
        </section>
        <Section className="flip-section bg-white text-white mb-0" id="about">
          <MyDiv className="container">
            <MyDiv className="row">
              <MyDiv className="row story_content ambassador-content">
                <MyDiv className="col-md-12 mob-story">
                  <h4 className="storys-description">Hello Nanbans,</h4>
                  <h4 className="storys-description">We're pleased to onboard Aari Arujunan as the Brand Nanban India Ambassador for activities in India.</h4>
                  <h4 className="storys-description">Here is a short story about how Aari became our Nanban! </h4>
                  <h4 className="storys-description">People know him as a featured actor, celebrity fitness trainer, and Big Boss Tamil 4 title winner. He has been exceptionally contributing to the Tamil film industry for more than fifteen years now. Notably, his works “Nedunchaalai” and “Maya” fetched him much critical acclaim.</h4>                  
                  <h4 className="storys-description">Apart from his film career, we see him as a social activist, changemaker, and philanthropist. Indeed, it’s amazing to see him engrossed in public services and taking initiatives to support Tamil culture and language. </h4>
                  <h4 className="storys-description">His movement “தமிழ் கையொப்பம்” (Tamil Signature) beholds the Guinness Book of World Records for most Tamil signatures on a whiteboard. He also holds another Guinness World Record for planting around thirty thousand seedlings in association with Sathyabama University, Chennai. Also, we have seen him actively participate in the Jallikattu protest which shows how inclined he is toward culture and tradition. </h4>
                  <h4 className="storys-description">In addition, he does other community services like preserving native seeds and promoting terrace gardens under his NGO establishment named <a href="https://www.mvmindia.org/" target="_blank">“Maruvom Mattruvom.”</a> The renowned tagline of this NGO is “Nanum Oru Vivasayi.”</h4>
                  <h4 className="storys-description specific-block">At large, we see his vision of serving people to be in line with our NGO's (Nanban Foundation India) dreams and vision. Thus, we’re happy to have him as our Brand Nanban India Ambassador!</h4>
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>
       
        
    </>
  );
}

export default Ambassador;