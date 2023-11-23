import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'

import Skills from './components/Skills.js'
import Contect from './components/Contect.js'
function App() {
  return (
    <div>
     
     <BrowserRouter>
      <Navbar/>  
      <Routes>
        <Route path="/porthome" element={<Home />}></Route>
         <Route path="/skills" element={<Skills />}></Route> 
        <Route path="/contact" element={<Contect />}></Route> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
