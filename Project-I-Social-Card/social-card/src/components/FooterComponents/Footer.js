import React from 'react';
import './Footer.css';


function footer() {
  return (
    <footer className="footer">
      <ul>
        <li> <i className="far fa-comment"></i></li>
        <li> <i className="fas fa-retweet"></i> <span> 6</span></li>
        <li> <i className="far fa-heart"></i> <span> 4</span></li>
        <li><i className="far fa-envelope"></i></li>
      </ul>
    </footer>
  )
}

export default footer;