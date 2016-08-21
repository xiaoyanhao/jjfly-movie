import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import SlideItemTips from '../../components/SlideItemTips'
import SlideItems from '../../components/SlideItems'
import SlideControl from '../../components/SlideControl'
import {changeTip, slideIfNeeded, fetchMoviesIfNeeded} from '../../actions'
import {IN_THEATERS} from '../../constants/actionTypes'

class Slide extends Component {
  static propTypes = {
    currentTip: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let option = {
      category: IN_THEATERS,
      url: 'https://api.douban.com/v2/movie/' + IN_THEATERS.toLowerCase(),
      data: {count: 35}
    }

    this.props.fetchMovies(option)
  }

  render() {
    const {currentPage, currentTip, isFetching, movies, slide, changeTip} = this.props

    return (
      <div id='slide'>
        <h2 className='slide-title'>正在热映</h2>

        {isFetching
          ? <div className='slide-content loading'></div>
          : <div className='slide-content'>
              <SlideItemTips movies={movies.subjects} currentTip={currentTip} />
              <SlideItems movies={movies.subjects} currentPage={currentPage} changeTip={changeTip} />
              <SlideControl total={movies.total} slide={slide} />
            </div>
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  let {
    currentTip,
    isFetching,
    currentPage,
    movies
  } = state.category[IN_THEATERS] || {
    currentTip: -1,
    isFetching: true,
    currentPage: -1,
    movies: {}
  }

  return {
    currentTip,
    currentPage,
    isFetching,
    movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    slide: (page) => {
      dispatch(slideIfNeeded(page))
    },
    fetchMovies: (option) => {
      dispatch(fetchMoviesIfNeeded(option))
    },
    changeTip: (idnex) => {
      dispatch(changeTip(idnex))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide)