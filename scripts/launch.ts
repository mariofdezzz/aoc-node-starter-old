import { resolve } from "path"
import { read } from '../public/utils'

let path = process.argv[2]
const { part1, part2 } = require(`../${path}`)
const data = read(resolve(`./${path}`))

// === Results ===
console.time("Time")
const result1 = part1(data)
const result2 = part2(data)
console.timeEnd("Time")

console.log("Solution to part 1:", result1)
console.log("Solution to part 2:", result2)
