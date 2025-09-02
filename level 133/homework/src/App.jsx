import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Nav from "./components/Nav";

const App = () => {
    
    
    return (
        <>
        <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </>
    );

  
}

export default App
