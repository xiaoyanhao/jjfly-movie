import React, {Component} from 'react'

const Nav = props => {
  return (
    <nav id='nav'>
      <div className='nav-search'>
        <form>
          <input className='search-input' type='text' placeholder='电影、影人、影院、电视剧' />
          <input className='search-submit' type='submit' value=' ' />
        </form>
      </div>
      <div className='nav-links'>
        <ul>
          <li><a>Top250</a></li>
          <li><a>口碑榜</a></li>
          <li><a>北美票房榜</a></li>
          <li><a>新片榜</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav