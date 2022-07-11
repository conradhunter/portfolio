
import './App.css';
import Nav from './Components/Navigation Bar/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home-page/Home';
import About from './Pages/about-page/About';
import Projects from './Pages/projects-page/Projects';
import Blog from './Pages/blog-page/Blog';
import Contact from './Pages/contact-page/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
