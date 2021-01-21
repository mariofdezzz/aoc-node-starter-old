
type Config = {
    name: string, 
    description: string
}

const getBody = (achieved: {}, maxCol: number) => {
    let body = ""
    
    for (const year in achieved) {
        let table = ""
        let completed = 0

        for (let day = 1; day <= 25; day++) {
            let stars = 0
            if (achieved[year].hasOwnProperty(day))
                stars = achieved[year][day]

            completed += stars
            table += `|**${day}: ` + 
                "🌟".repeat(stars) + 
                "🔒".repeat(2 - stars) + "**"
            
            if (day % maxCol == 0) table += "|\n"
            if (day == maxCol) table += "|---".repeat(maxCol) + "|\n"
        }

        body += `## ${year} \n\n🌟 ${completed}/50 \n\n${table}| \n`
    }
    return body
}

const readme = (config: Config, achieved: {}) => {
    const maxCol = 9;

    const header =  `# ${config.name}\n` +
                    `${config.description}\n\n`
    
    const body = getBody(achieved, maxCol) 
    
    return header + body
}

export default readme
