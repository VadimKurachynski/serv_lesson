const fs=require('fs');
fs.readFile('./test.txt',(error,data)=>{
    fs.mkdir("./files",()=>{
        fs.writeFile("./files/test2.txt",data,()=>{
        })
    })
});
