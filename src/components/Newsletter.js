import "../styles/styles.scss"

function Newsletter() {
    return(
        <form className="newsletter">
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <label htmlFor="signup-input">Stay in the know. Sign up for our newsletter.</label>
                    <div>
                        <button className="submit-btn">SUBMIT</button>
                    </div>
                    <div className="newsletter-inputs">
                        <input id="signup-input" name="signup-input" type="text" className="newsletter-input" placeholder="Enter your email" />
                    </div>
                    
                </div>
            </div>
        </form>
    )
}

export default Newsletter;