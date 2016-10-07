import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {fetchSubjectIfNeeded} from '../../actions/subject'
import Detail from '../../components/Subject'

class Subject extends Component {
  constructor(props) {
    super(props)
  }

  fetchSubject(id) {
    this.props.fetchSubject({
      id: id
    })
  }

  componentDidMount() {
    this.fetchSubject(this.props.params.id)
  }

  render() {
    if (!this.props.subject) {
      return null
    }

    return (
      <div id="subject">
        {this.props.subject.isFetching
          ? <div className="loading"></div>
          : <Detail subject={this.props.subject} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    subject: state.subject[ownProps.params.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSubject: (option) => {
      dispatch(fetchSubjectIfNeeded(option))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subject)