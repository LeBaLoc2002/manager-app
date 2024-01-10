import React from 'react';
import './Overlay.scss';

function Overlay({ isOpen, toggle }) {
  return isOpen ? <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggle}></div> : null;
}

export default Overlay;
