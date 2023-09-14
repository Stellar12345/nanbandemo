import React from "react";
import orgin from '../../assets/img/white-logo.png';
import { BrowserRouter as Router, Route, Link, NavLink  } from 'react-router-dom';
// The Header creates links that can be used to navigate
// between routes.
const Footer = () => (
    <>
    <footer className="footer">
    
    <div className="container">
        <div className="row">
            <div className="col-lg-4 footer-content">
                <img className="footer-logo" src={orgin} alt="Footer Logo"/>
                <h4 className="mb-4">Corporate Headquarters</h4>
                <div className="lead mb-0">
                    5850 Granite Parkway, Suite 210<br/> Plano, TX 75024
                    {/* <h6><span> <a href="mailto:info@nanban.com" className="mail-text">info@nanban.com </a></span></h6> */}
                </div>
            </div>
            <div className="col-lg-8  col-sm-12 text-right footer-menu">
                   <ul className="footer-nav ms-auto">
                   <li class="nav-item dropdown footer-item mx-0 mx-lg-1">
                    <a class="dropdown-toggle footer-link "   activeClassName='active'  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About US</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink  className="dropdown-item"   activeClassName='active'  to="/story" >
                                Our Story
                            </NavLink > 
                            <NavLink className="dropdown-item"  activeClassName='active'   to="/team"   >
                                Team
                            </NavLink>
                            {/* <NavLink className="dropdown-item"  activeClassName='active'   to="/media"   >
                                News
                            </NavLink> */}
                            <NavLink className="dropdown-item"  activeClassName='active'   to="/news"   >
                            News
                            </NavLink>
                            {/* <NavLink className="dropdown-item"  activeClassName='active'   to="/press"   >
                            Press Room
                            </NavLink> */}
                            </div>
                        </li>       
                   <li className="footer-item mx-0 mx-lg-1"><a className="footer-link px-lg-3" href="/verticals">Verticals</a></li>
                   <li className="footer-item mx-0 mx-lg-1"><a className="footer-link px-lg-3" href="/catalyst">Catalyst</a></li>
                   <li className="footer-item mx-0 mx-lg-1"><a className="footer-link px-lg-3" href="/contact">Contact</a></li>                
                        {/* <li className="footer-item mx-0 mx-lg-1"><a className="footer-link" href="/story">Story</a></li> */}

                        

                        {/* <li className="footer-item mx-0 mx-lg-1"><a className="footer-link" href="/nanbangulf">Nanban Gulf</a></li> */}
                        {/* <li className="footer-item mx-0 mx-lg-1"><a className="footer-link" href="/story">Our Story</a></li>
                        <li className="footer-item mx-0 mx-lg-1"><a className="footer-link" href="/team">Team</a></li> */}
                        {/* <li className="footer-item mx-0 mx-lg-1"><a className="footer-link" href="/media">News</a></li> */}
                        {/* <li className="footer-item mx-0 mx-lg-1"><a className="footer-link" href="/pressroom">Press Room</a></li> */}       
                        {/* <li className="footer-item mx-0 mx-lg-1"><a className="footer-link" href="/team">About Us</a></li> */}
                        {/*<li className="footer-item mx-0 mx-lg-1"><a className="footer-link" href="/media">News</a></li>*/}
                       
                       
                                   

                    </ul>
            </div>
        </div>
    </div>
    <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <h6 className="copyright-text">Copyright © 2023, Nanban Group of Companies. All rights reserved</h6>
                    </div>
                    <div className="col-lg-4 text-right social">
                        {/* <div className="col-sm-3 col-md-3 col-lg-3 text-right social"> */}
                            {/* <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/nanbangroup" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>	 */}
                        {/* </div> */}
                        {/* <div className="col-sm-3 col-md-3 col-lg-3 text-right social"> */}
                            {/* <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/nanbangroup" target="_blank"><i className="fab fa-fw fa-facebook"></i></a>	 */}
                        {/* </div>                        
                        <div className="col-sm-3 col-md-3 col-lg-3 text-right social"> */}
                            {/* <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/nanbangroup/" target="_blank"><i className="fab fa-fw fa-instagram"></i></a>	 */}
                        {/* </div>
                        <div className=" col-sm-3 col-md-3 col-lg-3 text-right social"> */}
                            {/* <a className="btn btn-outline-light btn-social" href="https://twitter.com/nanban_group" target="_blank"><i className="fab fa-fw fa-twitter"></i></a>	 */}
                        {/* </div> */}
                    </div>
                </div>
            </div>  
</footer>

</>
);

export default Footer;