import Hero from './Components/Hero';
import Row from './Components/Row';
import Order from './Components/Order';
import Products from './Components/Products';
import About from './Components/About';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="Main">
      <Hero/>
      <Row />
      <Order />
      <Products />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
