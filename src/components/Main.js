import "../styles/styles.scss"

import machine1 from '../images/machine-01-300x274.png'
import machine2 from '../images/machine-02-300x274.png'
import machine3 from '../images/machine-03-300x274.png'
import machine4 from '../images/machine-04-300x274.png'
import bgimage from '../images/bg-section-about-us.jpg'
import mapimage from '../images/map.jpg'

//import bg from '../images/machine-04-300x274.png'


function Main() {
    return (

        <div class="col-lg-12">   

            <div class="text">
                <h2>Customize per order</h2>
                <p>Just as no two treatment plants are the same, no two of our screening, grit handling or sludge thickening products are either. We’ll help determine exactly what you need.</p>       
            </div>

            <div class="row">
					<div className="machine-container machine1">
						<div class="img-holder">
							<img width="300" height="274" src={machine1}></img>
						</div>
                        <div className="machine-text">
                            <h3>Screening</h3>
                        </div>
                    </div>

                    <div className="machine-container machine2">
                        <div class="img-holder">
							<img  src={machine2}></img>
						</div>
                        <div className="machine-text">
                            <h3>Screenings<br />Handling</h3>
                        </div>
                    </div>

                    <div className="machine-container machine3">
                        <div class="img-holder">
                            <img  src={machine3} alt="Machine"></img>                                      
                        </div>
                        <div className="machine-text">
                            <h3>Grit<br />Handling</h3>
         
                        </div>
                    </div>

                    <div className="machine-container machine4">
                        <div class="img-holder">
							<img  src={machine4}></img>
						</div>
                        <div className="machine-text">
                            <h3>Sludge<br />Thickening</h3>
                        </div>
                    </div>               
            </div>
      
            <div class="history-info">
                <img src={bgimage}></img>
            </div>
            
            <div class="video-panel">
                <div class="embed-container">
                    <iframe src="https://player.vimeo.com/video/183929811"></iframe>
                </div>
            </div>

            <form action="#" class="sign-up">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <label for="newsletter">Stay in the know. Sign up for our newsletter.</label>
                            <div class="fields-row clearfix">
                                <button type="submit" class="btn btn-default">SUBMIT</button>
                                <div class="input-holder newsletter-input">
                                    <input id="newsletter" type="text" class="form-control" placeholder="Enter your email"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
                
            <div class="location">
                    <div class="img-frame">
                        <img src={mapimage}></img>
                    </div>                
                    <div class="caption">
                        <h2>Installed in a city near you</h2>
                        <a href='https://vulcanindustries.com/contact/'>Find A Vulcan Install</a>
                    </div>
            </div>

            <div class="contact-us">
                <div class="holder">
                    <h2>Ready to spec vulcan for your project?</h2>
                    <a href="https://vulcanindustries.com/contact/" class="btn btn-default" >contact us</a>
                </div>
            </div>
            
        </div>
        
      )
  }
  
  export default Main;
