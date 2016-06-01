class Control extends React.Component {
  constructor(props) {
    super(props)
    this.controlSlide = this.controlSlide.bind(this)
    this.prevActiveIndex = 0
  }

  controlSlide(event) {
    let li = event.target
    let ul = event.currentTarget
    if (li == ul) {
      return false
    }

    let lis = ul.childNodes
    lis[this.prevActiveIndex].classList.remove('active')
    this.prevActiveIndex = li.classList[0].split('-')[2]
    li.classList.add('active')
    this.props.slide(this.prevActiveIndex)
  }

  render() {
    let lis = []
    let amount = Math.ceil(this.props.total / 4)
    for (let i = 0; i < amount; i++) {
      let className = 'slide-control-' + i
      if (i == 0) {
        className += ' active'
      }
      lis.push(<li className={className}></li>)
    }
    return (
      <ul className='slide-control' onClick={this.controlSlide} ref='control'>
        {lis}
      </ul>
    )
  }
}

export default Control