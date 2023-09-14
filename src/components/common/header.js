import React from "react";
import toplogo from '../../assets/img/logo.svg';
import {MyDiv} from '../common/Common';
import { BrowserRouter as Router, Route, Link, NavLink  } from 'react-router-dom';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
   
  <nav className="navbar  bg-white navbar-expand-lg text-uppercase fixed-top" id="mainNav">
  <div className="container ipad-container">
  <NavLink  className="navbar-brand"  id="nav_story" activeClassName='active'  to="/" >
  <img className="logo banner-img-logo header-logo" src={toplogo} alt="top-logo"/>
    </NavLink>
      <button className="navbar-toggler text-uppercase font-weight-bold  text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars ms-1"></i> 
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">

         
        <ul className="navbar-nav ms-auto">

       


        {/*<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> About Us </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink  className="dropdown-item"   activeClassName='active'  to="/story" >
                      OUR STORY
                    </NavLink > 
                    <NavLink className="dropdown-item"  activeClassName='active'   to="/team"   >
                      Team
                   </NavLink>
                   <NavLink className="dropdown-item"  activeClassName='active'   to="/media"   >
                     NEWS
                   </NavLink>
 
                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="http://google.com">Google</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Submenu</a></li>
                            <li><a class="dropdown-item" href="#">Submenu0</a></li>
                            <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                    <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                </ul>
                            </li>
                            <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                                    <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                                </ul>
                            </li>
                        </ul>
                      </li>
                </ul>
            </li>*/}
         {/* <li class="nav-item mx-0 mx-lg-1 dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About US
            </a>
            <div class="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
              <NavLink  className="dropdown-item"   activeClassName='active'  to="/story" >
                OUR STORY
              </NavLink > 
              <NavLink className="dropdown-item"  activeClassName='active'   to="/team"   >
                Team
              </NavLink>
              <NavLink className="dropdown-item"  activeClassName='active'   to="/media"   >
              NEWS
              </NavLink>
            </div>
           </li>*/}
          {/*   <li className="nav-item mx-0 mx-lg-1">      
         
           <NavLink  className="nav-link py-3 px-0 px-lg-3 rounded"   activeClassName='active'  to="/story" >
                STORY
              </NavLink > 
          </li>*/}
             <li class="nav-item mx-0 mx-lg-1 dropdown">
              <a class="nav-link dropdown-toggle"   activeClassName='active'  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink  className="dropdown-item"   activeClassName='active'  to="/story" >
                  OUR STORY
                </NavLink > 
                <NavLink className="dropdown-item"  activeClassName='active'   to="/team"   >
                  Team
                </NavLink>
                {/* <NavLink className="dropdown-item"  activeClassName='active'   to="/media"   >
                  NEWS
                </NavLink> */}
                <NavLink className="dropdown-item"  activeClassName='active'   to="/news"   >
                News
                </NavLink>
                
                {/* <NavLink className="dropdown-item"  activeClassName='active'   to="/press"   >
                Press Room
                </NavLink> */}
              </div>
            </li>          
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded"   activeClassName='active'    to="/verticals" >
                VERTICALS
              </NavLink>
            </li>
             {/* <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded"   activeClassName='active'    to="/nanbangulf" >
                NANBAN GULF
              </NavLink>
            </li>             */}
           {/*  <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded"  activeClassName='active'   to="/team"   >
                Team
              </NavLink>
            </li>*/}
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded"  activeClassName='active'  to="/catalyst"  >
                CATALYST
              </NavLink>
            </li>
            
            {/* <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded"  activeClassName='active'  to="/press"  >
                PRESS ROOM
              </NavLink>
            </li> */}
            
            {/* <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded"   activeClassName='active' to="/media" >
                   Media
              </NavLink>
            </li>              */}

            <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded"   activeClassName='active' to="/contact" >
                   CONTACT
              </NavLink>
            </li>                               
          </ul>
      </div>
  </div>
</nav>

);

export default Header;