import React, {PropTypes, Component} from 'react'

class Subject extends Component {
  constructor(props) {
    super(props)
  }

  fetchSubject(id) {
    let option = {
      category: IN_THEATERS,
      url: 'https://api.douban.com/v2/movie/subject/' + id,
      data: {count: 35}
    }

    this.props.fetchMovies(option)
  }

  componentDidMount() {
    this.fetchSubject()
  }

  componentDidUpdate(prevProps) {
    let oldId = prevProps.params.id
    let newId = this.props.params.id
    if (oldId != newId) {
      this.fetchSubject()
    }
  }

  render() {
    return (
      <div id='subject'>
        <h1>Subject</h1>
      </div>
    )
  }
}

export default Subject