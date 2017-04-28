import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import './CardWrap.css'
import Square from '../utils/Square'
import { dataList } from '../utils/geterate'
import Card from './Card'

const list = dataList(45)
const PeopleSquare = new Square(list)
PeopleSquare.setCoordinate()

export default class CardWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.props.currentX || 0,
      y: this.props.currentY || 0,
      cardStyle: {
        scale: 1
      },
      style: {
        width: 200,
        height: 200
      }
    }
  }

  static propsTypes = {
    currentX: PropTypes.number.isRequired,
    currentY: PropTypes.number.isRequired,
    objList: PropTypes.array.isRequired,
    sideLength: PropTypes.number.isRequired
  }

  componentDidMount() {
    const init = this.init
    init()
    window.addEventListener('resize', function () {
      init()
    }, false)
  }

  init = () => {
    const { sideLength } = this.props
    const $card = findDOMNode(this.wrap).getElementsByClassName('component-card')[0]
    const cardStyles = window.getComputedStyle($card)
    const cardWidth = parseInt(cardStyles.width)
    const cardHeight = parseInt(cardStyles.height)
    const width = Math.max(window.innerWidth, window.innerHeight)
    const vWidth = width / sideLength
    const scale = vWidth / cardWidth
    this.setState({
      cardStyle: {
        scale,
        width: vWidth,
        height: vWidth
      },
      style: {
        width: width,
        height: width
      }
    })
  }
  renderCards = () => {
    const { cardStyle } = this.state
    return this.props.objList.map(function (v) {
      return <Card
        key={v.name}
        title={v.name}
        des={v.gender}
        coordinate={v.coordinate}
        style={cardStyle}
      />
    })
  }

  render() {
    const { currentX, currentY } = this.props
    const { style } = this.state
    return (
      <div
        className='component-cards--wrap'
        data-current-x={currentX}
        data-current-y={currentY}
        ref={ref => { this['wrap'] = ref }}
        style={style}
      >
        {this.renderCards()}
      </div>
    )
  }
}
