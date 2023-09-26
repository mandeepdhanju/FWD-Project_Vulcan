import "../styles/styles.scss"

function MediaPlayer() {
    return (
        <div className="media-player">
            <div className="media-container">
                <div className="video-content">
                    <div className="video-container">
                    <iframe className="video" src="https://player.vimeo.com/video/183929811" ></iframe>
                    {/* <iframe className="video" src="https://www.youtube.com/watch?v=XQ4ABjkK4V4" ></iframe> */}
                   
                    </div>
                </div>
            </div>
        </div>
    )
}




export default MediaPlayer;