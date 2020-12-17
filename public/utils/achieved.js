const { readdirSync } = require("fs")
const parseData = require("./parseData")
const src = "../../src/"

const achieved = () => {
    const list = {};
    const years = readdirSync("./src").filter(dir => /^\d+$/.test(dir))
    
    years.forEach( year => {
        list[year] = {}
        days = readdirSync("src/"+ year)
    
        days.forEach( day => {
            let number = day.match(/\d+/)
            let path = src + year +"/"+ day
            let count = 0

            const { part1, part2 }= require(path)
            const data = parseData("src/" + year +"/"+ day)
    
            if (part1(data)) ++count
            if (part2(data)) ++count
    
            list[year][number] = count
        })
    })
    return list
}

module.exports = achieved