import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {IN_THEATERS} from '../../constants/actionTypes'

class Tips extends Component {
  static propTypes = {
    currentTip: PropTypes.number.isRequired,
    subjects: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  getTips() {
    return this.props.subjects.map((element, index) => {
      let stars = 'rating-star rating-star-' + element.rating.stars
      let className = `slide-item-tip tip-${index} ` + (this.props.currentTip == index ? 'active' : '')

      let directors = ''
      for (let index in element.directors) {
        if (index != 0) {
          directors += ' | '
        }
        directors += element.directors[index].name
      }

      let casts = ''
      for (let index in element.casts) {
        if (index != 0) {
          casts += ' | '
        }
        casts += element.casts[index].name
      }

      return (
        <li className={className} key={'tip' + index}>
          <h3>
            {element.title} &nbsp;
            {element.title != element.original_title && element.original_title}
            <span className="year">{element.year}</span>
          </h3>

          <p className="genres">
            <span className="label">类型</span>
            <span>{element.genres && element.genres.join(' | ')}</span>
          </p>
          
          <p className="directors">
            <span className="label">导演</span>
            <span>{directors}</span>
          </p>

          <p className="casts">
            <span className="label">主演</span>
            <span>{casts}</span>
          </p>
        </li>
      )
    })
  }

  render() {
    let tips = this.getTips()

    return (
      <ul className="slide-item-tips">
        {tips}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  let {
    currentTip
  } = state.category[IN_THEATERS] || {
    currentTip: -1
  }

  return {
    currentTip
  }
}

export default connect(mapStateToProps)(Tips)