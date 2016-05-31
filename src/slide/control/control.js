class Control extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let lis = []
    let amount = Math.ceil(this.props.total / 4)
    for (let i = 1; i <= amount; i++) {
      lis.push(<li className={'slide-control-' + i}></li>)
    }
    return (
      <ul className='slide-control'>
        {lis}
      </ul>
    )
  }
}

export default Control