"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
console.log("__dirname", __dirname);
console.log("CWD:", process.cwd());
console.log("INIT_CWD:", process.env.INIT_CWD);
console.log("PWD", process.env.PWD);
console.log("PWD", process.env.PWD);
const parentPath = path.resolve(process.cwd(), "..", "..");
console.log("PATH:", parentPath);
const icd10xml = fs.readFileSync(path.resolve(parentPath) + "/data/icdClaML2016ens.xml");
console.log("FILE:", fs.readFileSync(path.join(parentPath + "/package.json"), "utf8"));
console.log("PARSE:", JSON.parse(fs.readFileSync(path.join(parentPath + "/package.json"), "utf8")));
console.log(icd10xml);
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("init");
    try {
        console.log("get xml");
        const classificationJson = yield xml2js.parseStringPromise(icd10xml);
        console.log(classificationJson);
        fs.writeFileSync("icdClass.json", JSON.stringify(classificationJson, null, 2));
        console.log("Done");
    }
    catch (err) {
        console.error(err);
    }
}))();
