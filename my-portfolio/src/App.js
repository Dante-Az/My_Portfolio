import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Router from './components/Router/Router';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
