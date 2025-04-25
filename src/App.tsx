import Footer from "./components/footer";
import Header from "./components/header"
import Contact from "./pages/contact";
import Home from "./pages/home";
import { Routes, Route } from 'react-router-dom';
import Detail from "./pages/detail";
import About from "./pages/about";
import { ThemeProvider } from "./components/ThemeProvider";
function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;
