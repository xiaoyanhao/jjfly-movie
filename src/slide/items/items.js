class Items extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let items = this.props.movies.map((element) => {
      return (
        <li class='slide-item'>
          <ul>
            <li class='poster'>
              <a>
                <img src={element.images.medium} alt={element.title} />
              </a>
            </li>

            <li class='title'>
              <a>{element.title}</a>
            </li>

            <li class='rating'>
              <span>{element.rating.average}</span>
            </li>

            <li class='ticket'>
              <a>在线购票</a>
            </li>
          </ul>
        </li>
      )
    })

    return (
      <ul class='slide-items'>
        {items}
      </ul>
    )
  }
}

export default Items