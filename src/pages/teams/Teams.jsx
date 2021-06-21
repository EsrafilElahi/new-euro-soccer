import React, { useState, useEffect } from 'react'
import './Teams.css'

import arsenal from '../../img/arsenal.jpg'
import barca from '../../img/barca.jpg'
import real from '../../img/real madrid.jpg'
import manc from '../../img/man city.jpg'
import manu from '../../img/man u.jpg'
import liver from '../../img/liverpool.jpg'
import chelsea from '../../img/chelsea.jpg'
import inter from '../../img/inter.jpg'
import milan from '../../img/milan.jpg'
import athletic from '../../img/athletic.png'
import tottenham from '../../img/tottenham.jpg'
import juve from '../../img/juventus.jpg'

import Card from '../../components/cards/Card'


function Teams() {
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
    <div className='teams-container'>
      <div className='page-title'>
        <h1>TEAMS PAGE</h1>
        <hr className='hr' />
      </div>
      <div className='card-main'>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={manc}
            alt={'MAN CITY'}
            TeamName={'MAN CITY'}
            League={'Premier League'}
          />
          <Card
            src={manu}
            alt={'MAN UNTD'}
            TeamName={'MAN UNTD'}
            League={'Premier League'}
          />
          <Card
            src={barca}
            alt={'BARCELONA'}
            TeamName={'BARCELONA'}
            League={'Laliga'}
          />
        </div>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={inter}
            alt={'INTER MILAN'}
            TeamName={'INTER MILAN'}
            League={'Serie A'}
          />
          <Card
            src={real}
            alt={'REAL MADRID'}
            TeamName={'REAL MADRID'}
            League={'Laliga'}
          />
          <Card
            src={arsenal}
            alt={'ARSENAL'}
            TeamName={'ARSENAL'}
            League={'Premier League'}
          />
        </div>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={juve}
            alt={'JUVENTUS'}
            TeamName={'JUVENTUS'}
            League={'Serie A'}
          />
          <Card
            src={tottenham}
            alt={'TOTTENHAM'}
            TeamName={'TOTTENHAM'}
            League={'Premier League'}
          />
          <Card
            src={athletic}
            alt={'ATHLETICO MADRID'}
            TeamName={'ATHLETICO MADRID'}
            League={'Laliga'}
          />
        </div>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={milan}
            alt={'AC MILAN'}
            TeamName={'AC MILAN'}
            League={'Serie A'}
          />
          <Card
            src={chelsea}
            alt={'CHELSEA'}
            TeamName={'CHELSEA'}
            League={'Premier League'}
          />
          <Card
            src={liver}
            alt={'LIVERPOOL'}
            TeamName={'LIVERPOOL'}
            League={'Premier League'}
          />
        </div>
      </div>
    </div>
  )
}

export default Teams
