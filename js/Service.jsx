import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import Style from '../css/service.css'

export default class Service extends Component {
  render() {
    return (
      <section id="service">
        <div className="container">
          <header className="col-12">
            <h1>服務項目</h1>
          </header>
        </div>
        <div className="full-container">
          <div className="left-block">
            <div className="col-4">
              <div className="service-image">
                <Isvg src='../img/service01.svg'></Isvg>
              </div>
              <div className="service-title">
                <h2>
                  <span>超商洗衣</span><br/>
                  <span className="subtitle">24小時送洗</span>
                </h2>
              </div>
              <div className="service-content">
                <p>
                  服務據點：<br/>
                  全台灣全家 / OK / 萊爾富便利商店
                </p>
                <p>
                  送洗品項：<br/>
                  人身穿著類（不含皮衣皮草）<br/>
                  床寢類
                </p>
              </div>
            </div>
          </div>
          <div className="right-block">
            <div className="col-4">
              <div className="service-image">
                <Isvg src='../img/service02.svg'></Isvg>
              </div>
              <div className="service-title">
                <h2>
                  <span>到府收送</span><br/>
                  <span className="subtitle">09:00a.m. - 09:00p.m.</span>
                </h2>
              </div>
              <div className="service-content">
                <p>
                  人身穿著：<br/>
                  穿著織物類 / 床寢織物類 / <br/>
                  禮服類 / 其他類 <br/>
                </p>
                <p>
                  精品洗滌：<br/>
                  包包 / 皮衣 / 鞋子
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="container">
          <span className="button">加入會員</span>
          <span className="button">線上儲值</span>
        </footer>
      </section>
    )
  }
}
