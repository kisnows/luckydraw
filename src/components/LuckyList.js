import React from 'react'
import Lucky from './Lucky'
import PropTypes from 'prop-types'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import './LuckyList.css'
export default function LuckyList({ objList, handleLuckyDelete }, { titles }) {
  const luckyList = objList && objList.map((v) => {
    return <Lucky key={v[titles[1]]} data={v} handleLuckyDelete={handleLuckyDelete} />
  })
  return (
    <ReactCssTransitionGroup
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
      transitionName={'lucky'}
      component={'div'}
    >
      {luckyList}
    </ReactCssTransitionGroup>
  )
}
LuckyList.contextTypes = {
  titles: PropTypes.array
}
