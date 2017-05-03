/*
* Created on Fri Apr 28 2017
* author:  kisnows
* email: yq12315@gmail.com
*/
import React from 'react'
import './Card.css'
import classname from 'classname'
import Avatar from 'react-avatar'
import PropTypes from 'prop-types'
export default function Card(props, context) {
  const { data, coordinate, isX, isY, style } = props
  const titles = context.titles
  const cls = classname({
    'component-card': true,
    'is-x-active': isX,
    'is-y-active': isY
  })
  const styles = {
    width: `${style.width}px`,
    height: `${style.height}px`,
    background: style && style.background
  }
  return (
    <div className={cls} style={styles} data-x={coordinate.x} data-y={coordinate.y}>
      <Avatar name={data[titles[0]]} size={style.width} />
    </div>
  )
}
Card.contextTypes = {
  titles: PropTypes.array
}
