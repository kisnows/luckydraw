import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
export default function Nav({ isProcessing, handleClick, handleReset }) {
  return (
    <nav className='nav'>
      <Toolbar>
        <ToolbarGroup firstChild />
        <ToolbarGroup >
          <ToolbarTitle text='Options' />
          <ToolbarSeparator />
          <RaisedButton onClick={handleClick} primary >{isProcessing ? '结束' : '开始'}</RaisedButton>
          <RaisedButton onClick={handleReset}>重置</RaisedButton>
        </ToolbarGroup>
      </Toolbar>
    </nav>
  )
}
