//import logo from './logo.svg';
//import Nav from './components/Nav';
import Header from './components/Header';
import './styles/styles.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sliders from './components/Sliders';
import Main from './components/Main';
import About from './components/About';
import MediaPlayer from './components/MediaPlayer';
import Newsletter from './components/Newsletter';
import MoreInfo from './components/Moreinfo';
import Footer from './components/Footer';
import Blinds from './components/Blinds';
import AboutUs from './components/AboutUs';
import Doors from './components/Doors';
import Screens from './components/Screens';
import {useState} from "react";
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <body>
    <BrowserRouter>
    <div>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Home />
       {/* <Header />
        <Sliders />
        <Main /> 
        <About />
        <MediaPlayer />
        <Newsletter />
        <MoreInfo /> */}
        <Footer />
       
    </div>
      <div className='wrapper'>
        <Routes>
        <Route path="header" element={<Header />} />
        <Route path="slider" element={<Sliders />} />
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="mediaPlayer" element={<MediaPlayer />} />
        <Route path="newsLetter" element={<Newsletter />} />
        <Route path="moreInfo" element={<MoreInfo />} />
        <Route path="footer" element={<Footer />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="blinds" element={<Blinds />} />
        <Route path="doors" element={<Doors />} />
        <Route path="screens" element={<Screens />} />
        <Route path="contact" element={<Contact />} />
        </Routes>
       
      </div>
    </BrowserRouter>
    </body>
  );
}

export default App;
