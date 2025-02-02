import Hero from './Components/Hero';
import Order from './Components/Order';
import Products from './Components/Products';
import About from './Components/About';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Chatbot from './Components/chatbot/Chatbot';
import './App.css';

const Homepage = () => {
    return (
      <div>
        <div id="home">
          <Hero />
        </div>
        <div id="order">
          <Order />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="about">
          <About />
        </div>
        <Faq />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
        <Chatbot />
      </div>
    );
  };
  
  export default Homepage;