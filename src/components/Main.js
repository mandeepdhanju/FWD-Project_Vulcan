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

        <div className="products">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="text">
                            <h2>CUSTOMIZED PER ORDER</h2>
                            <p>Just as no two treatment plants are the same, no two of our screening, grit handling or sludge thickening products are either. We’ll help determine exactly what you need.</p>
                        </div>
                        <div className="row">
                            <div className="column item">
                                <div className="home-product">
                                    <div className="img-holder">
                                        <img className="product-img" src={machine1} />
                                    </div>
                                    <div className="detail">
                                        <h3 className="product-title">SCREENING</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="column item">
                                <div className="home-product">
                                    <div className="img-holder">
                                        <img className="product-img" src={machine2} />
                                    </div>
                                    <div className="detail">
                                        <h3 className="product-title">SCREENING HANDLING</h3>
                                    </div>
                                </div>

                            </div>


                            <div className="column item">
                                <div className="home-product">
                                    <div className="img-holder">
                                        <img className="product-img" src={machine3} />
                                    </div>
                                    <div className="detail">
                                        <h3 className="product-title">GRIT HANDLING</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
      
            
      )
  }
  
  export default Main;
