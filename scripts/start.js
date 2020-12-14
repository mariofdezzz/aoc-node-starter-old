const os = require("os")
const { spawn } = require("child_process")
const { existsSync, readdirSync } = require("fs")
const { cp, mkdir } = require("shelljs")

const day = process.argv[2]

if (!existsSync("./src")) mkdir("src")

const years = readdirSync("./src")

if (!years.includes("2020")) mkdir("src/2020")

const days = readdirSync("./src/2020")

if (!days.includes(day)) {
    console.log(`Creating file structure for ${day}...`)
    cp("-r", "public/template", `src/2020/${day}`)
}

const nodemonExecutablePath =
    os.platform() === "win32" ? "node_modules\\.bin\\nodemon.cmd" : "nodemon"

spawn(nodemonExecutablePath, ["-e", "js,txt", `scripts/launch.js`, `${day}`], {
    stdio: "inherit",
})
