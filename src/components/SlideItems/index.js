import React, {Component} from 'react'

class SlideItems extends Component {
  constructor(props) {
    super(props)
    this.changeTip = this.changeTip.bind(this)
  }

  changeTip(event) {
    if (event.type == 'mouseout') {
      this.props.changeTip(-1)
      return false
    }
    let target = event.currentTarget
    let index = target.getAttribute('data-index')
    this.props.changeTip(parseInt(index))
  }

  getItems() {
    return this.props.movies.map((element, index) => {
      let stars = 'rating-star rating-star-' + element.rating.stars
      
      return (
        <li className="slide-item" key={'item' + index}>
          <ul>
            <li className="poster">
              <a>
                <img src={element.images.medium.replace('/spst/', '/mpst/')} alt={element.title} onMouseOver={this.changeTip} onMouseOut={this.changeTip} data-index={index} />
              </a>
            </li>

            <li className="title">
              <a title={element.title}>{element.title}</a>
            </li>

            <li className="rating">
              <span className={stars}></span>
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
    let left = this.props.currentPage * -740
    let items = this.getItems()

    return (
      <div className="slide-items-wrapper">
        <ul className="slide-items" style={{left: left}}>
          {items}
        </ul>
      </div>
    )
  }
}

export default SlideItems