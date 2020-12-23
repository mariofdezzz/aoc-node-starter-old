const { readFileSync } = require("fs")
const { sep } = require("path")

const parseData = (path) => {
    let input = path + sep + "input.txt"
    let test = path + sep + "test.txt"

    let raw = {
        test: readFileSync(test).toString(),
        input: readFileSync(input).toString(),
    }
    
    return {
        test: raw.test.split(/\r?\n/),
        input: raw.input.split(/\r?\n/),
    }
}

module.exports = parseData
