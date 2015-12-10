import React, { Component } from 'react'
import Style from '../css/intro.css'

export default class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="full-container">
          <div className="container">
            <div className="col-8 flex flex-align-center flex-direction-column content">
              <h1>台灣大洗 e 聯盟 App</h1>
              <p>
                一支洗衣APP，解決您所有洗滌需求，<br/>
                不必出門，即享有洗衣服務，<br/>
                洗衣其實沒有那麼麻煩。<br/><br/>
              </p>
              <div className="download">
                <a href="https://play.google.com/store/apps/details?id=com.tww.taiwanwashing" target="_blank">
                  <img src="img/google-play.png"></img>
                </a>
                <a href="https://itunes.apple.com/tw/app/tai-wan-da-xie/id1039606143?mt=8" target="_blank">
                  <img src="img/itunes-app.png"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
