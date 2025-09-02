import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Nav from './components/Nav.jsx';

const App = () => {


  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );




}

export default App
