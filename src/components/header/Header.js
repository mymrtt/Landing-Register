import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <h2 className="Header_title">YoloJs</h2>
      <div className="Header_links">
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Help</a>
      </div>
    </div>
  );
}

export default Header;
