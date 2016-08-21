import React, {PropTypes, Component} from 'react'
import Slide from '../Slide'
import Nav from '../../components/Nav'

class JJFly extends Component {
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

export default JJFly