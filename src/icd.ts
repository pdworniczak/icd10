const json = require("../../icdClass.json");

const CATEGORY = "category";
const BLOCK = "block";
const CHAPTER = "chapter";

function find(code: string) {
  return json.ClaML.Class.find((obj: any) => obj.$.code === code);
}

function getCodeList(kind: string) {
  return json.ClaML.Class.filter((obj: any) => obj.$.kind === kind).map(
    (obj: any) => obj.$.code
  );
}

function getChapterList() {
  return getCodeList(CHAPTER);
}

function getBlockList() {
  return getCodeList(BLOCK);
}

function getCategoryList() {
  return getCodeList(CATEGORY);
}

export default {
  // json,
  find,
  getChapterList,
  getBlockList,
  getCategoryList
};
