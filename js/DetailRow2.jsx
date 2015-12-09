import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class DetailRow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: 0 /* 1 for left, 2 for right */
    }
  }

  render() {
    /* true for left, false for right */
    let direction = this.props.index % 2 === 0 ? true : false;
    let prefixDiv = direction ? <div className="prefix"></div> : null
    let postfixDiv = direction ? null : <div className="postfix"></div>

    let imageSrc = 'img/detail0' + this.props.index + '.png'
    let imageClassNames = classNames('detail-item-image', {
      'show-left': this.state.status === 1 && direction,
      'show-right': this.state.status === 2 && !direction
    })

    return (
      <div className="detail-table"
        onMouseEnter={this.detailRowOnMouseEnterHandler.bind(this, direction)}
        onMouseLeave={this.detailRowOnMouseLeaveHandler.bind(this, direction)}>
        <div className="detail-row">
          {prefixDiv}
          <div className="detail-item-title">
            <h1>
              <span>0{this.props.index}.</span> <br/>
              <span>{this.props.item.title}</span>
            </h1>
          </div>
          <div className="detail-item-content">
            <h3>{this.props.item.content}</h3>
          </div>
          {postfixDiv}
        </div>
        <div className={imageClassNames}>
          <img src={imageSrc}></img>
        </div>
      </div>
    )
  }

  detailRowOnMouseEnterHandler(direction) {
    /* direction: true for left, false for right */
    if (direction) {
      this.setState({status: 1});
    } else {
      this.setState({status: 2});
    }
  }

  detailRowOnMouseLeaveHandler(direction) {
    /* direction: true for left, false for right */
    this.setState({status: 0});
  }
}

DetailRow.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
}
