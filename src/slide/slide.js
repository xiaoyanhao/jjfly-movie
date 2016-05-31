import {JSONP} from '../jsonp/jsonp'
import Items from './items/items'
import Control from './control/control'
import {MockMovies} from './mock-movies'

class Slide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inTheaters: this.props.inTheaters}
    this.slideMoviesInTheaters = this.slideMoviesInTheaters.bind(this)
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

  render() {
    return (
      <div id='slide'>
        <div className='slide-head'>
          <h2 className='slide-title'>{this.state.inTheaters.title}</h2>
        </div>

        <div className='slide-content'>
          <Items movies={this.state.inTheaters.subjects} />
        </div>

        <div className='slide-foot'>
          <Control total={this.state.inTheaters.total} />
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
  inTheaters: React.PropTypes.object
}

Slide.defaultProps = {
  inTheaters: {
    count: 0,
    start: 0,
    total: 0,
    subjects: [],
    title: '正在热映'
  }
}

export default Slide