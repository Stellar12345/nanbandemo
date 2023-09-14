import React from 'react';
import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';
import verticals_banner from '../assets/img/slider/catalyst.jpg';
import c_cash from '../assets/img/icon/cash.png';
import capita from '../assets/img/icon/capita.png';
import compu from '../assets/img/icon/compu.png';

function Catalyst() {
  return (
    <>
      <header className="carousel-item1">
        <MyDiv className="container">
          <MyDiv className="row">
            <MyDiv className="col-md-8 mob_arc banner-section">
              <h1 className="banner-heading  mb-0">Catalyst</h1>
              {/* <p className="banner-subheading font-weight-light mb-0">Without oxygen, fires quickly die out because having all other elements is insufficient to sustain a fire. Our catalyst, <br />commonly referred to as "GK-Strategies," is an advanced derivative system used to manage Billions of Dollars worldwide.   </p> */}
            </MyDiv>
            <MyDiv className="col-md-4">
            </MyDiv>
          </MyDiv>
        </MyDiv>
      </header>

      <Section className="top-banner-relative">
        <img className="common-img" src={verticals_banner} alt="Story" />
        <MyDiv className="container ipad-container">
          {/* <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Catalyst</li>
        </ul> */}
        </MyDiv>
      </Section>
      <Section className="flip-section bg-white text-white mb-0" id="about">
        <MyDiv className="container">
          <MyDiv className="row">
            <MyDiv className="row story_content">
              <MyDiv className="col-md-12 mob-story list_all">
                <ul class="list-ul">
                  <li className="storys-description">Most successful businesses have something that makes them stand out from their peers. Our catalyst is a complex derivative system, commonly referred to as "Cash Flow Strategies" which trades the world's largest and most liquid asset. This proprietary system focuses on three main areas that balance risk with returns:</li>
                </ul>
              </MyDiv>
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4 mb-5">
                  <div class="catlyst-item mx-auto text-center">
                    <img className="img-fluid" src={c_cash} alt="" class="img-top" />
                    <h3>Cash Flow</h3>
                    <p>Take high probability trades, regardless of market direction, which will generate cash flow 100% of the time.</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-5 text-center">
                  <div class="catlyst-item mx-auto">
                    <img className="img-fluid" src={capita} alt="" class="img-top" />
                    <h3>Capital Protection</h3>
                    <p>Positions are always heavily protected (hedged) against any sudden and quick market correction.</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-5 text-center">
                  <div class="catlyst-item mx-auto" >
                    <img className="img-fluid" src={compu} alt="" class="img-top" />
                    <h3>Compounding</h3>
                    <p>Patient investors allowing their cash flow to compound will create true generational wealth.</p>
                  </div>
                </div>
              </div>
              {/* <MyDiv className="col-md-12 list_all">
                <ul class="list-ul">
                <li className="storys-description">This trifecta is a turbo-charged version of the system taught for free (no strings attached) at the Nanban Foundation. To see for yourself, we suggest you get familiar with the incredible power behind this grass-roots movement called Nanban.</li>
                </ul>
              </MyDiv> */}
            </MyDiv>

          </MyDiv>
        </MyDiv>
      </Section>
    </>
  );
}
export default Catalyst;
