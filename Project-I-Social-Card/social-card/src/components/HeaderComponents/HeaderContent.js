import React from 'react';
import HeaderText from './HeaderText'
import HeaderTitle from './HeaderTitle'

function headerContent() {
  return (
    <div className="header-content">
      <HeaderTitle />
      <HeaderText />
    </div>
  )
}

export default headerContent;
