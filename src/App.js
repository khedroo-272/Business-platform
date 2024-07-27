// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import WhatsappChat from "./components/WhatsappChat";
const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <WhatsappChat />
    </Router>
  );
};

export default App;
