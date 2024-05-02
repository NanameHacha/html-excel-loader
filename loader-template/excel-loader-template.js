import {loadRemoteFile} from "/web-static/javascript/main.js"
window.addEventListener('load', (/*event*/) => {
  let url ="https://aicwiki.com/zh_cn/assets/excel/template/template.xlsx";
  let elementId = "template-x";
  loadRemoteFile(url,elementId);
});