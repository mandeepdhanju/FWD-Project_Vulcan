import React, { useState } from "react";
import "../styles/styles.scss";

import Header from "./Header";
import Sliders from "./Sliders";
import Main from "./Main";
import About from "./About";
import MediaPlayer from "./MediaPlayer";
import Newsletter from "./Newsletter";
import MoreInfo from "./Moreinfo";

// import MoreInfo from './components/Moreinfo';


function Home(){
    return (

    <div className="home">
         <Header />
         <Sliders />
         <Main /> 
         <About />
         <MediaPlayer />
         <Newsletter />
         <MoreInfo /> 
    
     </div>
       

      
    );
}

export default Home;