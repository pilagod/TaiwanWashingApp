import React, { Component } from 'react'
import Detail2 from './Detail2.jsx'
import Service from './Service.jsx'

export default class ServiceDetail extends Component {
  render() {
    return (
      <section id="serviceDetail">
        <Detail2 />
        <Service />
      </section>
    )
  }
}
