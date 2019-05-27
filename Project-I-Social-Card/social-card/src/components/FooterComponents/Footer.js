import React from 'react';
import Icon from './Icon'
import './Footer.css';


function footer() {
  return (
    <footer className="footer">
      <ul>
        <Icon iconName="far fa-comment" />
        <Icon iconName="fas fa-retweet"><span> 6</span></Icon>
        <Icon iconName="far fa-heart"><span> 4</span></Icon>
        <Icon iconName="far fa-envelope" />
      </ul>
    </footer>
  )
}

export default footer;