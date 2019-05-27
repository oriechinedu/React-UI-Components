import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'

function cardContainer() {
  return (
    <div className="card-container">
      <CardBanner />
      <CardContent />
    </div>
  )
}

export default cardContainer
