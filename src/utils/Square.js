/**
 * create by kisnows
 * 2017-4-22
 */
export default class Square {
  constructor(list) {
    if (!list instanceof Array) throw new Error('List Must be a Array ')
    this.list = list
    this.sideLength = 0
  }

  getSideLength() {
    const length = this.list.length
    this.sideLength = Math.floor(Math.sqrt(length))
    return this
  }
  
  setCoordinate() {
    this.getSideLength()
    this.list.forEach((v, k) => {
      let x, y
      x = k % this.sideLength
      y = Math.floor(k / this.sideLength)
      v.coordinate = {
        x,
        y
      }
    })
  }
  getLastCoordinate() {
    return this.list[this.list.length - 1].coordinate
  }
}