const fs = require("fs");
const path = require("path");
const sideBarConfig = require("./sidebars");
const basePath = "./docs";
const BUILD_TYPE = process.env.BUILD_TYPE || "COLLABORATE";
fs.writeFileSync("./build-config.js", `export const BUILD_TYPE = "${BUILD_TYPE}"`)

checkAndRemovePath = (obj) => {
    if (Array.isArray(obj)) {
        obj.forEach((filePath, index) => {
            if (typeof obj !== "string") {
                Object.values(obj).forEach(checkAndRemovePath)
                return;
            }
            filePath = path.join(basePath, `${filePath}.mdx`);
            let fileContent = fs.readFileSync(filePath);
            fileContent = fileContent.toString();
            if ((fileContent.indexOf("#COLLABORATE") !== -1 && BUILD_TYPE !== "COLLABORATE") !== -1 || (fileContent.indexOf("#CERTIFIED") && BUILD_TYPE !== "CERTIFIED")) {
                obj.splice(index, 1);
                console.log(obj)
                console.log("Hererere")
                fs.writeFileSync(filePath, "");
            }
        })
    }
    else if (typeof obj === "object") {
        Object.values(obj).forEach(checkAndRemovePath)
    }
}
checkAndRemovePath(sideBarConfig);
// console.log(sideBarConfig)
fs.writeFileSync('./sidebars.js', `module.exports = ${JSON.stringify(sideBarConfig, null, 2)}`)