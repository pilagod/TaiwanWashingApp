import React, { Component } from 'react'
import { render } from 'react-dom'
import Navbar from './Navbar.jsx'
import Banner from './Banner.jsx'
import Intro from './Intro.jsx'
import Detail from './Detail.jsx'
import Service from './Service.jsx'
import BottomApp from './BottomApp.jsx'

class App extends Component {
  render() {
    return (
      <div className="full-container">
        <Navbar />
        <Banner />
        <Intro />
        <Detail />
        <Service />
        <BottomApp />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('main')
)
