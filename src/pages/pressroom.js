import React, { useState, useMemo, useEffect } from 'react';
import ApiService from '../Api.service.js';
import { api } from '../Api.service.js';
import {MyDiv, Section, PTag, HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive} from '../components/common/Common';
import press_banner from '../assets/img/press/press-banner.jpg';
import news_img from '../assets/img/press/news.png';
import press_kit from '../assets/img/press/press-kit.png';
import media_resource from '../assets/img/press/media-resource-img.png';
import media_cover from '../assets/img/press/media-coverage-img.png';
import media_coverage_img1 from '../assets/img/press/media_coverage_img1.png';
import green_india from '../assets/img/press/green-india.png';
import woman_empowerment from '../assets/img/press/woman-empowerment.png';
import special_children from '../assets/img/press/special-children.png';
import contact_nanban from '../assets/img/press/contact-nanban.png';
import mother_nation_details from '../assets/img/press/mother-of-nation-details.png';
import nanban_media_resource_img1 from '../assets/img/press/nanban-media-resource-img1.png';
import nanban_media_resource_img2 from '../assets/img/press/nanban-media-resource-img2.png';
import nanban_media_resource_img3 from '../assets/img/press/nanban-media-resource-img3.png';
import nanban_media_resource_img4 from '../assets/img/press/nanban-media-resource-img4.png';
import nanban_media_resource_img5 from '../assets/img/press/nanban-media-resource-img5.png';
import nanban_media_resource_img6 from '../assets/img/press/nanban-media-resource-img6.png';
import nanban_media_resource_img7 from '../assets/img/press/nanban-media-resource-img7.png';
import nanban_media_resource_img8 from '../assets/img/press/nanban-media-resource-img8.png';
import nanban_media_resource_img9 from '../assets/img/press/nanban-media-resource-img9.png';
import nanban_media_resource_img10 from '../assets/img/press/nanban-media-resource-img10.png';
import nanban_media_resource_img11 from '../assets/img/press/nanban-media-resource-img11.png';
import nanban_media_resource_img12 from '../assets/img/press/nanban-media-resource-img12.png';
import pdf from '../assets/img/pdf/dummy.pdf';
import media_banner from '../assets/img/slider/Media_Banner_Img.jpg';

import Swal from 'sweetalert2'
import axios from "axios";
import { useForm } from 'react-hook-form';




function PressRoom() {
  
 return (
       <>
          <header className="carousel-item1">
            <MyDiv className="container ipad-container">
              <MyDiv className="row">
                <MyDiv className="col-md-12 mob_arc banner-section">
                  <HeadingOne className="banner-heading  mb-0">News</HeadingOne>
                 
                </MyDiv>
                <MyDiv className="col-md-4">
                </MyDiv>
              </MyDiv>
            </MyDiv>
        </header>
        <Section className="top-banner-relative">
          {/* <img className="common-img" src={press_banner} alt="press_banner" /> */}
          <img className="common-img" src={media_banner} alt="Story" />
          <MyDiv className="container ipad-container">
          {/* <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>News</li>
        </ul> */}
        </MyDiv>
        </Section>
        <Section className="press-main">
          <MyDiv className="container ipad-container">
            <MyDiv className="row">
           
              <MyDiv className="col-md-12 col-lg-12 col-xl-12">
                  <MyDiv className="press-left">
                    <MyDiv className="press-news">
                          <HeadingThree className="col-6 text-left">
                          News
                          </HeadingThree>
                         
                      </MyDiv>
                  </MyDiv>
                  <div> <HeadingFour>Announcing Nanban Entertainment, New India-Based Film and Talent Company*</HeadingFour>
                      <PTag>Nanban India taps Indian actor, Aari Arujunan, to lead new production studio and talent agency; pursuing opportunities in Indian film sector</PTag>
                      <a class="nanban-aari" href="nanban-entertainment">READ MORE...</a>
                     
                  </div>
                  <div> <HeadingFour>Nanban Announces New Ambassador in India, Mr. Aari Arujunan</HeadingFour>
                      <PTag>International alternative investment and project financing firm appoints Indian actor to represent company in India; supporting endeavors abroad</PTag>
                      <a class="nanban-aari" href="nanban-ambassador">READ MORE...</a>
                     
                  </div>


                 
                 
                 
              </MyDiv>
             
            </MyDiv>
          </MyDiv>
        </Section>
       
        

       

       
  </>
  );
}

export default PressRoom;