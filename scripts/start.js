const os = require("os")
const { spawn } = require("child_process")
const { existsSync, readdirSync, readFileSync } = require("fs")
const { cp, mkdir } = require("shelljs")

const config = JSON.parse(readFileSync("public/settings.json").toString())
const day = process.argv[2]

if (!existsSync("./src")) mkdir("src")

const years = readdirSync("./src")

if (!years.includes(config.year)) mkdir(`src/${config.year}`)

const days = readdirSync(`src/${config.year}`)

if (!days.includes(day)) {
    console.log(`Creating file structure for ${day}...`)
    cp("-r", `public/template/${config.compiler}`, `src/${config.year}/${day}`)
}

const nodemonExecutablePath =
    os.platform() === "win32" ? "node_modules\\.bin\\nodemon.cmd" : "nodemon"

spawn(
    nodemonExecutablePath,
    [
        "--quiet",
        "-e",
        "js,txt",
        `scripts/launch.js`,
        `src/${config.year}/${day}`,
    ],
    {
        stdio: "inherit",
    }
)
