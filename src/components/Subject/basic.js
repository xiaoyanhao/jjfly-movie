import React from 'react'
import {Link} from 'react-router'

const Basic = props => {
  let basic = props.basic
  
  const {title, original_title, year, alt, images, rating, ratings_count, wish_count, collect_count, id} = basic

  let divider = ' | '

  let directors = [], casts = []

  basic.directors.forEach((director, index) => {
    directors.push(
      <Link key={`link-${index}`} to={`/celebrity/${director.id}`}>{director.name}</Link>,
      <span key={`span-${index}`}>{divider}</span>
    )
  })
  directors.pop()

  basic.casts.forEach((cast, index) => {
    casts.push(
      <Link key={`link-${index}`} to={`/celebrity/${cast.id}`}>{cast.name}</Link>,
      <span key={`span-${index}`}>{divider}</span>
    )
  })
  casts.pop()

  let genres = basic.genres.join(divider)
  let countries = basic.countries.join(divider)
  let aka = basic.aka.join(divider)

  return (
    <section>
      <h1 className="title">
        {`${title} ${title != original_title ? original_title : ''}`}
        <span className="year">({year})</span>
      </h1>

      <div className="info">
        <div className="info-basic">
          <img className="post" src={images.large} alt={title} />

          <ul className="basic">
            <li>
              <span className="prefix">导演：</span>
              {directors}
            </li>
            {/* <li><span className="prefix">编剧：</span>{writers}</li> */}
            <li>
              <span className="prefix">主演：</span>
              {casts}
            </li>
            <li>
              <span className="prefix">类型：</span>
              <span className="suffix">{genres}</span>
            </li>
            <li>
              <span className="prefix">制片国家/地区：</span>
              <span className="suffix">{countries}</span>
            </li>
            {/* <li><span className="prefix">语言：</span><span className="suffix">{languages}</span></li> */}
            {/* <li><span className="prefix">上映日期：</span><span className="suffix">{mainland_pubdate}(大陆)</span></li> */}
            {/* <li><span className="prefix">片长：</span><span className="suffix">{duration}</span></li> */}
            <li>
              <span className="prefix">又名：</span>
              <span className="suffix">{aka}</span>
            </li>
            <li>
              <span className="prefix">豆瓣链接：</span>
              <a href={alt} target="_blank">{id}</a>
            </li>
          </ul>
        </div>

        <div className="info-rating">
          <ul>
            <li>豆瓣评分</li>
            <li>
              <strong className="rating-average">{rating.average}</strong>
              <span className={`rating-star-${rating.stars} lg`}></span>
            </li>
            <li>{ratings_count}人 评分</li>
            <li>{wish_count}人 想看</li>
            <li>{collect_count}人 看过</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Basic