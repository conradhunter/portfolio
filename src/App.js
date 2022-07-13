
import './App.css';
import Nav from './Components/Navigation Bar/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home-page/Home';
import About from './Pages/about-page/About';
import Blog from './Pages/blog-page/Blog';
import Contact from './Pages/contact-page/Contact';
import Footer from './Components/Footer/Footer';
import ShredBlog from './Pages/projects-overview/Shred-Blog';
import FuelEconomyCalculator from './Pages/projects-overview/FuelEconomyCalculator';
import WordleClone from './Pages/projects-overview/WordleClone';
import ClientEPortfolio from './Pages/projects-overview/ClientEPortfolio';
import SkinGymSylvania from './Pages/projects-overview/SkinGymSylvania';
import JavaScriptCalculator from './Pages/projects-overview/JavaScriptCalculator';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />

          {/* PROJECTS OVERVIEW PAGES */}
          <Route exact path='/blog-overview' element={<ShredBlog/>} />
          <Route exact path='/javascript-calculator' element={<JavaScriptCalculator/>} />
          <Route exact path='/fuel-economy-calculator' element={<FuelEconomyCalculator/>} />
          <Route exact path='/skin-gym-sylvania' element={<SkinGymSylvania/>} />
          <Route exact path='/wordle-clone' element={<WordleClone/>} />
          <Route exact path='/client-eportfolio' element={<ClientEPortfolio/>} />



        </Routes>
      <Footer />
    </div>
  );
}

export default App;
