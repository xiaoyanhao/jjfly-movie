import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {slideIfNeeded} from '../../actions'
import {IN_THEATERS} from '../../constants/actionTypes'

class Control extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.controlSlide = this.controlSlide.bind(this)
    this.prevActiveIndex = 0
    this.maxTotal = 7
  }

  controlSlide(event) {
    let li = event.target
    let ul = event.currentTarget
    if (li == ul) {
      return false
    }

    let lis = ul.childNodes
    lis[this.prevActiveIndex].classList.remove('active')
    this.prevActiveIndex = parseInt(li.getAttribute('data-index'))
    li.classList.add('active')
    this.props.slide(this.prevActiveIndex)
  }

  render() {
    let lis = []
    let total = Math.ceil(this.props.total / 5)
    total = total > this.maxTotal ? this.maxTotal : total

    for (let i = 0; i < total; ++i) {
      if (i == 0) {
        lis.push(<li key={i} data-index={i} className='active'></li>)
      } else {
        lis.push(<li key={i} data-index={i}></li>)
      }
    }

    return (
      <ul className='slide-control' onClick={this.controlSlide}>
        {lis}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    slide: (page) => {
      dispatch(slideIfNeeded(page))
    }
  }
}

export default connect(null, mapDispatchToProps)(Control)