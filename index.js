const fs = require('fs')

for (let i = 12; i <= 12; i ++) {
    const caso = i < 10 ? ('0' + i) : i.toString()
    const casefile = `./casos/caso${caso}.txt`

    console.log(`** reading file ${casefile} **`)

    const ranges = fs.readFileSync(casefile)
        .toString()
        .split('\n')
        .filter(e=>e)
        .map(e => {
            const range = e.split('-').map(e=>parseInt(e))
            const first = range[0]
            const last = range[1]
        
            return {first: first, last: last}
        })
        .sort((a, b) => a.first - b.first)

    console.log(ranges)
}