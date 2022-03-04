import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Logo from './Logo';
//import machine from '../images/header-slider-img-01.jpg'
import "../styles/styles.scss"
import Hamburger from './Hamburger';

function Header() {



    return (
        <header>
          {/* <h1><Link to="/">Vulcan</Link></h1> */}
          {/* <img src={machine} alt="Water machine" /> */}
          <Logo />
          <Hamburger />
          <Nav />
      
          

        </header>
      )
  }
  
  export default Header;