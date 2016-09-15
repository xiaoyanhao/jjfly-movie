import React from 'react'

const Tool = props => {
  const {sort, sortedBy} = props

  return (
    <div className="tag-tool">
      <div className="tag-sort">
        <label>
          <input
            type="radio"
            name="sort"
            value="hot"
            onChange={sort}
            checked={sortedBy == 'hot'}
          />
          按热度排序
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="time"
            onChange={sort}
            checked={sortedBy == 'time'}
          />
          按时间排序
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="rank"
            onChange={sort}
            checked={sortedBy == 'rank'}
          />
          按评分排序
        </label>
      </div>
    </div>
  )
}

export default Tool