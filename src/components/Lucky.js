import React from 'react'
export default class Lucky extends React.Component {
  render() {
    const { name, gender, jobs } = this.props
    return (
      <section >
        <h1 >{name}</h1>
        <p>{gender}</p>
        <p>{jobs}</p>
      </section>
    )
  }
}
