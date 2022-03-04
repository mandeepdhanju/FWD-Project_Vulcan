import "../styles/styles.scss"
import Logo from './Logo';
import logo from '../images/vulcan-industries-logo.webp'
import machine1 from '../images/machine-01-300x274.png'
import flogo from '../images/icon-white-facebook.png'
import inlogo from '../images/icon-white-linkedin.png'
import phone1 from '../images/2048px-Circle-icons-phone.svg.png'

import waveblue from '../images//wave-blue-light.png'



function Footer() {
    return (     
      <footer id="footer">
        <div class="waveBlueLine">
          <img src={waveblue} alt="waveBlueLine" />
        </div>
        <div className="footer-content">
          <div class="footer-logo">
            <Logo />
          </div>
          <div class="footer-links">
            <ul class="footer-Ulist">

              <li class="footer-social facebook">
                <a href="#0" aria-label="Facebook">
                  <img src={flogo} alt="facebook" />
                </a>
              </li>
              <li class="footer-social linkedin">
                <a href="#1" aria-label="Linkdin">  
                  <img src={inlogo} alt="linkdin" />
                </a>
              </li>
              <li class="telephone">
                <a href="#0" aria-label="Call">
                  <i class="demo-icon icon-phone-circled">&#xe801;</i>
                  <span>+1 712-642-2755</span>
                </a>
              </li>                      
              <li class="contact-Us email">
                <a href="/contact" class="email">
                  <i class="demo-icon icon-mail">&#xe800;</i>
                  <span>Contact Us</span>
                </a>
              </li>
              <li className="copyright">
                <span>Copyright 2022. All Rights Reserved</span>
              </li>               
            </ul>
          </div>
        </div>
       
      </footer>
      )
  }

  
  export default Footer;
