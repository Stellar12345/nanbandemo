import React, { useEffect, useState } from "react";
import { MyDiv, Section, PTag, HeadingOne } from '../components/common/Common';
import contact_banner from '../assets/img/slider/Contact_Banner_Img.jpg';
import contact_banners from '../assets/img/story/contact_banner.jpg';
import Swal from 'sweetalert2'
import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";

// import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
   
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  
   const validationSchema = Yup.object().shape({
      
      from_name: Yup.string().required('First Name is required *')
         .min(3, 'First Name must be at least 3 characters *')
        .max(20, 'First Name must not exceed 20 characters *'),
      inquiry_topic: Yup.string().required('Inquiry Topic is required *'),
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
      axios.post('https://nanbanmfmn.org/admin/Api/Contact_api/send_emails',
      JSON.stringify(data)).then((response) => {
         //console.log(response.status);
         document.getElementById("contactform").reset();
         if (response.status === 200) {
            Swal.fire({
               text: response.data,
               icon: "success",
               type: "success",
             }).then(() => {
               window.location.reload(); // This will reload the page after the user clicks "OK"
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
       console.log(state);
   };
   const [verfied, setVerifed] = useState(false);

  // recaptcha function
   function onChange(value) {
     console.log("Captcha value:", value);
     setVerifed(true);
   }
   
  return (
      <>
         <header className="carousel-item1">
            <MyDiv className="container">
               <MyDiv className="row">
                  <MyDiv className="col-md-8 mob_arc banner-section">
                     <h1 className="banner-heading  mb-0">Contact Us</h1>
                     {/* <p className="banner-subheading font-weight-light mb-0">We are located in the heart of North Texas (city of Plano), where many large corporations  have <br /> their headquarters, just across Legacy West, which is a business and cultural district in Plano, Texas.</p> */}
                  </MyDiv>
                  <MyDiv className="col-md-4">
                  </MyDiv>
               </MyDiv>
            </MyDiv>
         </header>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
           <div class="carousel-inner">
              <div class="carousel-items active">
                 <img class="d-block w-100" src={contact_banner} alt="First slide" />
                 <div className="carousel-caption d-none d-md-block container cleft">
                        <h4 className="text-white mb-4">Corporate Headquarters</h4>
                        <p className="text-white lead mb-0">
                           5850 Granite Parkway, Suite 210<br /> Plano, TX 75024
                           <h6><span> <a href="mailto:info@nanban.com" className="mail-text text-white">info@nanban.com </a></span></h6>
                        </p>
                     </div>
                     {/* <div className="contact-content">
                        <h3 className="text-white mb-4">Contact Us</h3>
                        <h4 className="text-white mb-4">Corporate Headquarters</h4>
                        <p className="text-white lead mb-0">
                           5850 Granite Parkway, Suite 210<br /> Plano, TX 75024
                            <h6><span> <a href="mailto:info@nanban.com" className="mail-text text-white">info@nanban.com </a></span></h6>
                           <h6>
                              <span>
                                 <a href="tel:+18333736262" className="phone-number">+1.833.373.6262 </a></span>
                                 <span> <i className="fa fa-circle" style={{fontSize:10}}></i> </span><span> 
                                <a href="mailto:howdy@nanban.com" className="mail-text text-white">howdy@nanban.com </a></span>
                                </h6>
                      </p>
                     </div> */}
              </div>
           </div>
        </div>

        {/* <section>
           <img src={contact_banner} alt="Snow" style={{ width: '100%' }} />
           <div className="container">
           <div className="row">
           <div className="col-lg-12">
              <div class="bottom-right">
                 <h4 className="text-white mb-4">Corporate Headquarters</h4>
                 <p className="text-white lead mb-0">
                    5850 Granite Parkway, Suite 210<br /> Plano, TX 75024
                    <h6><span> <a href="mailto:info@nanban.com" className="mail-text text-white">info@nanban.com </a></span></h6>
                 </p>
              </div>
           </div>
           </div>
           </div>
        </section> */}


         {/* <section class="banner-below contact-bg  top-banner-relative" style={{ backgroundImage: "url(" + contact_banner + ")" }}>
         <MyDiv className="container ipad-container"> */}
          {/* <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Contact Us</li>
        </ul> */}
        {/* </MyDiv>
            <div className="container">
               <div className="row">
                  <div className="col-lg-7 text-right footer-menu"></div>
                  <div className="col-lg-5">
                     <div className="contact-content"> */}
                        {/* <h3 className="text-white mb-4">Contact Us</h3> */}
                        {/* <h4 className="text-white mb-4">Corporate Headquarters</h4>
                        <p className="text-white lead mb-0">
                           5850 Granite Parkway, Suite 210<br /> Plano, TX 75024
                            <h6><span> <a href="mailto:info@nanban.com" className="mail-text text-white">info@nanban.com </a></span></h6> */}
                           {/* <h6>
                              <span>
                                 <a href="tel:+18333736262" className="phone-number">+1.833.373.6262 </a></span>
                                 <span> <i className="fa fa-circle" style={{fontSize:10}}></i> </span><span> 
                                <a href="mailto:howdy@nanban.com" className="mail-text text-white">howdy@nanban.com </a></span>
                                </h6> */}
                        {/* </p>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}

         {/* <section class="contact-bg1 top-banner-relative" style={{ backgroundImage: "url(" + contact_banners + ")" }}>
         <MyDiv className="container ipad-container"> */}
          {/* <ul class="breadcrumb page-breadcrumb">
            <li><a href="/">Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Contact Us</li>
        </ul> */}
        {/* </MyDiv>
         </section> */}
         <section class="capital-section" id="test">

            <div class="container">

               <div class="row">

                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0">
                     <div class="row">
                        <form onSubmit={handleSubmit(onSubmit)} id='contactform' type="post">

                           <div class="col-md-12 col-sm-12 form-field">
                              <select onChange={handleChange} name='inquiry_topic'  {...register('inquiry_topic')}
            className={`inquiry_topic form-control ${errors.inquiry_topic ? 'is-invalid' : ''}`}>
                                 <option value="">Inquiry Topic</option>
                                 <option value="1">Media Inquiry</option>
                                 <option value="2">Entrepreneur Inquiry</option>
                                 <option value="3">Investor Inquiry</option>
                              </select>
                              <div className="invalid-feedback">{errors.inquiry_topic?.message}</div>
                           </div>

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
                            <div class="col-md-12 col-sm-12 form-field media-outlet">
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
                           <div class="col-sm-12 col-md-6  form-field deadline-class">
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
                           <div class="col-md-12 col-sm-12">
                           <ReCAPTCHA sitekey="6LdF5_wkAAAAAFL4Wg92xEUmlMJ0c8mKAR1BNqOh" onChange={onChange} />
                           </div>
                           <div class="col-md-12 col-sm-12 btn-footer text-right">
                              <button type='submit'  className={`btn banner-btn2 ${!verfied ? 'disabled':'enabled'}`}>Submit</button>
                           </div>
                        </form>
                     </div>
                  </div>

               </div>

            </div>

         </section>
      </>
   );
}
export default Contact;