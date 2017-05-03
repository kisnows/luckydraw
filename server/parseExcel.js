/*
* Created on Tue May 02 2017
* author: kisnows
* email: yq12315@gmail.com
*/
const xlsx = require('node-xlsx')
const workSheetsFromFile = xlsx.parse(`${process.cwd()}/public/members.xlsx`)
const firstSheetName = workSheetsFromFile[0]
const members = firstSheetName.data
let i = 1
let titles = []
let objs = []
for (let member of members) {
  if (i === 1) {
    i++
    titles = member
  } else {
    const obj = {}
    for (let j = 0; j < member.length; j++) {
      obj[titles[j]] = member[j]
    }
    Object.keys(obj).length && objs.push(obj)
  }
}
module.exports = {
  titles: titles,
  objs: objs
}
