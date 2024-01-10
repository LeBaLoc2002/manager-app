import React from 'react';
import './Overlay.scss';

const Overlay = ({ showOverlay, onClick }) => {
  return showOverlay ? <div className="overlay" onClick={onClick}></div> : null;
};

export default Overlay;
