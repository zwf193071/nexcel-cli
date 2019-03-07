'use strict'
const xlsx = require('node-xlsx')
const fs = require('fs')
const { listTable } = require(`${__dirname}/../utils`)

const data = [
    {
        name: 'sheet 1',
        data : [
            ['name', 'sex', 'age'],
            ['Lucy Twins', 'female', '20'],
            ['Mike Brute', 'male', '21'],
        ]
    }
]

let buffer = xlsx.build(data)
fs.writeFile('./result.xls', buffer, function (err) {
    if (err) console.log(err)
    //TODO 中文数据展示的效果不好
    listTable(data[0].data, 'New result.xls has been created successfully!')
})