import React, { Component } from 'react'
import Style from '../css/intro.css'

export default class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="full-container top-intro">
          <div className="container flex flex-vertical-center">
            <div className="flex-align-right">
              <img src="../img/facebook.svg"></img>
            </div>
          </div>
        </div>
        <div className="full-container middle-intro">
          <div className="container">
            <div className="col-9 flex flex-align-center flex-direction-column content">
              <h1>台灣大洗 e 聯盟 App</h1>
              <p>
                一支洗衣APP，解決您所有洗滌需求，<br/>
                不必出門，即享有洗衣服務，<br/>
                洗衣其實沒有那麼麻煩。<br/><br/>
              </p>
              <div>
                <span className="button"></span>
                <span className="button"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
