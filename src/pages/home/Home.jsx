import React, { useState, useEffect } from 'react'
import Button from '../../components/button/Button'
import Card from '../../components/cards/Card'
import Footer from '../../components/footer/Footer'
import '../home/Home.css'
import '../../components/button/Button.css'

import arsenal from '../../img/arsenal.jpg'
import barca from '../../img/barca.jpg'
import real from '../../img/real madrid.jpg'
import manc from '../../img/man city.jpg'
import manu from '../../img/man u.jpg'
import juve from '../../img/juventus.jpg'


function Home () {
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

  const handleClick = () => {
    alert('hoooooray!!!!!!!')
  }

  return (
    <div className='main'>
      <div className='text-container'>
        <h1
          className={
            classes.text.includes('large') ? 'large-size1' : 'small-size1'
          }
        >
          FOOTBALL WORLD
        </h1>
        <h4
          className={
            classes.text.includes('large') ? 'large-size2' : 'small-size2'
          }
        >
          WHAT WAITING FOR ?
        </h4>
      </div>
      <div
        className={
          classes.button.includes('large')
            ? 'btn-container-large'
            : 'btn-container-small'
        }
      >
        <div className='button-container'>
          <Button
            onClick={handleClick}
            BtnSize='btn-size-medium'
            BtnStyle='btn-style-primary'
          >
            Whatch
          </Button>
          <Button
            onClick={handleClick}
            BtnSize='btn-size-medium'
            BtnStyle='btn-style-outline'
          >
            Search
          </Button>
        </div>
      </div>
      <div className='card-main-title'>
        <h1>Europian Clubs</h1>
        <hr className='hr' />
      </div>
      <div className='card-main'>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={arsenal}
            alt={'alt pic'}
            TeamName={'ARSENAL'}
            League={'Premier League'}
          />
          <Card
            src={barca}
            alt={'alt pic'}
            TeamName={'BARCELONA'}
            League={'Laliga'}
          />
          <Card
            src={juve}
            alt={'alt pic'}
            TeamName={'JUVENTUS'}
            League={'Serie A'}
          />
        </div>
        <div
          className={
            classes.card.includes('large') ? 'card-row-large' : 'card-row-small'
          }
        >
          <Card
            src={real}
            alt={'alt pic'}
            TeamName={'REAL MADRID'}
            League={'Laliga'}
          />
          <Card
            src={manc}
            alt={'alt pic'}
            TeamName={'MAN CITY'}
            League={'Premier League'}
          />
          <Card
            src={manu}
            alt={'alt pic'}
            TeamName={'MAN UNITED'}
            League={'Premier League'}
          />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
