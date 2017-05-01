export function dataList(numbers) {
  const list = []
  for (let i = 0; i <= numbers; i++) {
    list.push({
      name: `a${i}`,
      gender: Math.random() >= 0.5 ? 0 : 1
    })
  }
  return list
}

export function random(from, to) {
  return Math.random() * (to - from) + from
}

export function trueRandom(form, to) {

}
