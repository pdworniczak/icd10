"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
console.log("__dirname", __dirname);
console.log("CWD:", process.cwd());
console.log("INIT_CWD:", process.env.INIT_CWD);
console.log("PWD", process.env.PWD);
console.log("PWD", process.env.PWD);
console.log("PATH:", path.resolve(process.cwd(), "..", ".."));
const icd10xml = fs.readFileSync(path.resolve(process.cwd(), "..", "..") + "/data/icdClaML2016ens.xml");
console.log(icd10xml);
// (async () => {
//   console.log("init");
//   try {
//     console.log("get xml");
//     const classificationJson = await xml2js.parseStringPromise(icd10xml);
//     console.log(classificationJson);
//     fs.writeFileSync("icdClass.json", JSON.stringify(classificationJson, null, 2));
//     console.log("Done");
//   } catch (err) {
//     console.error(err);
//   }
// })();
throw Error("post fail");
