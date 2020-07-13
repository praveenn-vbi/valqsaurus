const fs = require("fs");
const path = require("path");
const sideBarConfig = require("./sidebars");
const basePath = "./docs";
const BUILD_TYPE = process.env.BUILD_TYPE || "COLLABORATE";
fs.writeFileSync("./build-config.js", `export const BUILD_TYPE = "${BUILD_TYPE}"`)

checkAndRemovePath = (obj) => {
    if (Array.isArray(obj)) {
        obj.forEach((filePath, index) => {
            filePath = path.join(basePath, `${filePath}.mdx`);
            let fileContent = fs.readFileSync(filePath);
            fileContent = fileContent.toString();
            if ((fileContent.indexOf("#COLLABORATE") && BUILD_TYPE !== "COLLABORATE") || (fileContent.indexOf("#CERTIFIED") && BUILD_TYPE !== "CERTIFIED")) {
                obj.splice(index, 1);
                fs.writeFileSync(filePath, "");
            }
        })
    }
    else if (typeof obj === "object") {
        Object.values(obj).forEach(checkAndRemovePath)
    }
}
checkAndRemovePath(sideBarConfig);
fs.writeFileSync('./sidebars.js', `module.exports = ${JSON.stringify(sideBarConfig, null, 2)}`)