const FileManager = require('./fileManager')

const results = []
const fm = new FileManager()

var cases = 0
const oStart = process.hrtime()
for (let i = 13; i <= 25; i ++) {
    const caso = i < 10 ? ('0' + i) : i.toString()
    const casefile = `./cases/caso${caso}.txt`
    
    console.log(`** CASE ${caso} STARTED. **`)
    
    const iStart = process.hrtime()
    const filter = []
    const list = fm.toArray(casefile)
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

    cases ++

    fm.writeLn(`./filtered/caso${caso}.txt`, filter.map(e => `${e.first}-${e.last}`))
}

const oEnd = process.hrtime(oStart)
console.log(`Filtered ${cases} lists in ${oEnd} seconds.\n`)