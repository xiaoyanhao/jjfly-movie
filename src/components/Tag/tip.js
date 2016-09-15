import React from 'react'

const Tip = props => {
  let value = props.value
  let divider = ' | '
  let genres = value.genres.join(divider)
  let directors = value.directors.map(director => director.name).join(divider)
  let casts = value.casts.map(cast => cast.name).join(divider)
  let title = value.title + ' ' + 
    (value.title != value.original_title ? value.original_title : '')

  return (
    <div className="tag-item-tip">
      <h3>
        {title}            
        <span className="year">{value.year}</span>
      </h3>

      <p className="genres">
        <span className="label">类型</span>
        <span>{genres}</span>
      </p>
      
      <p className="directors">
        <span className="label">导演</span>
        <span>{directors}</span>
      </p>

      <p className="casts">
        <span className="label">主演</span>
        <span>{casts}</span>
      </p>
    </div>
  )
}

export default Tip