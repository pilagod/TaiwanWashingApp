import React, { Component } from 'react'
import Style from '../css/navbar.css'

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
      menuList: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'json/navbar.json',
      dataType: 'json',
      success: function (data) {
        this.setState({
          menuList: data
        })
      }.bind(this)
    })

    let $document = $(document)
    let $navbarDiv = $('#navbar > div')
    let navbarDivOffsetTop = $navbarDiv.offset().top

    window.onscroll = () => {
      if ($document.scrollTop() >= navbarDivOffsetTop && !$navbarDiv.hasClass('fixed')) {
        $navbarDiv.addClass('fixed')
      } else if ($document.scrollTop() < navbarDivOffsetTop && $navbarDiv.hasClass('fixed')) {
        $navbarDiv.removeClass('fixed')
      }
    }
  }

  render() {
    let menu;
    if (this.state.active) {
      let menuList = this.state.menuList.map((menuItem, index) => {
        let linkRegexp = /^#/
        let hrefTarget, hrefOnClick
        if (linkRegexp.test(menuItem.url)) {
          hrefTarget = '_self'
          hrefOnClick = this.hrefOnClick.bind(this, menuItem.url)
        } else {
          hrefTarget = '_blank'
          hrefOnClick = null
        }
        return (
          <li key={index} onClick={this.menuOnClick.bind(this)}>
            <a href={menuItem.url} target={hrefTarget} onClick={hrefOnClick}>
              <h1>
                <span>0{index+1}.</span>
                <span className="link-title">{menuItem.name}</span>
              </h1>
            </a>
          </li>
        )
      })
      menu = (
        <div id="menu" className="show">
          <ul>
            {menuList}
          </ul>
        </div>
      )
    }
    return (
      <nav id="navbar">
        <div className="full-container flex flex-align-center flex-direction-column" onClick={this.menuOnClick.bind(this)}>
          <span>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
        {menu}
      </nav>
    )
  }

  hrefOnClick(hash, e) {
    e.preventDefault();

    var target = hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  }

  menuOnClick() {
    if (this.state.active) {
      $('#menu').addClass('hide');
      $('#navbar > div').removeClass('active');
      setTimeout(() => {
        $('#navbar > div').removeClass('animation')
        this.setState({active: false})
      }, 500);
    } else {
      $('#navbar > div').addClass('animation active');
      this.setState({active: true})
    }
  }
}
