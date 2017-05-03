import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Avatar from 'react-avatar'

export default class LuckCard extends React.Component {
  render() {
    const { data, open, handleStart, handleLuckCardClose } = this.prpos
    const { titles } = this.context
    const actions = [
      <FlatButton
        label='在选一个？'
        primary
        onTouchTap={handleStart}
      />,
      <FlatButton
        label='取消'
        primary
        onTouchTap={handleLuckCardClose}
      />
    ]
    return (
      <Dialog
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleLuckCardClose}
      >
        <Card>
          <CardHeader
            avatar={<Avatar name={data[titles[0]]} />}
            title={data[titles[0]]}
            subtitle={data[titles[7]]}
          />
        </Card>
      </Dialog>
    )
  }
}
LuckCard.contextTypes = {
  titles: PropTypes.array
}
