import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container flex flex-vertical-center">
          <div id="logo" className="footer-logo flex-align-left">
            <img src="img/logo.svg"></img>
          </div>
          <div className="footer-content flex-align-right">
            <div className="footer-hiring">
              <h5>徵人資訊</h5>
            </div>
            <div className="footer-contact-info">
              <span>地址：新北市新店區寶僑路235巷6弄5號8樓</span><br/>
              <span>電話：(02)2915-0365</span><br/>
              <span>傳真：(02)2915-0364</span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
