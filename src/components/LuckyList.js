import React from 'react'
import Lucky from './Lucky'
export default function ({ objList }) {
  const LuckyList = objList && objList.map((v) => {
    return <Lucky key={v} />
  })
  return (
    <div>
      {LuckyList}
    </div>
  )
}
