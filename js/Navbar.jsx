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
        return (
          <li key={index}>
            <a href={menuItem.url}><h1>0{index+1}. {menuItem.name}</h1></a>
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
        <div className="full-container flex flex-align-center flex-direction-column" onClick={this.menuOnClickHandler.bind(this)}>
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

  menuOnClickHandler() {
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
