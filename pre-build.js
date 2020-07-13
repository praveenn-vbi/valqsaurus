const fs = require("fs");
const path = require("path");
const sideBarConfig = require("./sidebars");
const basePath = "./docs";
const BUILD_TYPE = process.env.BUILD_TYPE || "COLLABORATE";
fs.writeFileSync("./build-config.js", `export const BUILD_TYPE = "${BUILD_TYPE}"`)

checkAndRemovePath = (obj) => {
    if (Array.isArray(obj)) {
        obj.forEach((filePath, index) => {
            if (typeof filePath !== "string") {
                Object.values(filePath).forEach(checkAndRemovePath)
                return;
            }
            filePath = path.join(basePath, `${filePath}.mdx`);
            if (!fs.existsSync(filePath)) {
                console.log(`Warning: ${filePath} file node found`)
                return;
            }
            let fileContent = fs.readFileSync(filePath);
            if ((fileContent.indexOf("#COLLABORATE") !== -1 && BUILD_TYPE !== "COLLABORATE") || (fileContent.indexOf("#CERTIFIED") !== -1 && BUILD_TYPE !== "CERTIFIED")) {
                obj.splice(index, 1);
                if (process.env.NODE_ENV === "production") {
                    fs.writeFileSync(filePath, "");
                }
            }
        })
    }
    else if (typeof obj === "object") {
        Object.values(obj).forEach(checkAndRemovePath)
    }
}
checkAndRemovePath(sideBarConfig);
// console.log(sideBarConfig)
fs.writeFileSync('./sidebars-gen.js', `module.exports = ${JSON.stringify(sideBarConfig, null, 2)}`)