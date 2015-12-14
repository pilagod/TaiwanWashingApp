import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="col-12 flex flex-vertical-center">
            <div id="logo" className="footer-logo flex-align-left">
              <a href="#banner" onClick={this.footerLogoOnClick.bind(this, '#banner')}>
                <img src="img/logo.svg"></img>
              </a>
            </div>
            <div className="footer-content flex-align-right">
              <div className="footer-contact-info">
                <span>地址：新北市新店區<br className="footer-newline"/>寶僑路235巷6弄5號8樓</span><br/>
                <span>電話：(02)2915-0365</span><br/>
                <span>傳真：(02)2915-0364</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  footerLogoOnClick(hash, e) {
    e.preventDefault();

    let target = hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  }
}
