import React from 'react'

export default function Nav({ handleStart, handleEnd }) {
  return (
    <nav className='nav'>
      <ul>
        <li onClick={handleStart}><button>开始</button></li>
        <li onClick={handleEnd}><button>结束</button></li>
      </ul>
    </nav>
  )
}
