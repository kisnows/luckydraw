import React from 'react'
import Lucky from './Lucky'
import PropTypes from 'prop-types'
export default function LuckyList({ objList }, {titles}) {
  const luckyList = objList && objList.map((v) => {
    return <Lucky key={v[titles[1]]} data={v} />
  })
  return (
    <div>
      {luckyList}
    </div>
  )
}
LuckyList.contextTypes = {
  titles: PropTypes.array
}
