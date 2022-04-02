import "../styles/styles.scss"
import mapimage from '../images/map.jpg'

function MoreInfo() {
    return(
        <div className='more-info'>
            <div className='find-vulcan'>
                <div className='find-img-holder'>
                    <div className='find-img-display'>
                        <img className="find-img" src={mapimage} />
                    </div>
                </div>
                <div className="find-vulcan-content">
                    <div className="find-vulcan-caption">
                        <div className="find-vulcan-box">
                            <h2>INSTALLED IN A CITY NEAR YOU</h2>
                            <a href="#" className="more-info-btn">FIND A VULCAN INSTALL</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="contact-box">
                    <div className="contact-content">
                        <h2>READY TO SPEC VULCAN FOR YOUR PROJECT?</h2>
                        <a href="#" className="contact-btn">CONTACT US</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;