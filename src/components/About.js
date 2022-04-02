import "../styles/styles.scss"
import bgimage from '../images/bg-section-about-us.jpg'

function About() {
    return (
        <div className="about-us" style={{ backgroundImage: `url(${bgimage})` }}>
            <div className="about-us-container">
                <div className="about-us-column">
                    <h2>DELIVERING CLEAN, SAFE WATER SINCE 1975. REFRESHING INDEED.</h2>
                    <div className="text">
                        <p>Vulcan wastewater screening equitment has played a vital role
                            in protecting the water supply of more than 900 cities and 
                            communities throughout the world.
                        </p>
                    </div>
                    <a href="#" className="btn-primary">ABOUT US</a>
                </div>
            </div>
        </div>
    )
}

export default About;