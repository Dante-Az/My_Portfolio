import { useEffect, useState } from 'react';
import './sass/main.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Router from './components/Router/Router';

function App() {

  const [loader, setLoader] = useState(true);

  useEffect (() => {
    setTimeout(() => {
      setLoader(false);
    }, 8000);
  }, []);

  return loader ? (
    <Loader/>
  ) : (
    <div className="App">
      
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
