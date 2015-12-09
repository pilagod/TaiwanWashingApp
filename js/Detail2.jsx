import React, { Component, PropTypes } from 'react'
import DetailRow2 from './DetailRow2.jsx'
import Style from '../css/detail2.css'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailList: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'json/detail.json',
      dataType: 'json',
      success: function (data) {
        this.setState({detailList: data})
      }.bind(this)
    })
  }

  render() {
    let detailListLength = this.state.detailList.length;
    let detailRows = this.state.detailList.map((item, index) => {
      return (
        <DetailRow2 key={index} index={index+1} item={item} length={detailListLength}/>
      )
    })
    return (
      <section id="detail">
        <div className="container">
          {detailRows}
        </div>
      </section>
    )
  }
}
