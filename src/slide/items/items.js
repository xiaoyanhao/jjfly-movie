class Items extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let items = this.props.movies.map((element) => {
      return (
        <li className='slide-item'>
          <ul>
            <li className='poster'>
              <a>
                <img src={element.images.medium.replace('/spst/', '/mpst/')} alt={element.title} />
              </a>
            </li>

            <li className='title'>
              <a>{element.title}</a>
            </li>

            <li className='rating'>
              <span>{element.rating.average}</span>
            </li>

            <li className='ticket'>
              <a>在线购票</a>
            </li>
          </ul>
        </li>
      )
    })

    return (
      <ul className='slide-items'>
        {items}
      </ul>
    )
  }
}

export default Items