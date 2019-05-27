import React from 'react';
import HeaderText from './HeaderText'
import HeaderTitle from './HeaderTitle'

import './Header.css';

function headerContent() {
  return (
    <div className="header-content">
      <HeaderTitle />
      <HeaderText />
    </div>
  )
}

export default headerContent;
