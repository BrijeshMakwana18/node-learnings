const spawn = require("child_process").spawn;

//File
const filePath = "path";
const fileName = "archive.zip";

const zipFile = () => {
  zip = spawn("zip", ["-P", "pwd", filePath, filePath + fileName]);
  zip.on("exit", function (code) {
    console.log("Archive Completed");
  });
};

zipFile();
