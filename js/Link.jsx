import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    return (
      <div id="link">
        <div className="container">
          <div className="col-8">
            <div className="left-block"></div>
            <iframe src="https://www.youtube.com/embed/yKV4H95l7T0" frameBorder="0" allowFullScreen>
            </iframe>
            <div className="right-block flex flex-vertical-center">
              <a href="https://www.youtube.com/watch?v=Ak0seLf8WMM" target="_blank">
                <img src="img/link-arrow-right.svg"></img>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div>
              <h1>公司連結</h1>
              <ul>
                <li>
                  <a href="http://www.tww.com.tw" target="_blank">
                    <span>台灣大洗 e 聯盟</span>
                    <div className="bottom-line"></div>
                  </a>
                </li>
                <li>
                  <a href="http://www.tww.com.tw/je/" target="_blank">
                    <span>潔衣家</span>
                    <div className="bottom-line"></div>
                  </a>
                </li>
                <li>
                  <a href="http://www.tww.com.tw/je/" target="_blank">
                    <span>雲端洗衣站</span>
                    <div className="bottom-line"></div>
                  </a>
                </li>
                <li>
                  <a href="http://www.tww.com.tw/tlcc/" target="_blank">
                    <span>精品養護中心</span>
                    <div className="bottom-line"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
