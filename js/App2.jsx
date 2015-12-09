import React, { Component } from 'react'
import { render } from 'react-dom'
import Navbar from './Navbar.jsx'
import Banner from './Banner.jsx'
import Intro from './Intro.jsx'
import Detail2 from './Detail2.jsx'
import Service from './Service.jsx'
import BottomApp from './BottomApp.jsx'

class App2 extends Component {
  render() {
    return (
      <div className="full-container">
        <Navbar />
        <Banner />
        <Intro />
        <Detail2 />
        <Service />
        <BottomApp />
      </div>
    )
  }
}

render(
  <App2 />,
  document.getElementById('main')
)
