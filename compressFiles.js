const fs = require("fs");
const crypto = require("crypto");
const spawn = require("child_process").spawn;

//File
const filePath = "path";
const fileName = "archive.zip";
const pas = "";

//Configs
const password = "pwd";
let salt = "salt";
const key = crypto.scryptSync(password, salt, 32);
const iv = Buffer.alloc(16, 0);

const encrypt = () => {
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  var input = fs.createReadStream(filePath + fileName);
  var output = fs.createWriteStream(filePath + fileName + ".enc");

  input.pipe(cipher).pipe(output);

  output.on("error", (err) => {
    console.log("Error in Encryption", err);
  });

  output.on("finish", function () {
    console.log("Encrypted file written to disk!");
  });
};

const zipFile = () => {
  zip = spawn("zip", [
    "-P",
    "lanaRHkarlaKUdaniDAcharlotteSTaddieAN@jiaLI_adelMO@SybilAStacyCruzMiaMelanoKaisaNordKiaraLord",
    filePath,
    filePath + fileName,
  ]);
  zip.on("exit", function (code) {
    console.log("Archive Completed");
  });
};

// zipFile();
// encrypt();
console.log(pas.length);
