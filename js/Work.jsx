import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      <div id="work">
        <div className="container flex">
          <div id="workImg" className="col-6">
            <img src="img/work.jpg"/>
          </div>
          <div className="col-6">
            <div className="content">
              <p>
                想要自己當老闆嗎？想要自由的工作時間嗎？<br/>
                想要增加額外的收入嗎？<br/>
                只要透過手機APP到府收衣,週週有錢領！<br/>
                不管你想增加零用錢還是私房錢，加入我們就對了！<br/>
                免費加入，立即申請
              </p>
            </div>
            <header>
              <h2>業務招募</h2>
            </header>
            <div className="content">
              <p>
                賺大錢：<br/>
                想要賺更多錢嗎？不限交通工具,不管是走路, 騎腳踏車,騎機車 或是開車,<br/>
                只要您有本事收衣,佣金獎金週週領!
              </p>
              <p>
                彈性選擇自己的工作時間：<br/>
                坐不住辦公室嗎？在這裏,您可自由選擇您想要的工作時間,<br/>
                沒有壓力的輕鬆賺錢！
              </p>
              <p>
                自己當老闆：<br/>
                想自己當老闆嗎？正職或是兼差一切都看您！台灣大洗e聯盟幫您在對的時間派遣給你好的任務！
              </p>
            </div>
            <a href="http://goo.gl/forms/dRSjsmJv5u" target="_blank">
              <div className="learn-more">
                <span className="button">索取資料</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
