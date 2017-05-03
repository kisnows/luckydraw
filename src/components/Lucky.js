import React from 'react'
import { Card, CardActions, CardHeader } from 'material-ui/Card'
import Avatar from 'react-avatar'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
export default class Lucky extends React.Component {
  render() {
    const { data, handleLuckyDelete } = this.props
    const { titles } = this.context

    return (
      <section style={{ marginBottom: ' 10px' }}>
        <Card>
          <CardHeader
            avatar={<Avatar name={data[titles[0]]} />}
            title={data[titles[0]]}
            subtitle={data[titles[7]]}
          />
          <CardActions style={{textAlign: 'right'}}>
            <FlatButton label='删除' onClick={() => handleLuckyDelete(data[titles[1]])} />
          </CardActions>
        </Card>
      </section>
    )
  }
}
Lucky.contextTypes = {
  titles: PropTypes.array
}
