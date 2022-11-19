import Header from './componentes/Header';
import Banner from './componentes/Banner';
import MainContainer from './componentes/MainContainer';
import Estructure from './componentes/Estructure';
import Footer from './componentes/Footer';
import { useState } from "react";

import './styles/App.sass';

function App() {
  const [ darkmode, setDarkmode  ] = useState(false);

  const alterTheme = () => {
    setDarkmode(!darkmode);
  }


  return (
    <div className={darkmode ? 'dark__mode' : 'light__mode' }>
      <div className="App">
        <aside>
          <button onClick={alterTheme}  type='submit' className={darkmode ? 'dark__mode' : 'light__mode' }>
            <img src={darkmode ? '/img/moon.png' : '/img/sun.png'} alt="" className='image__button'/>
            {darkmode ? 'Dark' : 'light'}
          </button> 
        </aside>
        <Header />
        <Banner />
        <MainContainer />
        <Estructure />
        <Footer />
      </div>
    </div>
  )
}

export default App
