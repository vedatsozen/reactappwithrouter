import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Tutorials from "./pages/Tutorials";
import References from "./pages/References";
import Contact from "./pages/Contact";
import './App.css';


function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="references" element={<References />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
