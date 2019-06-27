const fs = require('fs')
//判断文件是否存在 可读 等状态 R_OK W_OK X_OK（可执行）
const  accessAsync = function(dir, status = fs.constants.F_OKstatus){//官方不推荐先判断状态 再操作  可用于状态判断
    return new Promise((resolve)=>{
        fs.access(dir, status, (err) => {
            resolve(`${err ? 0:1}`) 
        });     
    })
}
const  mkdirAsync = function(dir){
    return new Promise((resolve,reject)=>{
        fs.mkdir(dir, {recursive: true}, (err) => {//recursive: true 无论路径存不存在 都会创建
            if(err) return reject(err)
            resolve('创建成功')
        });     
    })
}
//创建目录
async function mkdir(dir)
{
    await mkdirAsync(dir)
}
module.exports = {
    mkdir,
    accessAsync,
}