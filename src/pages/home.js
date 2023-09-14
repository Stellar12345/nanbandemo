import React from "react";
import orgin from '../assets/img/icon/origin.png';
import vision from '../assets/img/icon/vision.png';
import mission from '../assets/img/icon/mission.png';
import enterprise from '../assets/img/enterprises.jpg';
import foundation from '../assets/img/foundation.jpg';
import slider1 from '../assets/img/slider/slider1.png';
import slider2 from '../assets/img/slider/slider2.png';
import slider3 from '../assets/img/slider/slider3.png';
import cash_flow from '../assets/img/icon/cash_flow.png';
import cash_flow_hover from '../assets/img/icon/cash_flow_hover.png';
import capital from '../assets/img/icon/capital.png';
import capital_hover from '../assets/img/icon/capital_hover.png';
import compounding from '../assets/img/icon/compounding.png';
import compounding_hover from '../assets/img/icon/compounding_hover.png';
import diversification from '../assets/img/icon/diversification.png';
import soundIcon from "../assets/img/sound_icon.png"
import diversification_hover from '../assets/img/icon/diversification_hover.png';
//import nanbanGulf from "../assets/img/Nanban_Logo_Gulf.png"
import Nanban_Entertainment from "../assets/img/nanban-entertainment.png"

import nanban_popup_banner from "../assets/img/nanban-popup-banner.jpg";
import nanban_popup_banner_mobile from "../assets/img/nanban-popup-banner-mobile.png";
import nanban_popup_banner_ipad from "../assets/img/nanban-popup-banner-ipad.png";
import nanban_popup_banner_ipad_land from "../assets/img/nanban-popup-banner-ipad-land.png";

import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';

function Home() {
  return (
    <>
      <header >
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-inner">

            <div class="carousel-item active" data-interval="10000">
              <div class="carousel-caption container" id="overlay">
                <h1 class="masthead-heading  mb-0">Freedom to <span class="head-color">Dream</span></h1>
                <p class="masthead-subheading font-weight-light mb-0">Nanban has built a platform where dreams come true, regardless of net worth,<br />
                  nationality, religious or political beliefs.</p>
              </div>
              <img className="sliders-img" src={slider1} alt="Slider 2" />

            </div>

            <div class="carousel-item" data-interval="10000"> 
              <div class="carousel-caption container">
                <h1 class="masthead-heading  mb-0">Pursue your <span class="head-color">Passion</span></h1>
                <p class="masthead-subheading font-weight-light mb-0">Following your Passion will ultimately lead you to your  life's purpose.</p>
              </div>
              <img className="sliders-img" src={slider2} alt="Slider 3" />

            </div>

            <div class="carousel-item" data-interval="10000">
              <div class="carousel-caption container">
                <h1 class="masthead-heading  mb-0">Power to be <span class="head-color">Free</span></h1>
                <p class="masthead-subheading font-weight-light mb-0">Nanban wants to provide the ability for everyone to live a beautiful
        and worry-free life.</p>
              </div>
              <img className="sliders-img" src={slider3} alt="Slider 1" />
            </div>
          </div>
      </div>
</header>

    <Section className="gulfAnnouncement">
          <MyDiv className="container content-section">
            <MyDiv className="row">            
              <MyDiv className="col-md-4 col-sm-3 gulf-image">                
              <img className="sound-img" src={Nanban_Entertainment} alt="Nanban Entertainment" />
              </MyDiv>
              <MyDiv className="col-md-8 col-sm-9 gulf-content">                
                  {/* <h2>Introducing Nanban Gulf</h2> */}
                  <h2>Nanban Entertainment Launches in India</h2>
                  <p>Nanban india is proud to announce the launch of Nanban Entertainment, a production company and talent agency elevating the Indian film industry.</p>
                  {/* <p>We’re thrilled to offer Middle Eastern investors untapped exposure to the U.S. market through the launch of Nanban Gulf, our latest addition to the Nanban Group of Companies.</p> */}
                  {/* <p>Nanban is launching NANBAN Gulf at Dubai Rise across all Gulf countries starting November.</p>
                  <p>All Nanbans from the Gulf countries, we will be shortly announcing how you can become an investor in NANBAN Gulf.</p> */}
                  <a href="/nanban-entertainment" target="_blank">READ MORE...</a>
                  {/* <a href="https://nanbangulf.com/" target="_blank">READ MORE...</a> */}
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>

       <section class="page-section bg-primary1 text-white mb-0" id="about">
          <div class="container">
            <div id="myCarousel" class="carousel slide" data-bs-interval="false">
              {/* <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol> */}
              <div class="carousel-inner"> 
                <div class="item active">
                  <div class="row">
                    <div class="col-lg-3 col-sm-3 ms-auto text-center"><img className="slider-img" src={orgin} alt="Slider 1" /></div>
                    <div class="col-lg-6 col-sm-9 me-auto slider-content"><h3>Origin</h3><p class="lead">The word Nanban /nʌnbɑːn/ translates to: 'friend' in the classic Indian language of Tamil. Nanban Group of Companies, and its subsidiaries, were created with the sole vision of helping our community attain financial freedom while supporting the underprivileged through socially-relevant initiatives.</p></div>
                  </div>
                </div>

                {/* <div class="item">
                  <div class="row">
                    <div class="col-lg-3 col-sm-3 ms-auto text-center"><img className="slider-img" src={vision} alt="Slider 2" /></div>
                    <div class="col-lg-6 col-sm-9 me-auto slider-content"><h3>Vision</h3><p class="lead">To become a highly trusted, truly transformative investment platform that brings “Cash Flow” based strategies to every Nanban irrespective of their net worth in a responsible, people-first and purpose driven enterprise.<br /></p></div>
                  </div>
                </div>

                <div class="item">
                  <div class="row">
                    <div class="col-lg-3 col-sm-3 ms-auto text-center"><img className="slider-img" src={mission} alt="Slider 3" /></div>
                    <div class="col-lg-6 col-sm-9 me-auto slider-content"><h3>Mission</h3><p class="lead">To share low risk investment strategies with all Nanbans that can produce consistent CASH FLOW and help fulfill the financial dreams of people at all levels of wealth by putting their interest first and foremost with the highest standards of ethics and integrity</p></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <Section className="home-page flip-section bg-white text-white mb-0" id="about">
          <MyDiv className="container">
            <MyDiv className="row">
              <MyDiv className="col-md-6">
                <MyDiv className="grid home-page">
                  <figure className="effect-enterprise">
                    <figcaption>
                      <h2>Nanban <br /><span className="subhead"> <a href="" > Group of Companies </a></span> </h2>
                    </figcaption>
                    <figure className="img_flip img_flip-hor">
                      <img className="flip-img" src={enterprise} alt="Enterprise" />
                      <figcaption class="fig1">
                        <h3>Nanban Group of Companies is our for-profit business with four verticals:</h3>
                        {/* <a href="https://investor.nanbaninvestments.com/login" target="_blank">Hedge Fund <br /> <span className="small-head">Nanban Investments</span></a> */}
                        <a href="https://nanbanventures.com/" target="_blank">Nanban Ventures <br /> <span className="small-head">Venture Capital</span></a>
                        {/* <a href="https://www.nanbanrealty.com/" target="_blank">Real Estate <br /> <span className="small-head">Nanban Realty</span></a> */}
                        <a href="https://nanbanchola.com/" target="_blank">Nanban Chola <br /> <span className="small-head">Land Development</span></a>
                        <a href="https://nanbanesg.com/" target="_blank">Nanban ESG <br /> <span className="small-head">Sustainable Energy Solutions</span></a>
                        {/* <a href="https://nanbanrealty.com/"  target="_blank">Orion Nanban Realty<br /> <span className="small-head">Real Estate</span></a>
                        <a >Nanban Cares<br /> <span className="small-head">Healthcare</span></a> */}
                        <a href="https://www.nanbanentertainment.com" target="_blank"> Nanban Entertainment<br /> <span className="small-head">Entertainment & Global Talent</span></a>
                      </figcaption>
                    </figure>
                  </figure>
                </MyDiv>
              </MyDiv>
              <MyDiv className="col-md-6">
                <MyDiv className="grid home-page">
                  <figure className="effect-foundation">
                    <figcaption>
                      <h2>Nanban <br /> <span className="subhead"> <a href="https://nanbanfoundation.org/" target="_blank" >Foundation</a></span></h2>
                    </figcaption>
                    <figure className="img_flip1 img_flip-hor">
                      <img className="flip-img" src={foundation} alt="flip img" />
                      <figcaption class="fig2">
                        <h3>Nanban Foundation is our non-profit arm focusing on:</h3>
                        <a href="https://nanbanfoundation.org/cash-flow-strategies/" target="_blank">Financial Education <br /> <span className="small-head">Cash flow strategies </span></a>
                        {/* <a href="http://www.nanbanmfmn.org/" target="_blank">Mothers For Mother Nature<br /> <span className="small-head">Converting to Organic Farming</span></a> */}
                        <a href="http://www.nanbanmfmn.org/" target="_blank">Mothers For Mother Nature<br /> <span className="small-head">Promoting sustainable agriculture</span></a>
                        <a href="https://nanbansportsfoundation.org/" target="_blank"> Nanban Sports Foundation <br /> <span className="small-head">Nurturing grass root sports talent and creating champions</span></a>
                      </figcaption>
                    </figure>
                  </figure>
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>

        {/* <Section className="content-section mb-0 flip-desc-section">
          <MyDiv className="container">
            <MyDiv className="row">
              <MyDiv className="col-md-12">
                <h4 className="flip-description">At <b className="desc">Nanban</b>, we believe there is truth in the well-known proverb, <span className="desc1">“A friend in need is a friend indeed.”</span> As such, we have prioritized service and made it our mission to reach out to those in need.</h4>
              </MyDiv>
            </MyDiv>
          </MyDiv>
          </Section> */}





        <Section className="content-section bg-white text-white mb-0" id="about">
          <MyDiv className="container">
            <MyDiv className="row">
              <MyDiv className="col-md-12">
                <h4 className="flip-description">At <b className="desc">Nanban</b>, we believe there is truth in the well-known proverb, <span className="desc1">“A friend in need is a friend indeed.”</span> As such, we have prioritized service and made it our mission to reach out to those in need.</h4>
              </MyDiv>
              <MyDiv className="divider-custom divider-light">
                <MyDiv className="divider-custom-line"></MyDiv>
                <MyDiv className="divider-custom-icon">Our Building Blocks</MyDiv>
                <MyDiv className="divider-custom-line"></MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>


        <Section className="content-section bg-white text-white mb-0" id="about">
          <MyDiv className="container">
            <MyDiv className="row">
              <MyDiv className="col-md-12 works">
                <MyDiv className="mobile-working">
                  <MyDiv className="mobile-working1" ><a>
                    <img className="flow-img" src={cash_flow} alt="" />
                    <img className="flow-img" src={cash_flow_hover} alt="" class="img-top" />
                    <span className="tooltiptext">
                      <h3 className="tooltip-head">Cash Flow</h3><MyDiv className="lines"></MyDiv>
                      <PTag className="tooltip-para">Being able to collect cash from an asset is the basis of everything we do here at Nanban. Our preferred strategy is to collect cash from the world's most significant assets, the S&P 500 (an asset class that will never go to zero but rather constantly rebalances itself automatically). We view this as collecting rent from a 500 apartment real estate asset.</PTag>
                    </span></a>
                  </MyDiv>
                  <MyDiv className="mobile-working1"><a>
                    <img className="flow-img" src={capital} alt="" />
                    <img className="flow-img" src={capital_hover} alt="" class="img-top" />
                    <span className="tooltiptext1">
                      <h3 className="tooltip-head">Capital Protection</h3><MyDiv className="lines"></MyDiv>
                      <PTag className="tooltip-para">Most investors look for capital appreciation as the premier driver of wealth generation. Although appreciation is critical, our focus is to always preserve the capital by buying downside protection (hedging). Leaving your hard-earned money unprotected could result in a quick drawdown of 50% would require a 100% increase - merely to break even from the initial loss. </PTag>
                    </span></a>
                  </MyDiv>
                  <MyDiv className="mobile-working1"><a>
                    <img className="flow-img" src={compounding} alt="" />
                    <img className="flow-img" src={compounding_hover} alt="" class="img-top" />
                    <span className="tooltiptext2">
                      <h3 className="tooltip-head">Compounding Effect</h3><MyDiv className="lines"></MyDiv>
                      <PTag className="tooltip-para">One of the secrets to building wealth is to allow your capital to continue to work by compounding itself over a more extended period. One of the most brilliant people in that ever lived, Albert Einstein, once said: "Compound interest is the eighth wonder of the world." </PTag>
                    </span>
                  </a>
                  </MyDiv>
                  <MyDiv className="mobile-working1"><a>
                    <img className="flow-img" src={diversification} alt="" />
                    <img className="flow-img" src={diversification_hover} alt="" class="img-top" />
                    <span className="tooltiptext3">
                      <h3 className="tooltip-head">Diversification</h3><MyDiv className="lines"></MyDiv>
                      <PTag className="tooltip-para">Building a life with consistent cash flow allows you to live your life without worrying about the financial impact it would "normally" would have. Nanbans preferred way of life is to devote our time to philanthropic work - which is why we started Nanban Foundation; a no-strings-attached platform for charitable contributions. </PTag>
                    </span> </a>
                  </MyDiv>
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>

        

        {/* <div class="portfolio-modal modal  fade home-popup " id="modal-popup" aria-labelledby="modal-popup" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button"  data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body  model_overlay">
                        <div class="container">
                        
                            <div class="d-block d-md-none">
                              <img  src={nanban_popup_banner_mobile}  useMap="#image_map_mobile" alt="Story" />
                              <map name="image_map_mobile">
                              <area alt="" title="" href="nanban-ambassador" coords="109,486,206,515" shape="rect"/>
                              </map>
                            </div>
                            <div class="d-none d-md-block d-lg-none">
                              <img  src={nanban_popup_banner_ipad}  useMap="#image_map_ipad" alt="Story" />
                              <map name="image_map_ipad">
                              <area alt="brand" title="brand" href="nanban-ambassador" coords="346,273,420,294" shape="rect"/>
                              </map>
                            </div>
                            
                            <div class="d-none d-lg-block d-xxl-none">
                              <img  src={nanban_popup_banner_ipad_land}  useMap="#image_map_ipad1" alt="Story" />
                              <map name="image_map_ipad1">
                              <area alt="brand" title="brand"  href="nanban-ambassador" coords="540,426,654,460" shape="rect"/>
                              </map>
                            </div>
                            <div class="d-none d-xxl-block">
                              <img  src={nanban_popup_banner}  useMap="#image_map" alt="Story" />
                              <map name="image_map">
                                  <area alt="brand" title="brand" href="nanban-ambassador" coords="780,387,888,423" shape="rect"/>
                              </map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}


    </>
      );
    }
    
    export default Home;
