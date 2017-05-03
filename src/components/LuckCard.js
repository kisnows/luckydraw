import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import Avatar from 'react-avatar'

export default class LuckCard extends React.Component {
  render() {
    const { data, open, handleStart, handleLuckCardClose } = this.props
    const { titles } = this.context
    const actions = [
      <FlatButton
        label='在选一个？'
        primary
        onClick={handleStart}
      />,
      <FlatButton
        label='取消'
        primary
        onClick={handleLuckCardClose}
      />
    ]
    return (
      <Dialog
        title='恭喜你，中奖啦'
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
          <CardTitle title={data[titles[1]]} subtitle={data[titles[8]]} />
          <CardText >
            {data[titles[4]]} - {data[titles[5]]} - {data[titles[6]]}` <br />
            {data[titles[7]]} - {data[titles[9]]}
          </CardText>
        </Card>
      </Dialog>
    )
  }
}
LuckCard.contextTypes = {
  titles: PropTypes.array
}
