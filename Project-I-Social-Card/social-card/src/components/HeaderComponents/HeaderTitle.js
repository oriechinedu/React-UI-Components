import React from 'react';
import './Header.css';

function headerTitle() {
  const date = new Date();
  
  return (
    <h4 className="header-title">Lambda School <span> @LambdaSchool <span className="dot">&#8226;</span> 26 jan</span></h4>
  )
}

export default headerTitle;