import React, { useState, useMemo, useEffect } from 'react';
import ApiService from '../Api.service.js';
import Pagination from '../Pagination';
import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';
import media_banner from '../assets/img/slider/Media_Banner_Img.jpg';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import world from '../assets/img/media/world.png';
import linkedin from '../assets/img/icon/linkedin.png';
import twitter from '../assets/img/icon/twitter.png';
// ES Modules
import parse from 'html-react-parser'; 

import { NavLink } from "react-router-dom";
const last_segment = window.location.pathname.split('/').pop();
//console.log(last_segment);
export default function Media() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

/* Api Connection */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const testApi = async () => {
      // Test Get DATA//---;;

      try {
        setLoading(true);
        if(last_segment == '' || last_segment == 'media') {
        const usersData = await ApiService.httpGet('/News_api');
        setUsers(usersData);
        //console.log(usersData);
        setLoading(false);
        }
        else {
        const usersData = await ApiService.httpGet('/News_api/single_post/'+last_segment);
        setUsers(usersData);
        setLoading(false);
        }
       // console.log(usersData);

       
      } catch (err) {
        setLoading(false);
      }
    };

    testApi();
  }, []);
 /* pagination */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  let PageSize = 3;
  return (
    <>
      <header className="carousel-item1">
        <MyDiv className="container ipad-container">
          <MyDiv className="row">
            <MyDiv className="col-md-8 mob_arc banner-section">
              <h1 className="banner-heading  mb-0">News</h1>
              <p className="banner-subheading font-weight-light mb-0">Eplore the media coverage / news, across the globe on the philonthrophic and foundational work  <br /> by the Nanban’s, translating to it’s core values of helping the community and making a difference. </p>

            </MyDiv>
            <MyDiv className="col-md-4">
            </MyDiv>
          </MyDiv>
        </MyDiv>
      </header>
      <Section  className="top-banner-relative">
        <img className="common-img" src={media_banner} alt="Story" />
        <MyDiv className="container ipad-container">
          <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>News</li>
        </ul>
        </MyDiv>
      </Section>
      <Section className="flip-section bg-white mb-0" id="about">
        <MyDiv className="container ipad-container">
          <MyDiv className="row">
            <MyDiv className="row story_content">
              <div class="row justify-content-center">
                <div class="col-md-4 col-sm-12 col-xs-12 col-lg-4 three">
                  <div class="media-images mx-auto text-center">
                    <div id="textbox"><h4 class="alignleft linksin"><a href="https://www.linkedin.com/company/nanbanfdn/" target="_blank"><img src={linkedin} class="link-in"/> LinkedIn</a></h4></div>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6943159632496340993" height="650" width="100%" frameborder="0" allowfullscreen="" title="LinkedIn Post"></iframe>
                    <br />
                    <div id="textbox"><h4 class="alignleft"></h4><h4 class="alignright"><a href="https://www.linkedin.com/company/nanbanfdn/posts/?feedView=all" target="_blank">View on LinkedIn</a></h4></div>
                    <br /><br /><br />
                    <div id="textbox"><h4 class="alignleft linksin"><a href="https://twitter.com/nanbanfdn" target="_blank"><img src={twitter} class="link-in"/> Twitter</a></h4></div>
                    <TwitterTimelineEmbed
                      backgroundColor="#f5f8fa"
                      sourceType="profile"
                      screenName="nanbanfdn"
                      frameborder="0"
                      noHeader
                      noFooter
                      options={{ height: '600', width: '100%'}}
                    />
                    <br />
                    <div id="textbox"><h4 class="alignleft"></h4><h4 class="alignright"><a href="https://twitter.com/nanbanfdn" target="_blank">View on Twitter</a></h4></div>
                  </div>

                </div>
                <div class="col-md-8 col-sm-12 col-xs-12 col-lg-8  text-left one">
                  <MyDiv className="row">
                    {/* <div class="col-md-3 col-lg-1 col-sm-12 col-xs-12 text-center media-bg">
                      <img className="img-fluid" src={world} alt="" class="img-top img-responsive" />
                    </div> */}
                    <div class="col-md-12 col-lg-11 col-sm-12 col-xs-12 text-left media-news">
                      <h4 >Nanban News</h4>
                    </div>
                  </MyDiv>
                
                  {loading && <h1>Loading</h1>}
                  {currentPosts.map(user => {
                    if(last_segment == '' || last_segment == 'media') {
                    if (user.post_link != '' && user.post_link != 'null') {
                      // Nanban Foundation section
                      return(
                        <div class="media-item mx-auto">
                        <div id="textbox">
                          <h4 class="alignleft">{user.post_date}</h4>
                          <h4 class="alignright"><a href={user.website_link} target="_blank">{user.website_name}</a></h4>
                        </div>
                        <br /><br />
                        <h3 className='media_title'>{user.post_title}</h3>
                        {/* <p>{parse(user.post_description)}</p> */}
                        <br />
                        <a href={user.post_link}><i>Read more...</i> </a>
                      </div>
                      );
                    }
                    else {
                      // Nanban section
                      return (
                        <>
                        
                        <div class="media-item mx-auto">
                        <div id="textbox">
                          <h4 class="alignleft">{user.post_date}</h4>
                          <h4 class="alignright"><a href={user.website_link}>Nanban</a></h4>
                        </div>
                        <br /><br />
                        <h3 className='media_title'>{user.post_title}</h3>
                        {/* <p>{parse(user.post_description)}</p> */}
                        <br />
                        <a href={`media/${user.post_slug}`}><i>Read more...</i> </a>
                        {/* {/* <NavLink to={`media/${user.post_slug}`}><i>Read more...</i></NavLink> */}
                        
                      </div>
                      </>
                      );
                    }
                  }
                  else {

                    return (

                      <>
                        <br /> <br />
                        <a href="/media" class="back">Back to Media</a><br />
                        <div class="media-item mx-auto">
                          <div id="textbox">
                            <h4 class="alignleft">{user.post_date}</h4>
                            <h4 class="alignright">{user.website_name}</h4>
                          </div>
                          <br /><br />
                          <h3 className='media_title'>{user.post_title}</h3> <br /> <br />
                          <div >
                          <img src={user.post_image} class="img-responsive img-center"/>
                          </div><br /> <br />
                          <p>{parse(user.post_description)}</p>
                         </div>
                        <br /><br /><br />
                       {/* <div id="textbox"><h4 class="alignleft">July 08, 2022</h4><h4 class="alignright">nanban.com</h4></div> */}
                    </>
                    );
                  }
                  })}
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 two text-right">
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={users.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                  />
              </div>
              </div>
            </MyDiv>

          </MyDiv>
        </MyDiv>
      </Section>
    </>
  );
} 