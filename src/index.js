import Slide from './slide/slide'

class JJFly extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='jjfly'>
        <Slide />
      </div>
    )
  }
}

ReactDOM.render(
  <JJFly />,
  document.body
)