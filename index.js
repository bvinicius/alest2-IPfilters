const FileManager = require('./fileManager')

const oStart = process.hrtime()
const results = []

var cases = 0
for (let i = 0; i <= 12; i ++) {
    const iStart = process.hrtime()
    const caso = i < 10 ? ('0' + i) : i.toString()
    const casefile = `./cases/caso${caso}.txt`

    console.log(`** CASE ${caso} STARTED. **`)
    
    const filter = []

    const list = new FileManager()
        .toArray(casefile)
        .map(e => {
            const range = e.split('-').map(e=>parseInt(e))
            const first = range[0]
            const last = range[1]
        
            return {first: first, last: last}
        })
        .sort((a, b) => a.first - b.first)
    
    list.forEach(e => {
        if (filter.length) {
            const top = filter[filter.length - 1]

            if (e.first - top.last <= 1 && e.last > top.last) 
                top.last = e.last
            else if (e.last > top.last) 
                filter.push(e)

        } else {
            filter.push(e)  
        }
    })

    const iEnd = process.hrtime(iStart)
    console.log(`case ${caso} length: ${filter.length}`)
    console.log(`case ${caso} exec time: ${iEnd}\n`)

    results.push(`${list.length};${iEnd}`)
    cases ++
}

const oEnd = process.hrtime(oStart)
console.log(`finished ${cases} cases in ${oEnd} seconds.\n`)
console.log('RESULTS -> ', results)