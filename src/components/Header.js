import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Logo from './Logo';
import logo from '../images/vulcan-industries-logo.webp'
//import machine from '../images/header-slider-img-01.jpg'
import "../styles/styles.scss"
import Hamburger from './Hamburger';


// <Logo />
// <Hamburger />
// <Nav />


function Header() {
    return (
        <header>
          <div className='header-container'>
            <div className='header-contact'>
              <div className='header-contact-items'>
                <div className='header-contact-links'>
                  <ul className='header-contact-list'>
                    <li>INSTALL MAP</li>
                    <li>PRODUCT LITERATUE</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='header-content'>
              <div className='header-logo'>
                <a href='#' className='vulcan-logo' style={{backgroundImage: `url(${logo})`}}>VULCAN</a>
              </div>
              <div className='nav-items'>
                <Hamburger />
                <div className="menu-desktop">
                  <ul className="menu-list-desktop">
                    <li>
                      ABOUT
                    </li>
                    <li>
                      PRODUCTS
                    </li>
                    <li>
                      SERVICES
                    </li>
                    <li>
                      PARTS
                    </li>
                    <li>
                      NEWS
                    </li>
                    <li>
                      CONTACT
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>  
        </header>
      )
  }
  
  export default Header;