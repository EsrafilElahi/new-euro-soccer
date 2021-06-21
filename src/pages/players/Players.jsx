import React, { useState, useEffect } from 'react'
import './Players.css'

import messi from '../../img/messi.jpg'
import ronaldo from '../../img/ronaldo.jpg'
import zlatan from '../../img/zlatan.jpg'
import reus from '../../img/reus.jpg'
import pogba from '../../img/pogba.jpg'
import neymar from '../../img/neymar.jpg'
import xhaka from '../../img/xhaka.jpg'
import griezman from '../../img/griezman.jpg'
import dybala from '../../img/dybala.jpg'


import Card from '../../components/cards/Card'


function Players() {
  const [classes, setClasses] = useState({
    text: 'large',
    button: 'large',
    card: 'large'
  })

  const sizeText = () => {
    if (window.innerWidth < 540) {
      setClasses({ text: 'small', button: 'small', card: 'small' })
    } else {
      setClasses({ text: 'large', button: 'large', card: 'large' })
    }
  }

  window.addEventListener('resize', sizeText)

  useEffect(() => {
    sizeText()
  }, [])

  return (
    <div className='players-container'>
      <div className='page-title'>
        <h1>PLAYERS PAGE</h1>
        <hr className='hr' />
      </div>
      <div className='card-main'>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={messi}
            alt={'MESSI'}
            TeamName={'MESSI'}
            League={'Barca'}
          />
          <Card
            src={reus}
            alt={'REUS'}
            TeamName={'REUS'}
            League={'Dortmund'}
          />
          <Card
            src={ronaldo}
            alt={'RONALDO'}
            TeamName={'RONALDO'}
            League={'Juve'}
          />
        </div>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={pogba}
            alt={'POGBA'}
            TeamName={'POGBA'}
            League={'Man U'}
          />
          <Card
            src={xhaka}
            alt={'XHAKA'}
            TeamName={'XHAKA'}
            League={'Arsenal'}
          />
          <Card
            src={griezman}
            alt={'GRIEZMAN'}
            TeamName={'GRIEZMAN'}
            League={'Barcelona'}
          />
        </div>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={dybala}
            alt={'DYBALA'}
            TeamName={'DYBALA'}
            League={'Juventus'}
          />
          <Card
            src={neymar}
            alt={'NEYMAR'}
            TeamName={'NEYMAR'}
            League={'PSG'}
          />
          <Card
            src={zlatan}
            alt={'ZLATAN'}
            TeamName={'IBRAHIMOVIC'}
            League={'Ac Milan'}
          />
        </div>
      </div>
    </div>
  )
}

export default Players
