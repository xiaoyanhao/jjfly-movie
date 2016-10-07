import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {displayTip} from '../../actions/slide'
import {IN_THEATERS} from '../../constants/actionTypes'
import {Link} from 'react-router'

class Items extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    subjects: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.displayTip = this.displayTip.bind(this)
  }

  displayTip(event) {
    if (event.type == 'mouseout') {
      this.props.displayTip(-1)
      return false
    }
    let target = event.currentTarget
    let index = target.getAttribute('data-index')
    this.props.displayTip(parseInt(index))
  }

  getItems() {
    return this.props.subjects.map((element, index) => {
      return (
        <li className="slide-item" key={`item-${index}`}>
          <ul>
            <li className="slide-item-poster">
              <Link to={`/subject/${element.id}`}>
                <img
                  src={element.images.large}
                  alt={element.title}
                  onMouseOver={this.displayTip}
                  onMouseOut={this.displayTip}
                  data-index={index}
                />
              </Link>
            </li>

            <li className="slide-item-title">
              <Link to={`/subject/${element.id}`} title={element.title}>{element.title}</Link>
            </li>

            <li className="slide-item-rating">
              <span className={`rating-star-${element.rating.stars} sm`}></span>
              {element.rating.stars == '00'
                ? <span className="no-rating">暂无评分</span>
                : <span className="rating-score">{element.rating.average}</span>
              }
            </li>
          </ul>
        </li>
      )
    })

    return items
  }

  render() {
    let items = this.getItems()

    return (
      <div className="slide-items-wrapper">
        <ul className={"slide-items page-" + this.props.currentPage}>
          {items}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let {
    currentPage
  } = state.category[IN_THEATERS] || {
    currentPage: -1
  }

  return {
    currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayTip: (index) => {
      dispatch(displayTip(IN_THEATERS, index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)