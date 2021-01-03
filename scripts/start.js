const os = require("os")
const { spawn } = require("child_process")
const { existsSync, readdirSync, readFileSync } = require("fs")
const { cp, mkdir } = require("shelljs")

/* --- Start --- */
const start = () => {
    /* --- Data --- */
    const config = JSON.parse(readFileSync("public/settings.json").toString())
    const day = process.argv[2]

    /* --- Path Check --- */
    if (!existsSync("./src")) mkdir("src")

    const years = readdirSync("./src")

    if (!years.includes(config.year + "")) mkdir(`src/${config.year}`)

    const days = readdirSync(`src/${config.year}`)

    /* --- Template --- */
    if (!days.includes(day)) {
        console.log(`\x1b[36mCreating file structure for ${day}... \x1b[0m`)
        cp(
            "-r",
            `public/template/${config.compiler}`,
            `src/${config.year}/${day}`
        )
    }

    /* --- Execution --- */
    const npx =
        os.platform() === "win32"
            ? "npx.cmd"
            : "npx"

    spawn(
        npx,
        [
            "nodemon",
            "--quiet",
            "-e",
            "js,ts,txt",
            `scripts/launch.ts`,
            `src/${config.year}/${day}`,
        ],
        {
            stdio: "inherit",
        }
    )
}

/* --- Config --- */
if (!existsSync("public/settings.json")) {
    const init = spawn("npm", ["run", "init"], {
        shell: true,
        stdio: "inherit",
    })
    init.on("close", () => {
        start()
    })
} else {
    start()
}
