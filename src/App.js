import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Teams from './pages/teams/Teams'
import Players from './pages/players/Players'
import ContactUs from './pages/contact-us/ContactUs'
import AboutUs from './pages/about-us/AboutUs'
import { Switch, Route } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/teams' component={Teams} />
        <Route path='/players' component={Players} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/about-us' component={AboutUs} />
      </Switch>
    </div>
  )
}

export default App
