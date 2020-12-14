const { readFileSync } = require("fs")
const { sep } = require("path")

const parseData = (path) => {
    let input = path + sep + "input.txt"
    let test = path + sep + "test.txt"

    let raw = {
        test: readFileSync(test).toString(),
        input: readFileSync(input).toString(),
    }
    
    let preprocessed = {
        test: raw.test.split(/\r?\n\r?\n/),
        input: raw.input.split(/\r?\n\r?\n/)
    }
    if (preprocessed.test.length > 1 || preprocessed.input.length > 1 ) {
        return {
            test: preprocessed.test.map( el => {
                return el.replace(/\r?\n/g, " ").split(/\s/)
            }),
            input: preprocessed.input.map( el => {
                return el.replace(/\r?\n/g, " ").split(/\s/)
            })
        }
    }
    return {
        test: raw.test.split(/\r?\n/),
        input: raw.input.split(/\r?\n/),
    }
}

module.exports = parseData
