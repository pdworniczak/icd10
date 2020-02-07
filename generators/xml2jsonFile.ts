import * as fs from "fs";
import * as path from "path";

const xml2js = require("xml2js");

console.log("__dirname", __dirname);
console.log("CWD:", process.cwd());
console.log("INIT_CWD:", process.env.INIT_CWD);
console.log("PWD", process.env.PWD);
console.log("PWD", process.env.PWD);

const parentPath = path.resolve(process.cwd(), "..", "..");

console.log("PATH:", parentPath);

const icd10xml = fs.readFileSync(
  path.resolve(parentPath) + "/data/icdClaML2016ens.xml"
);

console.log(
  "FILE:",
  fs.readFileSync(path.join(parentPath + "/package.json"), "utf8")
);
console.log(
  "PARSE:",
  JSON.parse(fs.readFileSync(path.join(parentPath + "/package.json"), "utf8"))
);

console.log(icd10xml);

(async () => {
  console.log("init");
  try {
    console.log("get xml");
    const classificationJson = await xml2js.parseStringPromise(icd10xml);
    console.log(classificationJson);
    fs.writeFileSync(
      "icdClass.json",
      JSON.stringify(classificationJson, null, 2)
    );
    console.log("Done");
  } catch (err) {
    console.error(err);
  }
})();
