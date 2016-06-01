import Slide from './slide/slide'
import Nav from './nav/nav'

class JJFly extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='jjfly'>
        <Nav />
        <Slide />
      </div>
    )
  }
}

ReactDOM.render(
  <JJFly />,
  document.body
)