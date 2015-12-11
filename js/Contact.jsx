import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="container">
          <header className="col-12">
            <h1>
              <span>聯絡我們</span>
              <span className="subtitle">(* 為必填)</span>
            </h1>
          </header>
          <div className="row">
            <div className="col-4 info">
              <div className="info-title">
                <h3>姓名*</h3>
              </div>
              <div>
                <input type="text"></input>
              </div>
            </div>
            <div className="col-4 info">
              <div className="info-title">
                <h3>信箱*</h3>
              </div>
              <div>
                <input type="text"></input>
              </div>
            </div>
            <div className="col-4 info">
              <div className="info-title">
                <h3>問題描述</h3>
              </div>
              <div>
                <input type="text"></input>
              </div>
            </div>
          </div>
          <div className="row">
            <span className="button">送出問題</span>
          </div>
        </div>
      </div>
    )
  }
}
