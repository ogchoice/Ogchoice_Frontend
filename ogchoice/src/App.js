import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Shop from './pages/Shop';
import './App.css';

function App() {
  const [page, setPage] = useState("home");

  let Content;
  switch (page) {
    case "about":
      Content = <About />;
      break;
    case "product":
      Content = <Product />;
      break;
    case "shop":
      Content = <Shop />;
      break;
    case "home":
    default:
      Content = <Home />;
      break;
  }

  return (
    <div className="app">
      <Header setPage={setPage} />
      <main className="main">{Content}</main>
      <Footer />
    </div>
  );
}

export default App;