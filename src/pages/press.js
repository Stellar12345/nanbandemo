import React, { useState, useMemo, useEffect } from 'react';
import ApiService from '../Api.service.js';
import { api } from '../Api.service.js';
import {MyDiv, Section, PTag, HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive} from '../components/common/Common';
import press_banner from '../assets/img/press/press-banner.jpg';
import news_img from '../assets/img/press/news.png';
import press_kit from '../assets/img/press/press-kit.png';
import media_resource from '../assets/img/press/media-resource-img.png';
import mother_nation_details from '../assets/img/press/mother-of-nation-details.png';
import Swal from 'sweetalert2'
import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const API_BASE_URL = api.API_BASE_URL;
const last_segment = window.location.pathname.split('/').pop();
function Press() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  
   const validationSchema = Yup.object().shape({
      
      from_name: Yup.string().required('First Name is required *')
         .min(3, 'First Name must be at least 3 characters *')
        .max(20, 'First Name must not exceed 20 characters *'),
      // inquiry_topic: Yup.string().required('Inquiry Topic is required *'),
      to_name: Yup.string()
        .required('Last Name is required *')
        .min(3, 'Last Name must be at least 3 characters *')
        .max(20, 'Last Name must not exceed 20 characters *'),
      //   mobile_number: Yup.string().required('Phone Number is required *')
      //   .matches(phoneRegExp,"Phone Number is invalid *"),
    
        media_outlet: Yup.string().when("inquiry_topic", {
         is: val => val == "1",
         then: Yup.string().required("Media Outlet is required *").max(499, 'Media Outlet must not exceed 500 characters *'),
       }),
        reply_to: Yup.string()
        .required('Email is required *')
        .email('Email is invalid *'),
     
        deadline: Yup.string().when("inquiry_topic", {
         is: val => val == "1",
         then: Yup.string().required("Numbers only *").max(10, 'Year 4 Digit only'),
       }),
        message: Yup.string().required('Message is required *')
        .max(499, 'Message must not exceed 500 characters *'),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(validationSchema)
    });
  
    const onSubmit = data => {
     
      // console.log(JSON.stringify(data, null, 2));
      axios.post('https://nanban.stellarsolutionsindia.com/admin/Api/Contact_api/send_email',
      JSON.stringify(data)).then((response) => {
         //console.log(response.status);
         document.getElementById("contactform").reset();
         if (response.status === 200) {
            Swal.fire({
               text: response.data,
               icon: "success",
               type: "success"
            });
            this.setState({
               from_name: '',
               to_name: '',
               mobile_number: '',
               reply_to: '',
               message: '',
               inquiry_topic: '',
               media_outlet: '',
               deadline: '',
            });
            
         }
         else {
            Swal.fire({
               text: response.data,
               icon: "error",
               type: "error"
            });
         }

         //console.log(response.data);
      });
    };

   const [state, setState] = useState({
      from_name: '',
      to_name: '',
      mobile_number: '',
      reply_to: '',
      message: '',
      inquiry_topic: '',
      media_outlet: '',
      deadline: '',
   });
   
   
   const handleChange = (e) => {
      const value = e.target.value;
      setState({ ...state, [e.target.name]: value });
       //console.log(state);
   };

   const [verfied, setVerifed] = useState(false);

   // recaptcha function
   // function onChange(value) {
   //   console.log("Captcha value:", value);
   //   setVerifed(true);
   // }


   const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Api Connection */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const RecentNews = async () => {
      try {
        setLoading(true);
        if (last_segment == '' || last_segment == 'press') {
          const newsData = await ApiService.httpGet('/recentnews');
          setNews(newsData);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };
    RecentNews();
  }, []);

  const currentNews = news.slice(0, 3);
  const [PopupNews, setPopupNews] = useState({
    news_id: '',
    post_title: ''
  })
  const SingleNews = async (news_id) => {
    const responseSingleNews = await axios.get(API_BASE_URL + `/recentnews/view/` + news_id);
    setPopupNews(responseSingleNews.data[0]);
  }
  

  /* Media Coverage */
  const [media, setMedia] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const MediaCoverage = async () => {
      try {
        setLoading(true);
        if (last_segment == '' || last_segment == 'press') {
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

  const currentMedia = media.slice(0, 4);

  /* Media Coverage Popup */
  const [PopupMedia, setPopupMedia] = useState({
    media_id: '',
    post_title: ''
  })
  const SingleMedia = async (media_id) => {
    const responseSingleMedia = await axios.get(API_BASE_URL + `/mediacoverage/view/` + media_id);
    setPopupMedia(responseSingleMedia.data[0]);
  }
  /* Press Kit */
  const [kit, setKit] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const MediaKit = async () => {
      try {
        setLoading(true);
        if (last_segment == '' || last_segment == 'press') {
          const kitData = await ApiService.httpGet('/nanbanpresskit');
          setKit(kitData);
          console.log(kitData[0].file);
         var pdf =  kitData[0].file
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };
    MediaKit();
  }, []);

  const currentKit = kit.slice(0, 1);

  /* Media Resource */
  const [MediaImage, setMediaImage] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const MediaImageFun = async () => {
      try {
        setLoading(true);
        if (last_segment == '' || last_segment == 'press') {
          const kitImage = await ApiService.httpGet('/mediaresources');
          setMediaImage(kitImage);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };
    MediaImageFun();
  }, []);

  // const currentResponse = response.slice(0, 1);

  const [Popupimg, setPopupimg] = useState({ media_id: ''})
  const Singleallimg = async (media_id) => {
    const responseSingleallimg = await axios.get(API_BASE_URL + `/Mediaresources_category/view/` + media_id);
    setPopupimg(responseSingleallimg.data);
    console.log(responseSingleallimg.data)
    //SingleMedia(media_id)
  }

 

  /* Media Resource */
  const [MediaImage1, setMediaImage1] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const MediaImage1Fun = async () => {
      try {
        setLoading(true);
        if (last_segment == '' || last_segment == 'press') {
          const kitImage1 = await ApiService.httpGet('/Nanbanpresskit');
          setMediaImage1(kitImage1);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };
    MediaImage1Fun();
  }, []);

 {/* {MediaImage1?.length
    ? MediaImage1.map((mediapdf) => ( */}
    {/* // <a href={mediapdf.file} download="Nanban Press Kit"  target="_blank"> Nanban Press Kit</a>
    // )) : null} */}

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    // var api = ApiService.httpGet(`/nanbanpresskit`) ;
    
    // console.log(api);
    fetch('https://nanban.stellarsolutionsindia.com/admin/assets/img/media_resources/9d335b66def9401307a053b7a0ca8e6a.pdf').then(response => {
      // console.log(api);
        response.blob().then(blob => {
            // Creating new object of PDF file

            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'media';
            alink.click();
        })
    })
}


  return (
       <>
          <header className="carousel-item1">
            <MyDiv className="container ipad-container">
              <MyDiv className="row">
                <MyDiv className="col-md-8 mob_arc banner-section">
                  <HeadingOne className="banner-heading  mb-0">Press Room</HeadingOne>
                  {/* <PTag className="banner-subheading font-weight-light mb-0">Every great business needs a solid foundation to gain the type of traction Nanban has created over the past 18 months.<br/>
                    Without our founders' vision, execution, and processes, Nanban would just be a noble idea that never came to fruition.</PTag> */}
                </MyDiv>
                <MyDiv className="col-md-4">
                </MyDiv>
              </MyDiv>
            </MyDiv>
        </header>
        <Section className="top-banner-relative">
          <img className="common-img" src={press_banner} alt="press_banner" />
          <MyDiv className="container ipad-container">
          {/* <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Press Room</li>
        </ul> */}
        </MyDiv>
        </Section>
        <Section className="press-main">
          <MyDiv className="container ipad-container">
            <MyDiv className="row">
            <MyDiv className="col-md-7 col-lg-8 col-xl-8">
              <MyDiv className="press-left">
                <MyDiv className="press-news">
                  <HeadingThree className="col-6 text-left">
                  Press Releases
                  </HeadingThree>
                  <HeadingTwo className="col-6 text-right">
                    <a href="/recent-news">See All</a>
                  </HeadingTwo>
                </MyDiv>
              </MyDiv>
              {loading && <h1 className="text-center">Loading...</h1>}
              {currentNews?.length
                ? currentNews.map((news) => (
                  <div data-bs-toggle="modal" class="news-cursor" data-bs-target="#recent-news1" key={news.news_id} onClick={() => SingleNews(news.news_id)}>
                    <HeadingFour>{news.post_date}</HeadingFour>
                    <PTag>{news.post_title}</PTag>
                    <hr />
                  </div>
                )) : null || <h3 class="text-center"></h3>}
            </MyDiv>

              <MyDiv className="col-md-5 col-lg-4 col-xl-3 right-section">
                <MyDiv className="card">
                  <MyDiv className="card-header text-left">Photo Albums</MyDiv>
                  <hr/>
                  <MyDiv className="card-body">
                  <MyDiv className="press-news press-news-kit ">
                          <HeadingTwo className="col-12 text-left">

                          <HeadingTwo className="col-12 text-left">
                          {MediaImage1?.length
                         ? MediaImage1.map((mediapdf) => (
                          <a href={mediapdf.file} download="Nanban Press Kit"  target="_blank"> Nanban Press Kit</a>

                          )) : null}

                           {/* <a href={pdf} download> Nanban Press Kit</a> */}
                             {/* <a href="#" data-bs-toggle="modal">Nanban Press Kit</a> */}
                          </HeadingTwo>
                       
                          </HeadingTwo>
                  </MyDiv>
                  </MyDiv>
                  <MyDiv className="image-part">
                    <img src={media_resource} alt="Snow"/>
                    <button class="btn media-btn" data-bs-toggle="modal" data-bs-target="#media_resource_img">Media Image Gallery</button>
                  </MyDiv>
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section>
       

<Section className="press-cover">
        <MyDiv className="container ipad-container">
          <MyDiv className="row">
            <MyDiv className="col-md-12">
              <MyDiv className="press-left">
                <MyDiv className="press-news">
                  <HeadingThree className="col-6 text-left">
                    Media Coverage
                  </HeadingThree>
                  <HeadingTwo className="col-6 text-right">
                    <a href="/media-coverage">See All</a>
                  </HeadingTwo>
                </MyDiv>
              </MyDiv>
            </MyDiv>
          </MyDiv>
          <MyDiv className="row card-section">
            {loading && <h1 className="text-center">Loading...</h1>}
            {currentMedia?.length
              ? currentMedia.map((media) => (
                <MyDiv className="col-md-6 col-lg-3" key={media.media_id}>
                  <div class="card">
                    <a href={media.post_link} target ="blank">
                      <img src={media.post_image} alt={media.post_image} class="img-responsive media_img" />
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
        </MyDiv>
      </Section>

        <Section className="press-main press-main-bottom">
          <MyDiv className="container ipad-container">
            <MyDiv className="row">
              <MyDiv className="col-md-12">
              <MyDiv className="press-left">
                      <MyDiv className="press-news">
                          <HeadingThree className="col-md-6 text-left">
                            Contact Nanban PR
                          </HeadingThree>
                      </MyDiv>
                  </MyDiv>
              </MyDiv>
              <MyDiv className="capital-section">
              <form onSubmit={handleSubmit(onSubmit)} id='contactform' type="post">
              <input
                                 type='hidden'
                                 name='inquiry_topic'
                                 class='form-control'
                                 {...register('inquiry_topic')}
                                 value="1"
                                 />
{/* 
                           <div class="col-md-12 col-sm-12 form-field">
                              <select onChange={handleChange} name='inquiry_topic'  {...register('inquiry_topic')}
            className={`inquiry_topic form-control ${errors.inquiry_topic ? 'is-invalid' : ''}`}>
                                 <option value="">Inquiry Topic</option>
                                 <option value="1">Media Inquiry</option>
                                 <option value="2">Entrepreneur Inquiry</option>
                                 <option value="3">Investor Inquiry</option>
                              </select>
                              <div className="invalid-feedback">{errors.inquiry_topic?.message}</div>
                           </div> */}

                           <div class="col-md-6 col-sm-12 form-field">

                              {/* <input
                                 type='text'
                                 name='from_name'
                                 class='form-control'
                                 placeholder='First Name'
                                 maxLength={30}
                                 minLength={5}
                                 onChange={handleChange}
                                 required
                              /> */}
                         <input
            name="from_name"
            type="text"
            onChange={handleChange}
            placeholder='First Name *'
            {...register('from_name')}
            className={`form-control ${errors.from_name ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.from_name?.message}</div>

          
                           </div> 
                           
                           <div class="col-md-6 col-sm-12 form-field">
                              {/* <input
                                 type='text'
                                 name='to_name'
                                 class='form-control'
                                 placeholder='Last Name'
                                 onChange={handleChange}
                                 maxLength={20}
                                 minLength={1}
                                 required
                              /> */}
                               <input
            name="to_name"
            type="text"
            onChange={handleChange}
            placeholder='Last Name *'
            {...register('to_name')}
            className={`form-control ${errors.to_name ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.to_name?.message}</div>
                           </div>
                            <div class="col-md-12 col-sm-12 form-field">
                              {/* <input
                                 type='text'
                                 name='media_outlet'
                                 class='form-control'
                                 placeholder='Media Outlet'
                                 onChange={handleChange}
                                 maxLength={20}
                                 minLength={1}
                                 required
                              /> */}
                               <textarea
            name="media_outlet"
            type="text"
            maxLength="500"
            onChange={handleChange}
            placeholder='Media Outlet *'
            {...register('media_outlet')}
            className={`form-control ${errors.media_outlet ? 'is-invalid' : ''}`}
          /><div className="invalid-feedback">{errors.media_outlet?.message}</div>
                           </div>
                           <div class="col-md-6 col-sm-12 form-field">
                              {/* <input
                                 type='text'
                                 name='mobile_number'
                                 class='form-control'
                                 placeholder='Phone Number'
                                 onChange={handleChange}
                                 maxLength={13}
                                 minLength={10}
                                 pattern="[0-9]{10}"
                                 required
                              /> */}
                              <input
            name="mobile_number"
            type="text"
            onChange={handleChange}
            placeholder='Phone Number'
            {...register('mobile_number')}
            className={`form-control ${errors.mobile_number ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.mobile_number?.message}</div>
                           </div>

                           <div class="col-md-6 col-sm-12 form-field">
                              {/* <input
                                 type='email'
                                 name='reply_to'
                                 class='form-control'
                                 placeholder='Email'
                                 onChange={handleChange}
                                 minLength={7}
                                 pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                                 required
                              /> */}
                               <input
            name="reply_to"
            type="email"
            onChange={handleChange}
            placeholder='Email *'
            {...register('reply_to')}
            className={`form-control ${errors.reply_to ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.reply_to?.message}</div>
                           </div>
                           <div class="col-sm-12 col-md-6  form-field dead">
                              {/* <input
                                 type='date'
                                 name='deadline'
                                 class='form-control'
                                 placeholder='Deadline'
                                 onChange={handleChange}
                                 maxLength={20}
                                 minLength={1}
                                 required
                              /> */}
                              <label>Deadline *</label>
                              <input
            name="deadline"
            type="date" 
            onChange={handleChange}
            placeholder='Deadline'
           
            // onfocus="(this.type = 'date')"
            {...register('deadline')}
            className={`form-control ${errors.deadline ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.deadline?.message}</div>
                           </div>
                           <div class="col-md-12 col-sm-12 form-field">
                              {/* <textarea
                                 type='text'
                                 name='message'
                                 class='form-control'
                                 placeholder='Message'
                                 onChange={handleChange}
                                 maxLength={500}
                                 minLength={20}
                                 rows="1" cols="1"
                                 required
                              /> */}
                              <textarea
                                 type='text'
                                 name='message'
                                 maxLength="500"
                                 onChange={handleChange}
                                 placeholder='Message *'
                                 {...register('message')}
                                 className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                              />
                              <div className="invalid-feedback">{errors.message?.message}</div>
                              
                           </div>

                           {/* <ReCAPTCHA
    sitekey="6Ld_f2YkAAAAABxi1Q3jTKy4z_G1md67jZrEgVEj"
    onChange={onChange}
  /> */}

                           <div class="col-md-12 col-sm-12 btn-footer text-right">
                              <button type='submit'  className={`btn banner-btn2 ${!verfied ? 'not-verified':'verified'}`}>Submit</button>
                           </div>
                        </form>
                        </MyDiv>
            </MyDiv>
          </MyDiv>
        </Section> 

        <div class="press-modal modal fade" id="media_coverage1" aria-labelledby="media_coverage1" aria-hidden="true" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body model_overlay model-press">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 text-left">
                                    <HeadingThree>
                                        Media Coverage
                                    </HeadingThree>
                                </div>
                                <div class="col-6 text-right">
                                      <HeadingThree>
                                        January 09, 2023
                                    </HeadingThree>
                                </div>
                            </div>
                            <h2 class="text-center mt-4 mb-5">A Mother of Nanban</h2>
                            <img src={mother_nation_details} alt="press_banner" class="img-responsive" />
                            <p class="media-description">Breaking the norms needs a solid foundation to gain the type of traction. Nanban has created over the past 18 months. Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            {/* <button class="btn btn-read" type="button">Read More</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="press-modal media-resource-img modal fade press-modal-media" id="media_resource_img" aria-labelledby="media_resource_img" aria-hidden="true" >
        <div class="modal-dialog modal-xl media-resource-img-popup">
          <div class="modal-content">
            <div class="modal-body model_overlay model-press">
              <div class="container">
                {/* <h2 class="text-center mt-4 mb-3">Nanban Media Resource Images</h2> */}
                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="press-content-inner">
                <div class="row">
                  {loading && <h1>Loading</h1>}
                  {MediaImage?.length
                    ? MediaImage.map((mediaImage) => (
                      <div class="col-4" key={mediaImage.file}>
                        <div class="img-select" data-bs-toggle="modal" data-bs-target="#category_media_resource_img" key={mediaImage.media_id} onClick={() => Singleallimg(mediaImage.media_id)}>
                          {/* <input type="checkbox" id={"demo" + mediaImage.media_id} class="ads_Checkbox" value={mediaImage.media_id} /> */}
                          {/* <label htmlFor={"demo" + mediaImage.media_id}><img src={mediaImage.file} id={mediaImage.media_id} alt="nanban_media_resource_img1" class="img-responsive" /></label> */}
                          <img src={mediaImage.file} id={mediaImage.media_id} alt="nanban_media_resource_img1" class="img-responsive media_popup" />
                          <h4 class="press-media-name">{mediaImage.media_title}</h4>
                        </div>
                      </div>
                    )) : null || <h3></h3>}
                </div>
                </div>
                {/* <button class="btn btn-read mt-4 mb-5 download-img" type="button">Download</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="press-modal media-resource-img modal fade category_media-press-modal"  id="category_media_resource_img" aria-labelledby="category_media_resource_img" aria-hidden="true" >
        <div class="modal-dialog modal-xl media-resource-img-popup">
          <div class="modal-content">
            <div class="modal-body model_overlay model-press">
              <div class="container">
                {/* <h2 class="text-center category-media-title-name">Educations</h2> */}
                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="press-content-inner cat-media-content-inner">
                <div class="row">
                  {loading && <h1>Loading</h1>}
                  {Popupimg?.length
                    ? Popupimg.map((mediaImage) => (
                    <div class="col-4">
                        <div class="select-press-media img-select">
                         <input type="checkbox" id={"demo" + mediaImage.id} class="ads_Checkbox" value={mediaImage.id} /> 
                         <label htmlFor={"demo" + mediaImage.id}><img src={mediaImage.file} id={mediaImage.id} alt="nanban_media_resource_img1" class="img-responsive media_popup" /></label> 

                          {/* <input type="checkbox" id="myCheckbox1" class="ads_Checkbox" value="people1" />
                          <label for="myCheckbox1">
                          <img src={mediaImage.file} id="gallery_people1" alt="nanban_media_resource_img1" class="img-responsive" />
                          </label> */}
                         
                        </div>
                    </div>
                    )) : null || <h3></h3>}
                 
                </div>
                </div>
                <button class="btn btn-read mt-4 mb-5 download-img" type="button">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="press-modal modal fade" id="recent-media1" aria-labelledby="recent-media1" aria-hidden="true">
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
                <img src={PopupMedia.post_image} alt="press_banner" class="img-responsive" />
                <p class="media-description">{PopupMedia.post_description}</p>
                {/* <button class="btn btn-read" type="button">Read More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  );
}

export default Press;