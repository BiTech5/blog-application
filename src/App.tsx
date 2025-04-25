import Footer from "./components/footer";
import Header from "./components/header"
import Contact from "./pages/contact";
import Home from "./pages/home";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/about";
function App() {
  return (
    <>
     <Header/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App;
