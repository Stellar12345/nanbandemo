import React, { useState, useMemo, useEffect } from 'react';
import ApiService from '../Api.service.js';
import { api } from '../Api.service.js';
import Pagination from '../Pagination';
import { MyDiv, Section, PTag, HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive } from '../components/common/Common';
import recent_news_banner from '../assets/img/press/recent-news-banner.png';
import Swal from 'sweetalert2'
import axios from "axios";

const API_BASE_URL = api.API_BASE_URL;
const last_segment = window.location.pathname.split('/').pop();

function RecentNews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  /* Api Connection */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const testApi = async () => {
      try {
        setLoading(true);
        if (last_segment == '' || last_segment == 'recent-news') {
          const usersData = await ApiService.httpGet('/recentnews');
          setUsers(usersData);
          setLoading(false);
        }
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
  let PageSize = 5;

  const [PopupNews, setPopupNews] = useState({
    news_id: '',
    post_title: ''
  })
  const SingleNews = async (news_id) => {
    const responseSingleNews = await axios.get(API_BASE_URL + `/recentnews/view/` + news_id);
    setPopupNews(responseSingleNews.data[0]);
  }

  return (
    <>
      <header className="carousel-item1">
        <MyDiv className="container ipad-container">
          <MyDiv className="row">
            <MyDiv className="col-md-8 mob_arc banner-section">
              <HeadingOne className="banner-heading  mb-0">Press Releases</HeadingOne>
              {/* <PTag className="banner-subheading font-weight-light mb-0">Every great business needs a solid foundation to gain the type of traction Nanban has created over the past 18 months.<br />
                Without our founders' vision, execution, and processes, Nanban would just be a noble idea that never came to fruition.</PTag> */}
            </MyDiv>
            <MyDiv className="col-md-4">
            </MyDiv>
          </MyDiv>
        </MyDiv>
      </header>
      <Section className="top-banner-relative">
        <img className="common-img" src={recent_news_banner} alt="recent_news_banner" />
        <MyDiv className="container ipad-container">
          <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Press Releases</li>
        </ul>
        </MyDiv>
      </Section>
      <Section className="press-main recent-news-page">
        <MyDiv className="container ipad-container">
          <MyDiv className="row">
            <MyDiv className="col-md-12 main-content-section">
              {loading && <h1 className="text-center">Loading</h1>}
              {currentPosts?.length
                ? currentPosts.map((user) => (
                  <div data-bs-toggle="modal" class="news-cursor" key={user.news_id} data-bs-target="#recent-news1" onClick={() => SingleNews(user.news_id)}>
                    <HeadingFour>{user.post_date}</HeadingFour>
                    <PTag>{user.post_title}</PTag>
                    <hr />
                  </div>
                )) : null || <h3 className="text-center"></h3>}
            </MyDiv>
          </MyDiv>
          <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 two text-right mt-4">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={users.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </MyDiv>
      </Section>
      <div class="press-modal modal fade" id="recent-news1" aria-labelledby="recent-news1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body model_overlay model-press model-news">
              <div class="container">
                <div class="row">
                  <div class="col-6 text-left">
                    <HeadingThree>
                      {/* Recent News */}
                    </HeadingThree>
                  </div>
                  <div class="col-6 text-right">
                    <HeadingThree>
                      {PopupNews.post_date}
                    </HeadingThree>
                  </div>
                </div>
                <h2 class="text-center mt-4 mb-5">{PopupNews.post_title}</h2>
                <img src={PopupNews.post_image} alt="press_banner" class="img-responsive all_img" />
                <p class="media-description">{PopupNews.post_description}</p>
                {/* <button class="btn btn-read" type="button">Read More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentNews;
