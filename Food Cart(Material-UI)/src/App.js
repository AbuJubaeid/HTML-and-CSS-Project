import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import PageNotFound from "./Pages/PageNotFound";


function App() {
  return (
   <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='*' element={<PageNotFound/>}/>
       </Routes>
   </BrowserRouter>
  );
}

export default App;
