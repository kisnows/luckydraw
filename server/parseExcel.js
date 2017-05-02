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
let title = []
let objs = []
for (let member of members) {
  if (i === 1) {
    i++
    title = member
  } else {
    const obj = {}
    for (let j = 0; j < member.length - 1; j++) {
      obj[title[j]] = member[j]
    }
    Object.keys(obj).length && objs.push(obj)
  }
}
module.exports = {
  title: title,
  objs: objs
}
