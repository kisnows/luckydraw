import React from 'react'
import { findDOMNode } from 'react-dom'
import './CardWrap.css'
import Card from './Card'
import PropTypes from 'prop-types'

export default class CardWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.props.currentX || 0,
      y: this.props.currentY || 0,
      cardStyle: {
        scale: 1,
        width: 100,
        height: 100
      },
      style: {
        width: 'auto',
        height: 'auto'
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
    const _this = this
    const { width, vWidth, scale } = this.init()
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
    window.addEventListener('resize', function () {
      const { width, vWidth, scale } = _this.init()
      _this.setState({
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
    }, false)
  }

  init = () => {
    const { sideLength } = this.props
    const $wrap = findDOMNode(this.wrap)
    console.log(parseInt($wrap.offsetWidth, 10), parseInt($wrap.offsetHeight, 10))
    const width = Math.min(parseInt($wrap.offsetWidth, 10), parseInt($wrap.offsetHeight, 10))
    const vWidth = width / sideLength
    return {
      width,
      vWidth
    }
  }
  renderCards = () => {
    const { cardStyle } = this.state
    const { currentX, currentY } = this.props
    const titles = this.context.titles
    return this.props.objList.map(function (v) {
      return <Card
        key={v[titles[1]]}
        data={v}
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

CardWrap.contextTypes = {
  titles: PropTypes.array
}
