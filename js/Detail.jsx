import React, { Component, PropTypes } from 'react'
import DetailRow from './DetailRow.jsx'
import Style from '../css/detail.css'

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
        <DetailRow key={index} index={index+1} item={item} length={detailListLength}/>
      )
    })
    return (
      <div id="detail">
        <div className="container">
          <header className="col-12">
            <h1>服務特色</h1>
          </header>
          <div className="detail-items">
            {detailRows}
          </div>
        </div>
      </div>
    )
  }
}
