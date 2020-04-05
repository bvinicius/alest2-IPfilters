const fs = require('fs')
const oStart = process.hrtime()

var cases = 0
for (let i = 0; i <= 12; i ++) {
    const iStart = process.hrtime()
    const caso = i < 10 ? ('0' + i) : i.toString()
    const casefile = `./cases/caso${caso}.txt`

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
    
    const filter = []
    ranges.forEach((e) => {
        if (filter.length) {
            put(filter, e, filter.length - 1)
        } else {
            filter.push(e)
        }
    })

    console.log(`case ${caso} length: ${filter.length}`)
    const iEnd = process.hrtime(iStart)

    console.log(`case ${caso} runtime: ${iEnd} seconds. \n`)

    cases ++
}

function put(arr, e, i) {
    if (i < 0) return
    if (e.first > arr[i].last) {
        arr.push(e)
        return
    }
    
    if (e.first - arr[i].last <= 1 && e.last > arr[i].last) {
        arr[i].last = e.last
        return
    }
    else put(arr, e, i - 1)
}

const oEnd = process.hrtime(oStart)
console.log(`finished ${cases} cases in ${oEnd} seconds.`)