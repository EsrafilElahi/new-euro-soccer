import React from 'react'
import './Card.css'

function Card ({ src, alt, TeamName, League }) {
  return (
    <div className='card-container'>
      <img className='card-img' src={src} alt={alt} />
      <div className='card-body'>
        <h3 className='card-title'>{TeamName}</h3>
        <p className='card-detail'>{League}</p>
      </div>
    </div>
  )
}

export default Card
