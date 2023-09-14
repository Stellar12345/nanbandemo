import React from 'react';
import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';
import verticals_banner from '../assets/img/slider/arc.jpg';
import gk from '../assets/img/architect/gk.png';
import sakthi from '../assets/img/architect/sp.png';
import mani from '../assets/img/architect/ms.png';
import kutral from "../assets/img/architect/kutral.png";
import chris from "../assets/img/architect/Chris.png";
import gary from "../assets/img/architect/Gary.png";
import narain from "../assets/img/architect/Narain.png";
import padma from "../assets/img/architect/Padma.png";
import priya from "../assets/img/architect/Priya.png";
import raj from "../assets/img/architect/Raj.png";
import sasi from "../assets/img/architect/Sasi.png";
import  velkanth from "../assets/img/architect/Velkanth.png";
import  Snehal from "../assets/img/architect/Snehal.png";
import  Jeremy from "../assets/img/architect/Jeremy.png";
import  Preetha from "../assets/img/architect/Preetha.png";
import avatar from "../assets/img/architect/avatar.png";
import linkedin from "../assets/img/icon/linked-in.png";

function Team() {
    
  return (
    <>
       <header className="carousel-item1">
        <MyDiv className="container">
          <MyDiv className="row">
          <MyDiv className="col-md-8 mob_arc  banner-section">
              <h1 className="banner-heading  mb-0">Team</h1>
              {/* <p className="banner-subheading font-weight-light mb-0">Every great business needs a solid foundation to gain the type of traction Nanban has created over the past 18 months. <br />Without our founders' vision, execution, and processes, Nanban would just be a noble idea that never came to fruition.</p> */}
            </MyDiv>
          </MyDiv>
        </MyDiv>
        </header>

        <section className="top-banner-relative">
          <img className="common-img" src={verticals_banner} alt="Story" />
          <MyDiv className="container ipad-container">
          {/* <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Team</li>
        </ul> */}
        </MyDiv>
        </section>

        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <h2 className="page-section-heading text-secondary mb-0">Founders</h2><br/><br/> */}
                <br/>
                <div className="row justify-content-center">

                    <div className="col-md-4 col-lg-4 mb-5 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={gk} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description">
                           <a>Gopala Krishnan ("GK") </a>
                            <a href="https://www.linkedin.com/in/gopala-krishnan-9067a910/?challengeId=AQH7oBQiot2aFgAAAYArgX5l_SmZ0irjluXvqY1FhC-XydN5kAAFYXHQiTVrI9Ju8mA-YlZIkMnm7LQo_C_BzDJYcQYZhEhspw&submissionId=32ed8f85-d8f7-e516-bee8-7d0a8a00f962" target="_blank"><img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Chairman & CEO <br/> Nanban Group of Companies</h6>

                    </div>
                    <div className="col-md-4 col-lg-4 mb-5 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={mani} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Mani Shanmugam</a> <a href="https://www.linkedin.com/in/manivannan-shanmugam-a62b531/" target="_blank"><img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>COO & Managing Partner <br/> Nanban Group of Companies</h6>
                    </div>
                    <div className="col-md-4 col-lg-4 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                             <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={sakthi} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Sakthivel Palani Gounder</a> <a href="https://www.linkedin.com/in/sakthi-nanban/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>CIO & Managing Partner <br/> Nanban Group of Companies</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-lg-0 text-center">
                        {/* <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={avatar} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Vidya pai</a> <a href="" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Administrave Assistant</h6> */}
                    </div>
                </div>
            </div>            
        </section>

        <section className="page-section portfolio" id="portfolio1">
            <div className="container">
                {/* <h2 className="page-section-heading text-secondary mb-0">Presidents</h2><br/><br/> */}
                <div className="row justify-content-center">
                <div className="col-md-2 col-lg-2 mb-5 mb-lg-0 text-center"></div>
                    <div className="col-md-4 col-lg-4 mb-5 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={kutral} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Kutral Veerabadran</a><a href="https://www.linkedin.com/in/kutral/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>President & Managing Partner <br/> Nanban Ventures</h6>
                    </div>
                    <div className="col-md-4 col-lg-4 mb-0 mb-md-5 text-center specific-left">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={narain} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Narain Ramasamy</a><a href="https://www.linkedin.com/in/narain-ramasamy-40337926/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>President & Managing Partner <br/> Nanban Chola Global / Nanban Entertainment</h6>
                    </div>
                                       
                    {/*<div className="col-md-4 col-lg-4 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal9">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={velkanth} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Velkanth Chinnasamy</a>
                        <a href="https://www.linkedin.com/in/velkanth/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Managing Partner Nanban India</h6>
                    </div>*/}
                    <div className="col-md-2 col-lg-2  text-center"></div>
                </div>
            </div>            
        </section>

         <section className="page-section portfolio" id="portfolio2">
            <div className="container">
                {/* <h2 className="page-section-heading text-secondary mb-0">Nanban Gulf Principals</h2><br/><br/> */}
                <div className="row justify-content-center">
                    {/* <div className="col-md-6 col-lg-3 mb-5 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={kutral} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Kutral Veerabadran</a><a href="https://www.linkedin.com/in/kutral/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>President Nanban Ventures</h6>
                    </div> */}
                    <div className="col-md-2 col-lg-2 mb-5 mb-lg-0 text-center"></div>
                    <div className="col-md-4 col-lg-4 mb-5 mb-lg-0 text-center specific-left">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal7">
                             <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={sasi} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Sasi Naga</a><a href="https://www.linkedin.com/in/sasi-naga-7530aa4/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>President & Managing Partner <br/>Nanban CapitalX / Nanban Gulf</h6>
                    </div>
                     <div className="col-md-4 col-lg-4 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal10">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={Preetha} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Preetha Prabhakar</a><a href="https://www.linkedin.com/in/preetha-prabhakar-mba-7a08b114/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>President & Managing Partner <br/> Nanban ESG</h6>
                    </div>
                    {/* <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal8">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={avatar} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Aari Arjunan</a><a > <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Managing Director Nanban Entertainment</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal9">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={velkanth} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Velkanth Chinnasamy</a>
                        <a href="https://www.linkedin.com/in/velkanth/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Managing Partner Nanban India</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal10">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={Preetha} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Preetha Prabhakar</a><a href="https://www.linkedin.com/in/preetha-prabhakar-mba-7a08b114/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>President Nanban ESG Solutions</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal11">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={priya} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Priya Patel</a><a href="https://www.linkedin.com/in/priya-a-patel/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Managing Partner Great Investments Ventures & VP Operations</h6>
                    </div> */}
                    <div className="col-md-2 col-lg-2 mb-5 mb-lg-0 text-center"></div>
                </div>
            </div>            
        </section>

        {/*<section className="page-section portfolio" id="portfolio2">
            <div className="container">
                <h2 className="page-section-heading text-secondary mb-0">Executive Leadership</h2><br/><br/>
                <div className="row justify-content-center">

                    <div className="col-md-6 col-lg-3 mb-5 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal12">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={Jeremy} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Jeremy Green</a><a href="https://www.linkedin.com/in/jcgreen1911/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Lead Legal Counsel</h6>

                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal13">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={gary} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Gary Wilcox</a><a href="https://www.linkedin.com/in/gary-wilcox-129499b9/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Chief Relationship Officer</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal14">
                             <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={Snehal} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Snehal Waje</a><a href="https://www.linkedin.com/in/snehalwaje/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>VP Public Relations</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal15">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={chris} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Chris Landqvist</a><a href="https://www.linkedin.com/in/christoffer-landqvist-49306747/ " target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>VP Branding</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal16">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={raj} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Raj Rongala</a><a href="https://www.linkedin.com/in/rajasekhar-rongala-7a51b248/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Head Crypto</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal17">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={padma} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Padma Pillai</a><a href="https://www.linkedin.com/in/padma-satish-a66b1069/" target="_blank"> <img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>HR Manager</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal18">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="image" src={avatar} alt="Story" />
                        </div><br/><br/>
                        <h4 className="arc-description"><a>Pratham Guthi</a><a><img className="linkedin-Logo" src={linkedin} /></a></h4>
                        <h6>Legal Counsel</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center"></div>
                </div>
            </div>            
        </section> */}

        <div class="portfolio-modal modal fade" id="portfolioModal1" aria-labelledby="portfolioModal1" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={gk} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Gopala Krishnan ("GK") <span><a href="https://www.linkedin.com/in/gopala-krishnan-9067a910/?challengeId=AQH7oBQiot2aFgAAAYArgX5l_SmZ0irjluXvqY1FhC-XydN5kAAFYXHQiTVrI9Ju8mA-YlZIkMnm7LQo_C_BzDJYcQYZhEhspw&submissionId=32ed8f85-d8f7-e516-bee8-7d0a8a00f962" target="_blank"></a></span></h2>
                                    <h5>Chairman & CEO <br/>Nanban Group of Companies</h5>
                                    <p>Before assuming the role as CEO of Nanban Group of Companies, "GK" was in several senior-level executive positions in a fortune 100 Information Technology (IT) Service company. In addition to his professional accolades, "GK" successfully developed investment strategies, collectively referred to as "GK Strategies", which are currently the catalyst responsible for Nanban's excessive growth. "GK" has used his extensive educational background in Mathematics, Statistics, Computer Science and Engineering, and MBA in Finance to develop the strategies. A true believer in philanthropy, "GK" has been generously sharing the "GK Level-1 and Level-2" system with the community for free under Nanban Foundation.</p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal2" aria-labelledby="portfolioModal2" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={mani} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Mani Shanmugam <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>COO & Managing Partner <br/> Nanban Group of Companies</h5>
                                    <p>As one of Nanban's founding members, Mani brings a wealth of knowledge and expertise in operational and technical leadership, having worked for a Fortune 100 Bank. He also led the Data Analytics functions and Regulatory Audits at various financial institutions while associated with Big 4 Consulting firms. An expert in building strong relationships and trust at every level of the organization, Mani has a deep passion for people development, building self-organizing solid teams to deliver superior results, maintaining excellent customer relationships, and bringing in operational efficiency. He holds a Bachelor's Degree in Commerce and a Master's Degree in Computer Science with certifications in Data Analytics / Business Intelligence area.</p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal3" aria-labelledby="portfolioModal3" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={sakthi} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Sakthivel Palani Gounder <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>CIO & Managing Partner <br/> Nanban Group of Companies</h5>
                                    <p>An innovative and respected Wealth Management Industry leader, Sakthi brings over a decade of experience in Analytics and Data management. Having led futuristic data-driven products for Investment Advisors, delivered products that helped set strategic direction in the organization.
                                        <br/><br/>An Engineering graduate from CEG Chennai, India, and FinTech education in HarvardX, he has a passion for stocks, trading strategies, and knowledge sharing. Sakthi, the son of a farmer, is also heavily involved in the Mothers for Mother Nature project driven by Nanban Foundation.
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div class="portfolio-modal modal fade" id="portfolioModal4" aria-labelledby="portfolioModal4" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={avatar} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Vidya pai <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Administrave Assistant</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div class="portfolio-modal modal fade" id="portfolioModal5" aria-labelledby="portfolioModal5" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={kutral} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Kutral Veerabadran <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>President & Managing Partner <br/> Nanban Ventures</h5>
                                    <p>A multifaceted leader with over 15 years of cumulative experience across Investments, Corporate Finance and Technology domains, Kutral brings to table a unique blend of global exposure having worked in six countries across the world – US, Canada, UK, Hong Kong, Russia and India.
                                     <br/><br/>
                                     An Investor at heart, Kutral is passionate about early-stage companies and has been actively involved in the start-up space as an investor, founder and advisor. Most recently, he served as the Principal and member of the Investment Committee at Flow Capital (publicly traded Canadian fund), where he assessed and helped provide growth capital to early-stage tech enabled companies across North America. 
                                     <br/><br/>
                                     Previously, he headed the FinTech and Innovation vertical in Canada for Virtusa Corporation, prior to which he was globetrotting as a Corporate & Investment Banker at Citi. Before venturing into the world of investment and finance, Kutral started his career as an engineer with Intel Corporation in California.
                                     <br/><br/>
                                     In a parallel world, Kutral was a professional athlete. He swam across the English Channel at age 12, created a Guinness record in 1994 (still unbroken) and went on to win the Junior World Championship title in marathon swimming in 1995. He was decorated with the Arjuna Award at age 17, the highest sports accolade given by the Hon’ President of India. 
                                     <br/><br/>
                                     Kutral did his Bachelors and Masters in Electrical Engineering at Anna University (Chennai) and University of Texas (Dallas) respectively. He rounded off his education with an MBA from Massachusetts Institute of Technology (Sloan school).
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal6" aria-labelledby="portfolioModal6" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={narain} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Narain Ramasamy <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>President & Managing Partner <br/>Nanban Chola Global / Nanban Entertainment</h5>
                                    <p>
                                    Narayanan Ramasamy, popularly known as Narain to his friends, an experienced Angel Investor, Entrepreneur and Venture Capitalist built several start-ups into successful exits. 
                                    <br/><br/>
                                    Narain has commendable knowledge and experience in Real Estate Asset management and reconciliation to verify required fund approval for Multi-Billion Dollar transactions, review the contract, legal documents, due-diligence report, proformas, executive summary and recommend for NANBAN board approval.   
                                    <br/><br/>
                                    Narain worked as an executive level roles in several fortune 500 companies like TATA Consultancy Services, SEARS Holdings, Citi Bank and Bank of America etc.
                                    <br/><br/>
                                    In 2012, he founded Digital Minds Technologies, which delivers solutions that enhance productivity and decrease expenses by utilizing analytics, business automation, artificial intelligence, and machine learning. In addition, Narain has extensive experience in syndicating land deals, invested in Real Estate and helping budding entrepreneurs own their first commercial space at a reasonable price.  
                                    <br/><br/>
                                    One of Narain's biggest passions is the entertainment industry. He founded and performed as President of "Rajni Makkal Mandram", RMM, in North America, attracting more than 5,000 registered members across the USA and Canada. In addition, he is also venturing into the cinematic business, both an actor and producer, through his latest project, Digital Minds Productions. Their first feature film will premiere sometime in 2022.
                                    <br/><br/>
                                    A proud Masters of Engineering graduate of MIT (Anna University), located in Chennai, India - Narain has used his own educational (Dr. RKS Group of Institutions) and entrepreneurial background to mentor more than 7,000 deprived students throughout the Tamil Nadu region of India.
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal7" aria-labelledby="portfolioModal7" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={sasi} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Sasi Naga <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>President & Managing Partner <br/>Nanban CapitalX / Nanban Gulf</h5>
                                    <p>Sasi Naga is a serial entrepreneur, philanthropist, and an avid sports enthusiast. He is credited for launching multiple businesses, enterprises, and technology companies across North America, Mexico, Canada, and India such as Xforia, Klap6, Nanban CapitalX,and Nanban Cares to name a few.
                                    <br/><br/>
                                    Born in Chennai, India, Sasi earned his B.Tech degree and moved to the United States to pursue his career in technology nearly two decades ago. As an IT professional, Sasi has worked with the Big 4 companies, before realizing his potential in converting opportunities into new ventures. With his leadership, business acumen and executive decisiveness, he has successfully launched numerous zero-to-one initiatives across all his companies. As a strategic investor with growth mindset, his portfolio of companies span across cyber security, multi-family real estate, Entertainment Industry and broadly technology. He currently lives in Dallas with his talented wife, three gorgeous children, and a naughty dog.
                                    <br/><br/>
                                    Sasi strongly believes in sharing his knowledge and wealth with the society. Wealth,according to him, when concentrated at one place loses its value. Instead, it grows
multi-fold when shared with the underserved community, improving their livelihood. He has always believed in the essence of growing together with his peers, colleagues, and community. Like wealth, healthcare should also be accessible to everyone, irrespective of their social and financial status. Nanban Cares Foundation was born out of this idea to make affordable medical care accessible to everyone. From its inception, Nanban Cares has recognized and aided deserving people with accessible healthcare facilities, provided medical aids, sponsored lifesaving surgeries, extended healthcare guidance, and provided medical workers to neglected rural area in North America and across rural parts of India. Apart from his flagship non-profit organization, he actively contributes to and leads multiple social impact projects across India and USA.
                                    <br/><br/>
                                    Sasi Naga is a prominent affluent name that generates respect among peer entrepreneurs globally. He has been instrumental in using his capacity to wield
tremendous positive influence in channelling wealth to the right causes. Sasi trusts in &quot;people first&quot; and “lead with empathy” mantra, which inspires and empowers everyone to grow as leaders. His “earn more to serve more” attitude depicts his passion to making wealth grow for the betterment of the society. Philanthropy can take many paths; for Sasi, it is a vehicle for giving back to the society.
                                    <br/><br/>
                                    Middle East and APAC is a zenith of prosperity and philanthropy providing myriad growth opportunities to entrepreneurs and novel venture. Sasi looks forward to gaining
valuable insights and share his knowledge and expertise to create exceptional Investment opportunities.
                                </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal8" aria-labelledby="portfolioModal8" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={avatar} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Aari Arjunan<span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Managing Director Nanban Entertainment</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal9" aria-labelledby="portfolioModal9" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={velkanth} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Velkanth Chinnasamy <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Managing Partner Nanban India</h5>
                                    <p>Velkanth Chinnasamy is a Managing Director & CEO at Nanban India & Southeast Asia. He joined Nanban in 2022 after a 23 years of career leading large IT and Solution area in several fortune 500 companies. 
                                    <br/><br/>
                                    Velkanth plays vital role in developing all Nanban India investments, monitoring investment opportunities, allocating and managing fund utilization of investments, moderating and mitigating investment risks. Velkanth is also on the executive leadership team responsible for growth opportunities in India and Southeast Asia.
                                    <br/><br/>
                                    Velkanth is passionate about spreading “Nanbanizam” across the network, spearheading Nanban Foundation India activities like supporting education, healthcare and social welfare initiatives in India.
                                    <br/><br/>
                                    Velkanth has a post-graduation degree from University of Madras.
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal10" aria-labelledby="portfolioModal10" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={Preetha} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Preetha Prabhakar <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>President & Managing Partner<br/>Nanban ESG</h5>
                                    <p>Preetha is an executive serving both for-profit and nonprofit organizations. She brings more than 23 years of business acumen, leadership, technology, finance, and operations management. Her industry experience includes technology leadership roles in insurance, finance, retail, healthcare, environmental remediation, and private equity fund(s). 
                                      <br/><br/>
                                      Preetha holds a bachelor’s in Computer Science Engineering from Bharathiar University, India, and a Master of Business Administration from Franklin University. She is also a Stanford University Certified Program Manager. 
                                      <br/><br/>
                                      With extensive experience in reengineering organizations, Preetha showcases a deep understanding of people, processes, and technology. She has significant experience evolving the operations of IT areas to be more efficient and effective. She has led many transformations of application suites through large investment programs to uplift capabilities and upgrade technology. These transformations have simplified technology stacks, improved products, and streamlined processes. 
                                      <br/><br/>
                                      She is an accomplished leader capable of managing the full lifecycle of highly sophisticated technical projects with multimillion-dollar budgets and global deployments. In addition, she is recognized for dramatically improving organizational efficiency, profitability, and customer experience by planning, designing, and deploying highly effective systems. She also has extensive experience coaching and leading global technology teams and is respected for effectively establishing strategic partnerships throughout all enterprise levels in delivering projects and programs on time. 
                                      <br/><br/>
                                      As an executive, one of Preetha's greatest passions is championing the conservation, revival, and replenishing of Mother Earth. She leads Nanban’s non-profit flagship project “Mothers for Mother Nature," which is focused on helping farmers around the world lead dignified lives by leading the transition to natural ways of farming free of chemicals and pesticides and by helping people from all walks of life access healthier food and save and protect our precious Mother Earth. This project is currently implemented in South India, Peru, South Africa, and Malaysia.                                     
                                </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal11" aria-labelledby="portfolioModal11" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={priya} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Priya Patel <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Managing Partner Great Investments Ventures & VP Operations</h5>
                                    <p>Priya Patel has a diverse background with her expertise in leadership and bringing individuals together to positively impact our community. Priya received her Doctorate in Pharmacy and Masters Business Administration with a fellowship from Chicago in change management. 
                                    <br/><br/>
                                    Priya, also a licensed pharmacist, started as a healthcare executive for 13+ years with expertise in consulting, operations, financials, strategic planning and managing large teams in diverse settings from corporate to startup spaces. 
                                    <br/><br/>
                                    For the last year, Priya has since then transitioned her financial passion into her career and now is the Vice President of Operations at Nanban Enterprise. At Nanban, she leads a venture capital investment fund, oversees the operations for the Chola Land Division, Private Equity and Entertainment vertical. 
                                    <br/><br/>
                                    Priya has also been an active member of the community serving on various boards such as American College of Healthcare Executives, Dallas Chamber of Commerce, YMCA, and Austin Business Women.                                    
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal12" aria-labelledby="portfolioModal12" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={Jeremy} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Jeremy Green<span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Lead Legal Counsel</h5>
                                    <p>Jeremy Green is the General Counsel at Nanban Enterprise. He is also a partner at Freeman Lovell PLLC law firm and co-founder and general partner of PEREI Capital LLC, private equity and real estate investment firm. 
                                        <br/><br/>
                                        He brings 15+ years of diverse in-house and law firm experience handling business transactions, private equity investments, securities, tax law, and real estate matters. 
                                        <br/><br/>Jeremy's expertise includes assisting clients with private investment fund structuring (including real estate funds, private equity funds, venture funds, and hedge funds) and regulatory compliance. 
                                        <br/><br/>He drafts, reviews, and negotiates offering documents in connection with the formation and investments in real estate funds, Qualified Opportunity Zone funds, private equity funds, and hedge funds, as well as related co-investment and principal investment funds.
                                        </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal13" aria-labelledby="portfolioModal13" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={gary} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Gary Wilcox <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Chief Relationship Officer</h5>
                                    <p>Gary Wilcox is the Chief Relationship Officer at Nanban Enterprise. He joined Nanban in 2021 after a 30-year career leading large IT and business areas in several Fortune 100 financial services companies. 
                                        <br/><br/>
                                        Gary plays a key role in Nanban Enterprise leading the Investor Services area that is responsible for active engagement with the investor and prospective investor communities. 
                                        <br/><br/>
                                        Gary is also on the leadership team responsible for new fund creation projects. He has a management degree from Boston University.
                                        </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal14" aria-labelledby="portfolioModal14" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={Snehal} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Snehal Waje <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>VP Public Relations</h5>
                                    <p>Snehal Waje leads the Public Relations division at Nanban Group of companies.  She has been part of Nanban since its inception and was initially involved with setting the organization's mission and vision. 
                                        <br/><br/>As the head of Public Relations, Snehal is now responsible for fostering positive relationships between various communities, organizations, and media. She is also promoting the Nanban brand and philosophy via public events, media-campaigns while ensuring the company's reputation is maintained to the highest standards. 
                                        <br/><br/>Before leading the PR division, Snehal was the VP of Operations at Nanban Enterprise with a focus on setting up the HR department and various systems and processes. 
                                        <br/><br/>Snehal comes from a technology background and has experience working with Fortune 500 companies managing large programs and portfolios. Snehal has a management degree in Computer science with a business minor. 
                                        </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal15" aria-labelledby="portfolioModal15" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={chris} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Chris Landqvist <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>VP Branding</h5>
                                    <p>Chris Landqvist is the VP of Branding at Nanban Enterprise, a position he has held since joining Nanban Enterprise in 2021. He brings decades of executive experience, having led large Strategic Analytics Growth teams for several Fortune 50 companies. 
                                       <br/> <br/>He also brings a diverse skillset from the investment world. Chris previously led the investment and acquisition activities of a $5B Private Equity fund, primarily focusing on Biotech asset development.  
                                       <br/> <br/>Chris plays a significant role in the strategic growth of Nanban Enterprise. He is responsible for developing strategies to make Nanban a household name while upholding market-leading brand integrity and identity.
                                       <br/> <br/>A native of Sweden, Chris currently lives in sunny Florida with his wife and two boys. 
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal16" aria-labelledby="portfolioModal16" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={raj} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Raj Rongala <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Head Crypto</h5>
                                    <p>Raj Rongala is the head of the newly founded Crypto division at Nanban Enterprise. He will lead a group of individuals offering new and exciting investment opportunities in the blockchain and NFT space. A perfect marriage, one of the fastest growing investment assets inside of one of the fastest-growing investment wealth management firms.
                                     <br/> <br/>He is also serving as COO at Xforia Inc., a leading Technology organization helping fortune 100 companies with niche technical expertise.
                                     <br/><br/>He is passionate about enterprise strategy to fuel technology initiatives and various target markets analysis to deliver maximum business value.
                                     <br/> <br/>Raj is a firm believer in a flat, highly visible, and collaborative management style to enhance the workplace experience for his teams. He worked his way up the ranks at different organizations and domains, accumulating invaluable expertise leading up to this journey.
                                     <br/><br/>Father of 2, lives in DFW with his wife, and is an ardent fan of cricket and Formula 1.
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal17" aria-labelledby="portfolioModal17" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={padma} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Padma Pillai<span><a href="#" target="_blank"></a></span></h2>
                                    <h5>HR Manager</h5>
                                    <p>Padma Satish is the HR Manager of Nanban Group. She has over 20 years of global experience in Business and Account Management with a decade of success in HR & Talent Management. 
                                      <br/> <br/>With a mission to serve others, she is a dedicated and dynamic leader focused on People Operations, processes, and systems at Nanban. 
                                       <br/> <br/>Outside of work, Padma is an avid 10-pin bowler and plays the league in North Carolina.
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal18" aria-labelledby="portfolioModal18" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body pb-5 model_overlay">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
								     <img className="image_team" src={avatar} alt="Story" />
                                </div>
                                <div class="col-lg-8 portfolio">
                                    <h2 class="portfolio-modal-title mb-0">Pratham Guthi<span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Legal Counsel</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
}
export default Team;