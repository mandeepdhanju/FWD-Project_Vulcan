//import logo from './logo.svg';
//import Nav from './components/Nav';
import Header from './components/Header';
import './styles/styles.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sliders from './components/Sliders';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="top-banner-section">
           <Header />
           <Sliders />
        </div>

        <div className='main-banner-section'>
          <Main />
          <Footer />
        </div>
       
        {/* <Routes>
          <Route path="/">
            
          </Route>
        </Routes> */}
       
      </div>
    </BrowserRouter>
  );
}

export default App;
