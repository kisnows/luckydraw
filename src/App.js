import React, { Component } from 'react'
import './App.css'
import CardWrap from './components/CardWrap'
import Nav from './components/Nav'
import Square from './utils/Square'
import { random } from './utils/generate'
import LuckyList from './components/LuckyList'
import LuckyCard from './components/LuckCard'
import PropTypes from 'prop-types'
class App extends Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.last = {}
    this.PeopleSquare = {}
    this.state = {
      currentX: 0,
      currentY: 0,
      currentLucky: {},
      sideLength: 1,
      isFetching: true,
      showLuckyCard: false,
      isProcessing: false,
      data: {
        titles: ['姓名'],
        objs: [{
          '姓名': 'loading',
          coordinate: {
            x: 1,
            y: 1
          }
        }]
      },
      luckyList: []
    }
  }
  getChildContext = () => {
    return { titles: this.state.data.titles }
  }
  componentDidMount() {
    const _this = this
    window.addEventListener('keyup', function (e) {
      if (e.keyCode === 13) {
        _this.handleClick()
      }
    }, false)

    fetch('/api/members')
      .then(res => res.json())
      .then(res => {
        const PeopleSquare = new Square(res.objs)
        console.log(PeopleSquare)
        PeopleSquare.setCoordinate()
        this.PeopleSquare = PeopleSquare
        this.last = PeopleSquare.getLastCoordinate()
        this.setState({
          isFetching: false,
          data: res,
          sideLength: PeopleSquare.sideLength
        })
      })
      .catch(err => console.log(err))
  }
  handleStart = () => {
    clearInterval(this.timer)
    let nextLuckMan = this.getNextLuckMan()
    let currentX = nextLuckMan.currentX
    let currentY = nextLuckMan.currentY
    const last = this.last
    this.setState({
      currentX,
      currentY,
      showLuckyCard: false,
      isProcessing: true
    })
    this.timer = setInterval(() => {
      let nextLuckMan = this.getNextLuckMan()
      currentX = nextLuckMan.currentX
      currentY = nextLuckMan.currentY
      if (currentY > last.y && currentX > last.x) {
        console.error('get nextLuckyMan wrong')
      }
      this.setState({
        currentX,
        currentY,
        showLuckyCard: false,
        isProcessing: true
      })
    }, 300)
  }

  handleEnd = () => {
    clearInterval(this.timer)
    let nextLuckMan = this.getNextLuckMan()
    let currentX = nextLuckMan.currentX
    let currentY = nextLuckMan.currentY
    const { luckyList, data } = this.state
    let index = currentY * this.state.sideLength + currentX
    const nextLuckList = luckyList.slice()
    nextLuckList.push(data.objs[index])
    this.setState({
      currentX,
      currentY,
      luckyList: nextLuckList,
      currentLucky: data.objs[index],
      showLuckyCard: true,
      isProcessing: false
    })
  }

  handleReset = () => {
    this.setState({
      luckyList: []
    })
  }

  handleClick = () => {
    const { isProcessing } = this.state
    if (isProcessing) {
      this.handleEnd()
    } else {
      this.handleStart()
    }
  }
  handleLuckyDelete = (id) => {
    const { luckyList, data } = this.state
    const titles = data.titles
    const index = luckyList.findIndex(el => el[titles[1]] === id)
    const nextLuckyList = luckyList.slice(0, index).concat(luckyList.slice(index + 1))
    this.setState({
      luckyList: nextLuckyList
    })
  }

  handleLuckCardClose = () => {
    this.setState({
      showLuckyCard: false
    })
  }
  getNextLuckMan() {
    let currentX = parseInt(random(0, this.PeopleSquare.sideLength), 10)
    let currentY = parseInt(random(0, this.PeopleSquare.sideLength), 10)
    while (currentY === this.last.currentY && currentX > this.last.currentX) {
      currentX = parseInt(random(0, this.PeopleSquare.sideLength), 10)
    }
    if (currentY === this.last.currentY && currentX > this.last.currentX) { console.log(currentX, currentY, this.last) }
    return {
      currentX,
      currentY
    }
  }
  render() {
    const { isProcessing, showLuckyCard, currentLucky, isFetching, currentX, currentY, data, sideLength, luckyList } = this.state
    return (
      <div className='App'>
        <LuckyCard open={showLuckyCard} data={currentLucky} handleStart={this.handleStart} handleLuckCardClose={this.handleLuckCardClose} />
        <Nav isProcessing={isProcessing} handleClick={this.handleClick} handleReset={this.handleReset} />
        <article className='App-content'>
          <section className='content'>
            {!isFetching && <CardWrap
              currentX={currentX}
              currentY={currentY}
              objList={data.objs}
              sideLength={sideLength}
            />
            }
          </section>
          <aside className='aside'>
            <LuckyList objList={luckyList} handleLuckyDelete={this.handleLuckyDelete} />
          </aside>
        </article>
      </div>
    )
  }
}
App.childContextTypes = {
  titles: PropTypes.array
}

export default App
