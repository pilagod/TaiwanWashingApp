import React, { Component } from 'react'

let player

export default class Link extends Component {

  componentDidMount() {
    if (!player) {
      player = new YT.Player('youtubePlayer', {
        videoId: 'yKV4H95l7T0'
      })
    }

    let $youtubePlayer = $('#youtubePlayer')
    let youtubePlayerHeight
    let youtubePlayerOffsetTop

    setInterval(() => {
      youtubePlayerHeight = $youtubePlayer.height()
      youtubePlayerOffsetTop = $youtubePlayer.offset().top
      if (window.scrollTop + window.innerHeight >= youtubePlayerOffsetTop &&
          window.scrollTop <= youtubePlayerOffsetTop + youtubePlayerHeight) {
        player.playVideo()
      } else {
        player.stopVideo()
      }
    }, 100);
  }

  render() {
    return (
      <div id="link">
        <div className="container">
          <div className="col-8">
            <div id="youtubePlayer"></div>
            <a href="https://www.youtube.com/watch?v=Ak0seLf8WMM" target="_blank">
              <div className="flex flex-vertical-center flex-align-center next-block ">
                  <span>點擊看更多</span>
              </div>
            </a>
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
                  <a href="http://ews.tww.com.tw" target="_blank">
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
