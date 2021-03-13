const pages = require("./pages"); // 加载多页配置

function getEntry() {
  const entry = {};
  for (const key in pages) {
    entry[key] = pages[key].js; 
  }
  return entry;
  
}
console.log(getEntry());
