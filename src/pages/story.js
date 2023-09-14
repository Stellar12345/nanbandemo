import React from 'react';
import story_banner from '../assets/img/slider/Story_Banner_Img.jpg';
import {MyDiv, Section, PTag, HeadingOne} from '../components/common/Common';

function Story() {
  return (
       <>
         {/* <header  className="carousel-item1">
  <MyDiv className="container">
    <MyDiv className="row">
        <MyDiv className="col-md-8 mob_arc banner-section">
          <h1 className="banner-heading  mb-0">Our Story</h1>
          <p className="banner-subheading font-weight-light mb-0">The word ‘nanban’ literally means ‘friend’ in the classic Indian language Tamil. True to its meaning,<br /> Nanban was established with the sole vision of helping the community at large attain financial <br /> freedom and supporting the underprivileged through socially-relevant initiatives.</p>
        </MyDiv>
        <MyDiv className="col-md-4">
        <MyDiv className="banner-color-section" style={{ visibility: "hidden" }}>
          <p className="banner-subheading2 font-weight-light mb-0">Nanban was born in 2018 when our visionary founder and CEO, Gopala Krishnan (fondly known as "GK"), returned to the United States in 2018 after a successful ex-pat assignment in India.
 <br/> <br/> Having created a trading system granting him financial freedom, "GK" was determined to give back to society in the best way he knew - teaching others how to produce consistent cash flow through a repeatable and straightforward system (what we now refer to as <span class="banner-sub">"GK" Strategies</span>)</p>
        <a class="btn banner-btn" href="https://nanbanfoundation.org/gk-strategies/" target="_blank">Learn More ...</a>
        </MyDiv>
        </MyDiv>
    </MyDiv>
  </MyDiv>
  </header> */}
  <header className="carousel-item1">
        <MyDiv className="container">
          <MyDiv className="row">
            <MyDiv className="col-md-8 mob_arc  banner-section">
              <h1 className="banner-heading  mb-0">Our Story</h1>
              {/* <p className="banner-subheading font-weight-light mb-0">Due to massive demand and increased growth, in addition to our Venture Capital Funds, our investing platform has expanded into land development, the Indian entertainment industry, and most recently, sustainable energy solutions. </p> */}

            </MyDiv>
          </MyDiv>
        </MyDiv>
        </header> 

  {/* <section >
  <img className="story-img" src={story_banner} alt="Story"/>
  </section> */}

<section className="top-banner-relative">
<img className="common-img" src={story_banner} alt="Story"/>
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
        <h4 className="storys-description">What's in a name<span className='tag-name'>?</span> At Nanban, it's everything</h4>
        <h4 className="storys-description">In the classic Indian language of Tamil, 'nanban' (pronounced nuh-n-buh-n) means 'friend.' A person you can trust. Someone who desires to help without seeking anything in return.</h4>
        <h4 className="storys-description">Since the founding of Nanban Group of Companies in 2020, this has been the driving ethos behind everything we do. Whether it's our high standards for upholding integrity in how we conduct business or our responsibility to people and the planet, we have an insatiable desire to help others.</h4>  
        <h4 className="storys-description">As an alternative investment firm, we're focused on helping investors achieve their financial goals. Nanban is trusted by institutional and private investors around the globe to manage multi-asset portfolios, delivering attractive performance, regardless of the economic conditions.</h4>
        <h4 className="storys-description">We achieve this through our proprietary cash flow-based strategies that are designed to produce risk-adjusted returns in any market environment. Our strategies employ timeless and universal investment principles - leveraging cash flow, capital protection, and compound interest - to navigate evolving economies. In this pursuit, we offer three alternative investment resources, including Nanban Ventures, Nanban Chola, and Nanban ESG Solutions.</h4>
        <h4 className="storys-description">As Nanbans, our success comes with responsibility. It's not just our livelihood. It's a platform from which we serve people and care for the environment. </h4>
        <h4 className="storys-description">We achieve this through our support of the 501(c)(3), Nanban Foundation. We've proudly contributed millions of dollars to back a range of noble causes around the world, such as the fight against hunger, environmental stewardship, education, organic farming, women empowerment, and biodiversity conservation, to name a few.</h4>
        <h4 className="storys-description">Some name our approach to businesses altruistic or socially responsible. To us, we call it Nanbanism.</h4>
        </MyDiv>   
      </MyDiv>       
    </MyDiv>
    </MyDiv>
</Section>
  </>
  );
}

export default Story;
