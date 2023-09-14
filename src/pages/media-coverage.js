import React, { useState, useMemo, useEffect } from 'react';
import ApiService from '../Api.service.js';
import { api } from '../Api.service.js';
import { MyDiv, Section, PTag, HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive } from '../components/common/Common';
import Pagination from '../Pagination';
import media_coverage_banner from '../assets/img/press/media-coverage-banner.png';
import Swal from 'sweetalert2'
import axios from "axios";

const API_BASE_URL = api.API_BASE_URL;
const last_segment = window.location.pathname.split('/').pop();

function MediaCoverage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  /* Api Connection */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const MediaCoverage = async () => {
      try {
        setLoading(true);
        if (last_segment == '' || last_segment == 'media-coverage') {
          const mediaData = await ApiService.httpGet('/mediacoverage');
          setMedia(mediaData);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };

    MediaCoverage();
  }, []);
  /* pagination */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = media.slice(indexOfFirstPost, indexOfLastPost);
  let PageSize = 12;

  /* Media Coverage Popup */
  const [PopupMedia, setPopupMedia] = useState({
    media_id: '',
    post_title: ''
  })
  const SingleMedia = async (media_id) => {
    const responseSingleMedia = await axios.get(API_BASE_URL + `/mediacoverage/view/` + media_id);
    setPopupMedia(responseSingleMedia.data[0]);
  }

  return (
    <>
      <header className="carousel-item1">
        <MyDiv className="container ipad-container">
          <MyDiv className="row">
            <MyDiv className="col-md-8 mob_arc banner-section">
              <HeadingOne className="banner-heading  mb-0">Media Coverage</HeadingOne>
              <PTag className="banner-subheading font-weight-light mb-0">Every great business needs a solid foundation to gain the type of traction Nanban has created over the past 18 months. <br />
                Without our founders' vision, execution, and processes, Nanban would just be a noble idea that never came to fruition.</PTag>
            </MyDiv>
            <MyDiv className="col-md-4">
            </MyDiv>
          </MyDiv>
        </MyDiv>
      </header>
      <Section className="top-banner-relative">
        <img className="common-img" src={media_coverage_banner} alt="press_banner" />
        <MyDiv className="container ipad-container">
          <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Media Coverage</li>
        </ul>
        </MyDiv>
      </Section>
      <Section className="press-cover press-coverage-page">
        <MyDiv className="container ipad-container">
          <MyDiv className="row">
            <MyDiv className="col-md-12">
              <MyDiv className="press-left">
                <MyDiv className="press-news">
                  <HeadingThree className="col-md-6 text-left">
                    Media Coverage
                  </HeadingThree>
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
          <MyDiv className="row card-section">
            {loading && <h1 className="text-center">Loading...</h1>}
            {currentPosts?.length
              ? currentPosts.map(media => (
                <MyDiv className="col-md-6 col-lg-3" key={media.media_id}>
                  <div class="card">
                    <a href={media.post_link} target ="blank">
                    <img src={media.post_image} class="img-responsive media_img" alt={media.post_image} />
                    <MyDiv className="card-content">
                      <HeadingThree className="text-center">{media.post_title}</HeadingThree>
                      <HeadingFour className="text-center">{media.post_description}</HeadingFour>
                      <HeadingFive className="text-center">{media.post_date}</HeadingFive>
                    </MyDiv>
                    </a>
                  </div>
                </MyDiv> 
              )) : null || <h3 className="text-center"></h3>}
          </MyDiv>
          <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 two text-right mb-5">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={media.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </MyDiv>
      </Section>
      <div class="press-modal modal fade" id="recent-media1" aria-labelledby="recent-media1" aria-hidden="true" >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body model_overlay model-press">
              <div class="container">
                <div class="row">
                  <div class="col-6 text-left">
                    <HeadingThree>
                      {/* Media Coverage */}
                    </HeadingThree>
                  </div>
                  <div class="col-6 text-right">
                    <HeadingThree>
                      {PopupMedia.post_date}
                    </HeadingThree>
                  </div>
                </div>
                <h2 class="text-center mt-4 mb-5"> {PopupMedia.post_title}</h2>
                <img src={PopupMedia.post_image} alt={PopupMedia.post_image} class="img-responsive " />
                <p class="media-description">{PopupMedia.post_description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaCoverage;
