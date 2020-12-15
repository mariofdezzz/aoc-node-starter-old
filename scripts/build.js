require('module-alias/register')
const { achieved, readme } = require("@utils")

console.time("README generated in")
readme(achieved())
console.timeEnd("README generated in")