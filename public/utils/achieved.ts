import { readdirSync } from 'fs'
import read from './read'
const src: string = "../../src/"

const achieved = () => {
    const list = {};
    const years = readdirSync("./src").filter(dir => /^\d+$/.test(dir))
    
    years.forEach( year => {
        list[year] = {}
        let days = readdirSync("src/"+ year)
    
        days.forEach( day => {
            let number = day.match(/\d+/)
            let path = src + year +"/"+ day
            let count = 0

            const { part1, part2 }= require(path)
            const data = read("src/" + year +"/"+ day)
    
            if (part1(data)) ++count
            if (part2(data)) ++count
    
            list[year][number] = count
        })
    })
    return list
}

export default achieved
