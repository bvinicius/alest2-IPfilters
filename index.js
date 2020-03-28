const fs = require('fs')
const oStart = process.hrtime()

var cases = 0
for (let i = 0; i <= 3; i ++) {
    const iStart = process.hrtime()
    const caso = i < 10 ? ('0' + i) : i.toString()
    const casefile = `./casos/caso${caso}.txt`

    console.log(`** CASE ${caso} STARTED. **`)

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
    
    while (true) {
        const prev = ranges.length
        for (let i = 0; i < ranges.length; i ++) {
            const curr = ranges[i]
            for (let j = i; j < ranges.length; j ++) {
                const next = ranges[j]
                if (next.first - curr.last <= 1 && next.last > curr.last) {
                    curr.last = next.last
                    ranges.splice(j, 1)
                } else if (next.last < curr.last) {
                    ranges.splice(j, 1)
                }
            }
        }
        if (ranges.length === prev) break 
    }
    console.log(`case ${caso} length: ${ranges.length}`)
    const iEnd = process.hrtime(iStart)

    console.log(`case ${caso} runtime: ${iEnd} seconds. \n`)

    cases ++
}

const oEnd = process.hrtime(oStart)
console.log(`finished ${cases} cases in ${oEnd} seconds.`)