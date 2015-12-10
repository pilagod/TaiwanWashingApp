import React, { Component } from 'react'
import Style from '../css/banner.css'

export default class Banner extends Component {

  render() {
    return (
      <section id="banner">
        <div className="full-container">
          <div id="logo">
            <img src="img/logo.svg"></img>
          </div>
          <div className="image-container">
            <img src="img/banner.png"></img>
          </div>
          <div className="container">
            <div className="col-12">
              <h1>
                <span>Better, Faster, Easier 更好,更快,更方便</span><br/>
                <span>台灣大洗 e 聯盟App</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="full-container bottom-banner">
          <div className="container flex flex-vertical-center">
            <a className="col-12 flex-align-right" href="https://www.facebook.com/taiwanwashing" target="_blank">
              <img src="img/facebook.svg" style={{opacity: 0.9}}></img>
            </a>
          </div>
        </div>
      </section>
    )
  }

}
