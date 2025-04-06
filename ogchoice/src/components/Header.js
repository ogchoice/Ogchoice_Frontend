import React from 'react';
import './Header.css';

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About Us</button>
        <button onClick={() => setPage("product")}>Product</button>
      </div>
      <div className="header-center">OGCHOICE</div>
      <div className="header-right">
        <span>ogchoice.official@gmail.com</span>
        <button onClick={() => setPage("shop")}>Shop Now</button>
      </div>
    </header>
  );
};

export default Header;