import { readFileSync } from 'fs'
import { sep } from 'path'

const read = (path: string) => {
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

export default read
