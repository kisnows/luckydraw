import React, { Component } from 'react'
import './App.css'
import CardWrap from './components/CardWrap'
import Square from './utils/Square'
import { dataList } from './utils/geterate'

const list = dataList(45)
const PeopleSquare = new Square(list)
PeopleSquare.setCoordinate()

console.log(PeopleSquare.list)

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    fetch('/api/members')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='App'>
        <CardWrap
          currentX={1}
          currentY={2}
          objList={PeopleSquare.list}
          sideLength={PeopleSquare.sideLength}
        />
      </div>
    )
  }
}

export default App
