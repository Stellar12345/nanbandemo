import React from 'react';
import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';
import verticals_banner from '../assets/img/slider/vertical.jpg';
function Verticals() {
  return (
    <>
      <header className="carousel-item1">
        <MyDiv className="container">
          <MyDiv className="row">
            <MyDiv className="col-md-8 mob_arc  banner-section">
              <h1 className="banner-heading  mb-0">Verticals</h1>
              {/* <p className="banner-subheading font-weight-light mb-0">Due to massive demand and increased growth, in addition to our Venture Capital Funds, our investing platform has expanded into land development, the Indian entertainment industry, and most recently, sustainable energy solutions. </p> */}

            </MyDiv>
          </MyDiv>
        </MyDiv>
        </header> 

        <section className="top-banner-relative">
          <img className="common-img" src={verticals_banner} alt="Story" />
          <MyDiv className="container ipad-container">
          {/* <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Verticals</li>
        </ul> */}
        </MyDiv>
        </section>
        <Section className="flip-section bg-white text-white mb-0" id="about">
          <MyDiv className="container"> 
            <MyDiv className="row">
              <MyDiv className="row story_content">
                <MyDiv className="col-md-12 mob-story">
                  <h4 className="storys-description">Nanban started with the sole mission of empowering friends, family, and customers with services so that they can achieve financial freedom. Nanban Group of Companies accomplishes this goal by offering four distinct services:</h4>
                  {/* <a href="https://investor.nanbaninvestments.com/login" target="_blank"><h3>Hedge Fund</h3></a>
                  <h4 className="storys-description">Utilizing high liquidity assets for a consistent cash-flow generation with the main focus on downside capital protection. The capital lock-in period for hedge funds is 1 year. (Currently closed to new investment)</h4> */}
                  <a href="https://nanbanventures.com/" target="_blank"><h3>Nanban Ventures</h3>   </a>
                  <h4 className="storys-description"> Providing semi-annual distributions while investing in start-up companies (“Moonshots”) poised for hyper-growth with focus on principal protection. {/* The capital lock-in period for Nanban Ventures is 10 years.*/}</h4> 
                  {/* <a href="https://nanbanrealty.com/" target="_blank"><h3>Real Estate</h3>    </a>
                  <h4 className="storys-description">Investing in multi-family real estate assets in TX. An excellent option for portfolio diversification, providing yearly cash-flow distributions and payout upon exit. The capital lock-in period for real estate is 5 years.</h4> */}
                  <a href="https://nanbanchola.com/" target="_blank"><h3>Nanban Chola</h3> </a>
                  <h4 className="storys-description">Empowering entrepreneurs to capitalize on their assets through fair, market value bank equity loans and simple revenue-based funding. </h4>
                  <a href="https://nanbanesg.com/" target="_blank"><h3>Nanban ESG</h3>   </a>
                  <h4 className="storys-description">Focusing on increasing the positive impact we collectively have with our investors on our communities and society at large by allocating capital to areas that  seek to deliver social value and achieve financial goals.</h4>
                  {/* <a href='https://nanbanrealty.com/' target="_blank" ><h3>Orion Nanban Realty</h3> </a>
                  <h4 className="storys-description"> Bringing knowledge and niche expertise in acquiring and managing institutional-grade commercial real estate.</h4>
                  <a><h3>Nanban Cares</h3> </a>
                  <h4 className="storys-description">Specializing in providing large-scale funding and partnership opportunities to the healthcare sector.</h4> */}
                  <a href='https://www.nanbanentertainment.com/' target="_blank"><h3>Nanban Entertainment</h3></a>
                  <h4 className="storys-description">Establishing a merit-based, best-in-class platform to identify and sponsor talents from across the globe in the entertainment industry. </h4>
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>
    </>
  );
}

export default Verticals;