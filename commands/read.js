'use strict'
const { prompt } = require('inquirer')
const xlsx = require('node-xlsx')
const { listTable } = require(`${__dirname}/../utils`)

const question = [
    {
      type: 'input',
      name: 'name',
      message: 'Choose the xls file to read in the root directory',
      validate (val) {
        if (val === '') {
          return 'The name of file is required!'
        } else {
          return true
        }
      }
    }
]
module.exports = prompt(question).then(({ name }) => {
    const data = xlsx.parse('./' + name + '.xls');
    listTable(data[0].data, name + '.xls has been read successfully!')
})