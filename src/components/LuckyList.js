import React from 'react'
import Lucky from './Lucky'
import PropTypes from 'prop-types'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'

export default function LuckyList({ objList }, { titles }) {
  const luckyList = objList && objList.map((v) => {
    return <Lucky data={v} />
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
