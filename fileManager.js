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
}

module.exports = FileManager