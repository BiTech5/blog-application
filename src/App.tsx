import Footer from "./components/footer";
import Header from "./components/header"
import Contact from "./pages/contact";
import Home from "./pages/home";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <Header/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App;
