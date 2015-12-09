import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    return (
      <div id="link">
        <div className="container">
          <div className="col-8">
            <img src="../img/link.png"></img>
          </div>
          <div className="col-4">
            <div>
              <h1>公司連結</h1>
              <ul>
                <li><a href="#">台灣大洗 e 聯盟</a></li>
                <li><a href="#">潔衣家</a></li>
                <li><a href="#">雲端洗衣站</a></li>
                <li><a href="#">精品養護中心</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
