/*
* Created on Tue May 02 2017
* author: kisnows
* email: yq12315@gmail.com
*/
const xlsx = require('node-xlsx')
const workSheetsFromFile = xlsx.parse(`${process.cwd()}/public/members.xlsx`)
const firstSheetName = workSheetsFromFile[0]

module.exports = firstSheetName
