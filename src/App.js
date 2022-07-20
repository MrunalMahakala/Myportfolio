
import './App.css';
import Nav from './components/nav'
import Home from './components/Home';
import Services from './components/services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/portfolio';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Services/> 
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
