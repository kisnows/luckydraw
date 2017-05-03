import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'react-avatar'
import PropTypes from 'prop-types'
export default class Lucky extends React.Component {
  render() {
    const data = this.props.data
    const { titles } = this.context
    const style = {
      marginBottom: '10px'
    }
    return (
      <section style={{marginBottom: ' 10px'}}>
        <Card>
          <CardHeader
            avatar={<Avatar name={data[titles[0]]} />}
            title={data[titles[0]]}
            subtitle={data[titles[7]]}
          />
        </Card>
      </section>
    )
  }
}
Lucky.contextTypes = {
  titles: PropTypes.array
}
