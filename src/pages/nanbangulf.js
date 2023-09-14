import React from 'react';
import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';
import verticals_banner from '../assets/img/slider/vertical.jpg';
import vivek from "../assets/img/architect/vivek.png";
import linkedin from "../assets/img/icon/linked-in.png";
function Gulf() {
  return (
    <>
      <header className="carousel-item1">
        <MyDiv className="container">
          <MyDiv className="row">
            <MyDiv className="col-md-8 mob_arc  banner-section">
              <h1 className="banner-heading  mb-0">Nanban Gulf</h1>
              <p className="banner-subheading font-weight-light mb-0">Nanban Group is excited to announce the launch of Nanban Gulf in November 2022. The official launch will occur at the RISE summit in Dubai on November 9th for all fellow Nanbans in the Gulf region.</p>
            </MyDiv>
          </MyDiv>
        </MyDiv>
        </header>

        <section >
          <img className="common-img" src={verticals_banner} alt="Story" />
        </section>
        <Section className="flip-section bg-white text-white mb-0" id="about">
          <MyDiv className="container">
            <MyDiv className="row">
              <MyDiv className="row story_content">
                <MyDiv className="col-md-12 mob-story">
                  <h4 className="storys-description">All Nanbans from the Gulf region will soon have the opportunity to become a part of our global expansion by investing in Nanban Gulf. We're working diligently to establish a physical presence in Dubai, where we will operate our fund operations and offices will be located.</h4>
                  <h4 className="storys-description">Nanban Group is a US-based investment management group widely recognized for its presence in alternative investment funds and its extensive dedication to philanthropic activities across the globe. Our investment thesis centers around constantly delivering cash flow while focusing on principal protection, regardless of market direction. The targeted average annual returns for our funds are 20-45% <i>(Past performance is not an indication of future performance. Returns are not guaranteed).</i></h4>
                  <h4 className="storys-description">Based on our latest track record, family offices and high net-worth investors are lining up to invest across the spectrum of funds we offer. </h4>
                  <h4 className="storys-description">What started as a local investment firm has grown exponentially over the past three years into a notable player operating seven independent business verticals. Nanban Enterprise offers investors diversified investment options in Venture Capital, Multi Family Real Estate, and Land Development. Our latest offerings also provide exposure to the verticals like ESG, Blockchain/NFTs, Entertainment, and Private Equity.</h4>                  
                  <h4 className="storys-description">Investing with Nanban doesn't just provide above-market returns, it is also socially responsible as portions of our profits are funneled to our charitable organization, Nanban Foundation. </h4>
                  <h4 className="storys-description">These philanthropic activities we sponsor are conducted by Nanban Foundation, a registered public charity 501(c)(3). Much like our for-profit side, our Foundation has grown exponentially. It now serves the needs through the work of Nanban Foundation India, Nanban Sports Foundation, Mothers for Mother Nature, Financial Literacy, Women Empowerment, Nanban Arts Foundation, and Nanban Cares (Health Care).</h4>
                  <h4 className="storys-description">Our executive team will attend the RISE summit in Dubai from November 9th to the 11th. Please feel free to introduce yourself and join our revolution to make the world a better place.</h4>
                  <h4 className="storys-description">Due to tremendous DEMAND from the Gulf region, Nanban Group is establishing our presence in Dubai to offer US market exposure and investment opportunities to High-Net-Worth Individuals and Family Offices. We're excited to get to know you.</h4>
                  <h4 className="storys-description specific-block">To learn more, please visit <a href="/nanbangulf">http://nanbangulf.com</a> or email us at <a href="mailto:howdy@nanbangulf.com">howdy@nanbangulf.com.</a></h4>
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>
        <Section className="flip-section mb-0 md-section" id="md-section">
          <MyDiv className="container">
            <MyDiv className="row">
                                <MyDiv className="col-md-4">
								                    <img className="img-responsive md-img" src={vivek} alt="Story" />
                                </MyDiv>
                                <MyDiv className="col-md-8 portfolio right-sec-new">
                                    <h2 className="portfolio-modal-title mb-0">Vivek Kumar <span><a href="#" target="_blank"></a></span></h2>
                                    <h5>Managing Director, Nanban Gulf</h5>
                                    <p>As a Managing Director at Nanban Gulf, Vivek Kumar brings a wealth of experience as an entrepreneur, angel investor, and venture capitalist to the table. He comes from a family of Army veterans, who instilled in him a strong work ethic and a love for adventure and travel, which has led him to live and work all over India. He currently resides in Dubai.
                                    <br/><br/>
                                    With a proven track record of success in building and scaling startups, as well as mentoring up-and-coming entrepreneurs, Vivek is well-respected in the startup community. He has a wealth of experience in identifying and investing in high-growth potential companies, and is known for his ability to provide valuable guidance and support to the leadership teams of his portfolio companies.
                                    <br/><br/>
                                    Prior to his career in entrepreneurship, Vivek held senior executive roles in leading BFS organizations such as Kotak, Tata AIG, HDFC, and ICICI. His experience in these organizations, combined with his education in business administration, has given him a deep understanding of the financial sector and how to navigate it successfully.
                                    <br/><br/>
                                    Vivek is a Double MBA, Gold Medalist by academics, which is a testament to his commitment to education and personal growth. He welcomes the opportunity to speak with entrepreneurs and other investors about their ideas and projects. He is also a Motivational speaker par excellence with Deep understanding of Spirituality.
                                </p></MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>
        
    </>
  );
}

export default Gulf;