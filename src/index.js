import Slide from './slide/slide'

class JJFly extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Slide />
    )
  }
}

ReactDOM.render(
  <JJFly />,
  document.body
)