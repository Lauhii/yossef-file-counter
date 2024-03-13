import fs from "fs/promises";

async function fileCounter(path) {
  let fileCount = 0;
  let data = await fs.readdir(path);
  for(const dirent of data){
    const newPath = `${path}/${dirent}`
    const info = await fs.stat(newPath)
      
    if(info.isDirectory()){
      fileCount += await fileCounter(newPath);
    }
    else if(info.isFile()){
        fileCount++;   
    }
  }
  // console.log(fileCount)
  return fileCount;
  
  // console.log(data)
  
}
const DIR  = "node_modules";
fileCounter(DIR)
  .then((filesCount) => console.log(`total files : ${filesCount}`))
  .catch((err) => (console.error(err)))
  

//   folderPaths.forEach((folderPath => {
//     const results = fs.readdirSync(folderPath,{withFileTypes:true})
//     const folders = results.filter((res) => {
//     return fs.lstatSync(path.resolve(folderPath, res)).isDirectory()
//     })
//     const innerfolderPaths = folders.map(folder => path.resolve(folderPath,folder))
//     if(folderPaths.length === 0){
//       return
//     }
//     console.log(results);
//     innerfolderPaths.forEach(innerFolder => {if(innerFolder.isFile()){console.log("isstat")}})}))
    


// }

