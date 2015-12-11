import React, { Component } from 'react'
import Style from '../css/bottomApp.css'
import Link from './Link.jsx'
import Work from './Work.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

export default class BottomApp extends Component {
  render() {
    return (
      <section id="bottomApp">
        <Link />
        <Work />
        <Contact />
        <Footer />
      </section>
    )
  }
}
