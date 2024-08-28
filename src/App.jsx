import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header.jsx";
import Major from "./pages/major";
import Home from "./pages/home";
import Footer from "./Components/footer";
import Contact from "./Components/contact.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Major" element={<Major />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
