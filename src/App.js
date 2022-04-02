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


function App() {
  return (
    <body>
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Sliders />
        <Main />
        <About />
        <MediaPlayer />
        <Newsletter />
        <MoreInfo />
        <Footer />
      </div>
    </BrowserRouter>
    </body>
  );
}

export default App;
