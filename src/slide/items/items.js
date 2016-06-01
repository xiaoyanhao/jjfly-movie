class Items extends React.Component {
  constructor(props) {
    super(props)
  }

  slide(index) {
    this.refs.slideItems.left = index * -590;
  }

  render() {
    let items = this.props.movies.map((element) => {
      let rating = element.rating.average
      rating = Math.round(rating).toString()
      rating = 'rating-star rating-star-' + rating
      let ratingStar = <span className={rating}></span>
      return (
        <li className='slide-item'>
          <ul>
            <li className='poster'>
              <a>
                <img src={element.images.medium.replace('/spst/', '/mpst/')} alt={element.title} />
              </a>
            </li>

            <li className='title'>
              <a title={element.title}>{element.title}</a>
            </li>

            <li className='rating'>
              {ratingStar}
              <span className='rating-score'>{element.rating.average}</span>
            </li>

            <li className='ticket'>
              <a>在线购票</a>
            </li>
          </ul>
        </li>
      )
    })

    return (
      <ul className='slide-items' style={{left: this.props.left}}>
        {items}
      </ul>
    )
  }
}

export default Items