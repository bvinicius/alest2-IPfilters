class FileManager {
    fs = require('fs')
    
    /**
     * Given a local file path, this method returns an array splitted by line, omitting blank lines.
     * @param file the file about to be read.
     * @returns an array which each item is a file line.
     */
    toArray(filepath) {
        return this.fs.readFileSync(filepath)
            .toString()
            .split('\n')
            .filter(e => e)
    }

    /**
     * Given an array, this method creates/overwrites a file registering the array's data, one item per line.
     * @param {*} filepath path to the file to be written/created.
     * @param {*} array data to be registered.
     */
    writeLn(filepath, array) {
        this.fs.writeFileSync(filepath, '')
        array.forEach(e => {
          this.fs.appendFileSync(filepath, `${e}\n`)  
        })
    }
}

module.exports = FileManager