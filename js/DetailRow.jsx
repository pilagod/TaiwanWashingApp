import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class DetailRow2 extends Component {

  render() {
    let imageSrc = 'img/detail0' + this.props.index + '.png'
    let actionPreviousClass = classNames('detail-action-previous', {
      'show': this.props.index !== 1
    })
    let actionNextClass = classNames('detail-action-next', {
      'show': this.props.index !== this.props.length
    })
    let detailItemClass = classNames('col-12', 'detail-item', {
      'pull-right': this.props.index !== 1
    })
    return (
      <div className={detailItemClass}>
        <div className="detail-item-row">
          <div className="detail-item-image">
            <img src={imageSrc}></img>
          </div>
          <div className="detail-item-title">
            <h2>
              <span>0{this.props.index}.</span>
              <span>{this.props.item.title}</span>
            </h2>
          </div>
          <div className="detail-item-content">
            <p>{this.props.item.content}</p>
          </div>
          <div className="detail-item-end"></div>
        </div>
        <div className="detail-action">
          <span className={actionPreviousClass} onClick={this.actionPreviousOnClick.bind(this)}>
            <span className="arrow"> ＜＜ </span>
            <span>Previous</span>
          </span>
          <span className={actionNextClass} onClick={this.actionNextOnClick.bind(this)}>
            <span>Next</span>
            <span className="arrow"> ＞＞ </span>
          </span>
        </div>
      </div>
    )
  }

  actionPreviousOnClick() {
    let detailItems = $('.detail-item')
    let currentItem = detailItems.get(this.props.index-1)
    let previousItem = detailItems.get(this.props.index-2)

    $(currentItem).addClass('pull-right')
    $(previousItem).removeClass('pull-left')
  }

  actionNextOnClick() {
    let detailItems = $('.detail-item')
    let currentItem = detailItems.get(this.props.index-1)
    let nextItem = detailItems.get(this.props.index)

    $(currentItem).addClass('pull-left')
    $(nextItem).removeClass('pull-right')
  }
}

DetailRow2.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired, /* { title, content } */
  length: PropTypes.number.isRequired
}
