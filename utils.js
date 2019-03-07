const Table = require('cli-table')
const chalk = require('chalk')


function listTable (tplArr, lyric) {
    const len = tplArr.length
    if (len) {
        const table = new Table({
            head: tplArr[0],
            style: {
              head: ['green']
            }
        })
        if(len > 1) {
            for (let i = 1; i < len; i++) {
                table.push(tplArr[i])
                if (table.length === len - 1) {
                    console.log(table.toString())
                    if (lyric) {
                      console.log(chalk.green(`\u2714 ${lyric}`))
                    }
                    process.exit()
                  }
            }
        } else {
            console.log(table.toString())
            if (lyric) {
              console.log(chalk.green(`\u2714 ${lyric}`))
            }
            process.exit()
          }
    }
}

exports.listTable = listTable
