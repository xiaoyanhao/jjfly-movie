import React from 'react'
import Basic from './basic'

const Detail = props => {
  const {summary} = props.subject

  return (
    <div>
      <Basic basic={props.subject}  />
      <article>
        <h2>剧情简介</h2>
        <summary>{summary}</summary>
      </article>
    </div>
  )
}

export default Detail