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
    let divider = ' | '

    return this.props.subjects.map((element, index) => {
      let className = `slide-item-tip-${index} ${this.props.currentTip == index ? 'active' : ''}`

      let directors = element.directors.map(director => director.name).join(divider)
      let casts = element.casts.map(cast => cast.name).join(divider)
      let genres = element.genres.join(divider)

      return (
        <li className={className} key={`tip-${index}`}>
          <h3>
            {`${element.title} ${element.title != element.original_title ? element.original_title : ''}`}
            <span className="year">{element.year}</span>
          </h3>
          
          <p className="directors">
            <span className="label">导演</span>
            <span>{directors}</span>
          </p>

          <p className="casts">
            <span className="label">主演</span>
            <span>{casts}</span>
          </p>

          <p className="genres">
            <span className="label">类型</span>
            <span>{genres}</span>
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