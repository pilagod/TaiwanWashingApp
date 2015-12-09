import React, { Component } from 'react'
import Detail from './Detail.jsx'
import Service from './Service.jsx'

export default class ServiceDetail extends Component {
  render() {
    return (
      <section id="serviceDetail">
        <Detail />
        <Service />
      </section>
    )
  }
}
