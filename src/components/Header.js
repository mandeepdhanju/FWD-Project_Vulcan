import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Logo from './Logo';
import logo from '../images/vulcan-industries-logo.png'
import logo2 from '../images/logo-2.png'
import logo1 from '../images/logo-1.jpg'
//import machine from '../images/header-slider-img-01.jpg'
import "../styles/styles.scss"
import Hamburger from './Hamburger';

// import Home from '../components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Blinds from './components/Blinds';
// import Screens from './components/Screens';
// import Doors from './components/Doors';

// <Logo />
// <Hamburger />
// <Nav />
function Header({menuOpen, setMenuOpen}) {
    return (
        <header>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"/>  */}
          <div className='header-container'>
            <div className='header-contact'>
              <div className='header-contact-items'>
                <div className='header-contact-links'>
                  <ul className='header-contact-list'>
                    <div>
                      <li>INSTALL WINDOWS</li>
                      <li>PRODUCT DETAILS</li>
                    </div>
                    <li><a href='#' className='vulcan-logo' style={{backgroundImage: `url(${logo1})`}}>MEGASTARSSCREENS</a></li>
                    <div>
                      <li>+1 712-642-2755</li>
                      <li>Contact Us</li>
                      {/* <li><Link to="/contact">Contact Me</Link></li> */}
                      {/* <li><a href="contact">Contact</a></li> */}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className='header-content'>
              {/* <div className='header-logo'>
                <a href='#' className='vulcan-logo' style={{backgroundImage: `url(${logo2})`}}>MEGASTARSSCREENS</a>
              </div> */}
              <div className='nav-items'>
                <Hamburger />
          
                <div className="menu-desktop">
                  <ul className="menu-list-desktop"onClick={() =>setMenuOpen} >
                  
                       <Link to="home"><li>HOME</li></Link>
                       <Link to="aboutUs"><li>ABOUT</li></Link>
                      {/* <li className='blinds' onClick={() =>setMenuOpen(!menuOpen)}>BLINDS</li>                  */}
                       <Link to="blinds"><li>BLINDS</li></Link>
                       <Link to="screens"><li>SCREENS</li></Link>
                       <Link to="doors"><li>DOORS</li></Link>
                       <Link to="contact"><li>CONTACT</li></Link>                   
                  </ul>
              </div>
              
              {/* {menuOpen &&( */}
                <div className='blindsList' onClick={() =>setMenuOpen}>
                  <ul>Zebra Blinds</ul>
                  <ul>Roller Shades</ul>
                  <ul>Solar Shades</ul>
                  <ul>Vieana Shades</ul>
                  <ul>Honey Comb Shades</ul>
                  <ul>Faux Wood Blinds</ul>
                </div>          
           {/* )}  */}
              
            </div>
          </div>
        </div>  
        </header>
      )
  }
  
  export default Header;