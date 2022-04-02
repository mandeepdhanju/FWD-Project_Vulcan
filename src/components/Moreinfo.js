import "../styles/styles.scss"
import mapimage from '../images/map.jpg'

function MoreInfo() {
    return(
        <div className='more-info'>
            <div className='find-vulcan'>
                <h2>INSTALLED IN A CITY NEAR YOU</h2>
                <a href="#" className="more-info-btn">FIND A VULCAN INSTALL</a>
            </div>
            <div className="contact">
                <h2>READY TO SPEC VULCAN FOR YOUR PROJECT?</h2>
                <a href="#" className="contact-btn">CONTACT US</a>
            </div>
        </div>
    )
}

export default MoreInfo;