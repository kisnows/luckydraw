import React from 'react'
import './Card.css'
import classname from 'classname'
export default function (props) {
  const { title, content, des, coordinate, isX, isY, style } = props
  const cls = classname({
    'component-card': true,
    'is-x-active': isX,
    'is-y-active': isY
  })
  const styles = {
    background: style && style.background
  }
  return (
    <div className={cls} data-x={coordinate.x} data-y={coordinate.y} style={styles}>
      <h3 className='component-card--title'>{title}</h3>
      <div className='component-card--content'>{content}</div>
      <p className='component-card--des'>{des}</p>
    </div >
  )
}