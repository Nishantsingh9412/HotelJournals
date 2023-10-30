import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import MidSection from './components/MidSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <MidSection />
      <Footer /> 
    </div>

  );
}

export default App;
