const fs=require('fs');
fs.readFile('./test.txt',(error,data)=>{
    console.log(data.toString());
    fs.writeFile("./test2.txt",data,()=>{

    })
});