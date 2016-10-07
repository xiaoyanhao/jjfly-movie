import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Tips from './tips'
import Items from './items'
import Control from './control'
import {fetchMoviesIfNeeded} from '../../actions/movies'
import {IN_THEATERS} from '../../constants/actionTypes'

class Slide extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let option = {
      category: IN_THEATERS,
      data: {count: 35, start: 0}
    }

    this.props.fetchMovies(option)
  }

  render() {
    const {isFetching, movies, currentTip, currentPage} = this.props

    return (
      <div id='slide'>
        <h2 className='slide-title'>正在热映</h2>

        {isFetching
          ? <div className='slide-content loading'></div>
          : <div className='slide-content'>
              <Tips subjects={movies.subjects} />
              <Items subjects={movies.subjects} />
              <Control total={movies.total} currentPage={currentPage} />
            </div>
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  let {
    isFetching,
    movies,
    currentPage
  } = state.category[IN_THEATERS] || {
    isFetching: true,
    movies: {},
    currentPage: 0
  }

  return {
    isFetching,
    movies,
    currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: (option) => {
      dispatch(fetchMoviesIfNeeded(option))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide)