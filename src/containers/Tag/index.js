import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {sortTag, changeTag} from '../../actions/tag'
import {fetchMoviesIfNeeded} from '../../actions/movies'
import Category from '../../components/Tag/category'
import Tool from '../../components/Tag/tool'
import Items from '../../components/Tag/items'

class Tag extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.object.isRequired,
    currentTag: PropTypes.string.isRequired,
    sortedBy: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.fetchMoviesByTag = this.fetchMoviesByTag.bind(this)
    this.changeTag = this.changeTag.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.sort = this.sort.bind(this)
  }

  fetchMoviesByTag(start = 0) {
    let option = {
      category: this.props.currentTag,
      data: {start: start},
      tag: true
    }
    
    this.props.fetchMovies(option)
  }

  changeTag(event) {
    if (event.currentTarget != event.target) {
      this.props.changeTag(event.target.textContent)
    }
  }

  loadMore(event) {
    this.fetchMoviesByTag(this.props.movies.start + 20)
  }

  sort(event) {
    let value = event.target.value
    this.props.sortTag(this.props.currentTag, value)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentTag != this.props.currentTag) {
      this.fetchMoviesByTag(this.props.movies.start)
    }
  }

  componentDidMount() {
    this.fetchMoviesByTag(0)
  }

  render() {
    const {isFetching, movies, currentTag, sortedBy} = this.props

    return (
      <div id="tag">
        <h2 className="tag-title">选电影</h2>

        <Category currentTag={currentTag} changeTag={this.changeTag} />

        <Tool sort={this.sort} sortedBy={sortedBy} />

        <Items subjects={movies.subjects} />

        <button className="load-more" onClick={this.loadMore}>
          {isFetching ? '载入中……' : '加载更多'}
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let {
    isFetching,
    sortedBy,
    movies
  } = state.category[state.category.currentTag] || {
    isFetching: true,
    sortedBy: 'default',
    movies: {subjects: []}
  }

  return {
    isFetching,
    movies,
    sortedBy,
    currentTag: state.category.currentTag
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: (option) => {
      dispatch(fetchMoviesIfNeeded(option))
    },
    changeTag: (tag) => {
      dispatch(changeTag(tag))
    },
    sortTag: (category, sortedBy) => {
      dispatch(sortTag(category, sortedBy))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tag)