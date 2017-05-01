import React, { Component } from 'react'
import './App.css'
import CardWrap from './components/CardWrap'
import Nav from './components/Nav'
import Square from './utils/Square'
import { dataList, random } from './utils/generate'

const list = dataList(45)
const PeopleSquare = new Square(list)
PeopleSquare.setCoordinate()

console.log(PeopleSquare.list)

class App extends Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.last = PeopleSquare.getLastCoordinate()
    console.log(this.last)
    this.state = {
      currentX: 0,
      currentY: 0
    }
  }
  componentDidMount() {
  }
  handleStart = () => {
    clearInterval(this.timer)
    let nextLuckMan = this.getNextLuckMan()
    let currentX = nextLuckMan.currentX
    let currentY = nextLuckMan.currentY
    const last = this.last
    this.setState({
      currentX,
      currentY
    })
    this.timer = setInterval(() => {
      let nextLuckMan = this.getNextLuckMan()
      currentX = nextLuckMan.currentX
      currentY = nextLuckMan.currentY
      console.log(currentX, currentY, this.last)
      if (currentY > last.y && currentX > last.x) {
        console.error('get nextLuckyMan wrong')
      }
      this.setState({
        currentX,
        currentY
      })
    }, 300)
  }
  handleEnd = () => {
    clearInterval(this.timer)
  }
  getNextLuckMan() {
    let currentX = parseInt(random(0, PeopleSquare.sideLength), 10)
    let currentY = parseInt(random(0, PeopleSquare.sideLength), 10)
    while (currentY === this.last.currentY && currentX > this.last.currentX) {
      currentX = parseInt(random(0, PeopleSquare.sideLength), 10)
    }
    return {
      currentX,
      currentY
    }
  }
  render() {
    const { currentX, currentY } = this.state
    return (
      <div className='App'>
        <Nav handleStart={this.handleStart} handleEnd={this.handleEnd} />
        <CardWrap
          currentX={currentX}
          currentY={currentY}
          objList={PeopleSquare.list}
          sideLength={PeopleSquare.sideLength}
        />
        <div>中奖者： {`${currentX}, ${currentY}`}</div>
      </div>
    )
  }
}

export default App
