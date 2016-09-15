import React from 'react'
import {Link} from 'react-router'
import Tip from './tip'

const Items = props => {
  let subjects = props.subjects

  let items = subjects.map((value, index) => {
    return (
      <Link
        className="tag-item"
        key={index}
        to={`/subject/${value.id}`}
      >
        <div className="tag-item-poster">
          <img src={value.images.large} alt={value.title} />
        </div>

        <Tip value={value} />

        <p className="tag-item-title">
          {value.title}
          <strong className="tag-item-rating">
            {value.rating.average}
          </strong>
        </p>
      </Link>
    )
  })

  return (
    <div className="tag-items">
      {items}
    </div>
  )
}

export default Items