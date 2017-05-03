import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
export default function Nav({ handleStart, handleEnd, handleReset }) {
  return (
    <nav className='nav'>
      <Toolbar>
        <ToolbarGroup firstChild />
        <ToolbarGroup>
          <ToolbarTitle text='Options' />

          <ToolbarSeparator />
          <RaisedButton onClick={handleStart} primary >开始</RaisedButton>
          <RaisedButton onClick={handleEnd}>结束</RaisedButton>
          <RaisedButton onClick={handleReset}>重置</RaisedButton>
        </ToolbarGroup>
      </Toolbar>
    </nav>
  )
}
