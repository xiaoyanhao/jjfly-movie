import {JSONP} from '../jsonp/jsonp'
import Items from './items/items'
import Control from './control/control'
import {MockMovies} from './mock-movies'

class Slide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inTheaters: this.props.inTheaters, left: this.props.left}
    this.slideMoviesInTheaters = this.slideMoviesInTheaters.bind(this)
    this.slide = this.slide.bind(this)
  }

  slideMoviesInTheaters(response) {
    console.log(response)
    this.setState({inTheaters: response})
  }

  componentDidMount() {
    // JSONP({
    //   url: 'https://api.douban.com/v2/movie/in_theaters',
    //   data: {
    //     city: '广州'
    //   },
    //   success: this.slideMoviesInTheaters
    // })
    this.slideMoviesInTheaters(MockMovies);
  }

  slide(index) {
    this.setState({left: index * -590})
  }

  render() {
    return (
      <div id='slide'>
        <div className='slide-head'>
          <h2 className='slide-title'>
            <span className='in-theaters'>正在热映</span>
            <span className='divider'>/</span>
            <span className='coming-soon'>即将上映</span>
          </h2>
        </div>

        <div className='slide-content'>
          <Items movies={this.state.inTheaters.subjects} left={this.state.left} />
        </div>

        <div className='slide-foot'>
          <Control total={this.state.inTheaters.total} slide={this.slide} />
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
  inTheaters: React.PropTypes.object,
  left: React.PropTypes.int
}

Slide.defaultProps = {
  inTheaters: {
    count: 0,
    start: 0,
    total: 0,
    subjects: [],
    title: '正在热映'
  },
  left: 0
}

export default Slide