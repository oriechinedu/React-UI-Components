import React from 'react';
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
import './Header.css';

function headerContainer() {
  return (
    <div className="header">
      <ImageThumbnail />
      <HeaderContent />
    </div>
  )
}

export default headerContainer;