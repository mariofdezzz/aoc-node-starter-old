const inquirer = require("inquirer")
const { writeFileSync } = require("fs")

console.log(`
\x1b[32m █████╗  ██████╗  ██████╗
██╔══██╗██╔═══██╗██╔════╝
███████║██║   ██║██║     
██╔══██║██║   ██║██║     
██║  ██║╚██████╔╝╚██████╗
╚═╝  ╚═╝ ╚═════╝  ╚═════╝
\x1b[33m---= \x1b[36mAdvent of Code\x1b[33m =---
------------------------\x1b[0m\n`)

inquirer
    .prompt([
        {
            type: "list",
            name: "compiler",
            message: "What language do you prefer?",
            choices: [
                {
                    name: "JavaScript",
                    value: "js",
                },
                {
                    name: "TypeScript",
                    value: "ts",
                },
            ],
        },
        {
            type: "number",
            name: "year",
            message: "Which year are you going to solve?",
            default: new Date().getFullYear(),
        },
        {
            type: "input",
            name: "name",
            message: "What name do you want to display inside README?",
            default: "Advent Of Code",
        },
        {
            type: "input",
            name: "description",
            message: "What description do you want to display inside README?",
            default: "🎄 My Advent Of Code solutions.",
        },
    ])
    .then((ans) => {
        writeFileSync("public/settings.json", JSON.stringify(ans, null, 4))
        console.log("\x1b[32mSettings saved! \x1b[0m")
    })
