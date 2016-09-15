import React from 'react'
import Category from './category.json'

const Tags = props => {
  const {changeTag, currentTag} = props

  let tags = Category.tags.map((tag, index) => {
    return (
      <li key={index} className={currentTag == tag && 'active'}>
        {tag}
      </li>
    )
  })

  return (
    <ul className="tag-category" onClick={changeTag}>
      {tags}
    </ul>
  )
}

export default Tags