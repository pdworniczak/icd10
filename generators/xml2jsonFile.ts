import { readFileSync, writeFileSync } from "fs";

const xml2js = require("xml2js");

try {
  console.log("__dirname", __dirname);
  console.log("CWD:", process.cwd());
  console.log("INIT_CWD:", process.env.INIT_CWD);
  console.log("PWD", process.env.PWD);
  console.log("PWD", process.env.PWD);
} catch (err) {
  console.log("Err: ", err);
}

const icd10xml = readFileSync(
  process.cwd() + "/data/icdClaML2016ens/icdClaML2016ens.xml"
);

// console.log(icd10xml);

// (async () => {
//   console.log("init");
//   try {
//     console.log("get xml");
//     const classificationJson = await xml2js.parseStringPromise(icd10xml);
//     console.log(classificationJson);
//     writeFileSync("icdClass.json", JSON.stringify(classificationJson, null, 2));
//     console.log("Done");
//   } catch (err) {
//     console.error(err);
//   }
// })();

throw Error("post fail");
