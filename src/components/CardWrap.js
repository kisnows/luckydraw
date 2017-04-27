import React, { PropTypes } from 'react'
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
      x: 0,
      y: 0,
      style: {
        width: 200,
        height: 200,
        cardStyle: {
          width: 20,
          height: 20
        }
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
    const width = Math.max(window.innerWidth, window.innerHeight)
    const vWidth = width / this.props.sideLength
    
  }

  renderCards = () => {
    return this.props.objList.map(function (v) {
      return <Card
        key={v.name}
        title={v.name}
        des={v.gender}
        coordinate={v.coordinate}
      />
    });
  }

  render() {
    const { currentX, currentY } = this.props
    return (
      <div className='component-cards--wrap' data-current-x={currentX} data-current-y={currentY}>
        {this.renderCards()}
      </div>
    )
  }
}