import React, { Component } from 'react'
import Style from '../css/banner.css'

export default class Banner extends Component {

  render() {
    return (
      <section id="banner">
        <div className="full-container">
          <div className="image-container">
            <img src="img/banner.png"></img>
          </div>
          <div className="container">
            <div>
              <h1>
                <span>Better, Faster, Easier 更好,更快,更方便</span><br/>
                <span>台灣大洗 e 聯盟App</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
