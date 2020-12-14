require('module-alias/register')
const { resolve } = require("path")
const { parseData } = require("@utils")

let day = process.argv[2]
const { part1, part2 } = require(`../src/2020/${day}`)
const data = parseData(resolve(`./src/2020/${day}`))

// === Results ===
console.time("Time")
const result1 = part1(data)
const result2 = part2(data)
console.timeEnd("Time")

console.log("Solution to part 1:", result1)
console.log("Solution to part 2:", result2)
