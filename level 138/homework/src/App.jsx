import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Nav from "./components/Nav";

const App = () => {

  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<Notes />} />
      </Routes>
    </>
  );


}

export default App
