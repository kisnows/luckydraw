import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import './CardWrap.css'
import Square from '../utils/Square'
import { dataList } from '../utils/generate'
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
    const $wrap = findDOMNode(this.wrap)
    const $card = $wrap.getElementsByClassName('component-card')[0]
    const wrapStyles = window.getComputedStyle($wrap)
    const cardStyles = window.getComputedStyle($card)
    const cardWidth = parseInt(cardStyles.width, 10)
    // const cardHeight = parseInt(cardStyles.height, 10)
    const width = Math.max(parseInt(wrapStyles.width, 10), parseInt(wrapStyles.height, 10)) * 0.8
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
    const { currentX, currentY } = this.props
    return this.props.objList.map(function (v) {
      return <Card
        key={v.name}
        title={v.name}
        des={v.gender}
        coordinate={v.coordinate}
        style={cardStyle}
        isX={currentX === v.coordinate.x}
        isY={currentY === v.coordinate.y}
      />
    })
  }

  render() {
    const { currentX, currentY } = this.props
    const { style } = this.state
    return (
      <section
        className='component-cards--wrap'
        data-current-x={currentX}
        data-current-y={currentY}
        ref={ref => { this['wrap'] = ref }}
        style={style}
      >
        {this.renderCards()}
      </section>
    )
  }
}
