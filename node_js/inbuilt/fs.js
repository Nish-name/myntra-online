let fs =require('fs');
//write file
/*fs.writeFile('my file.txt','Nodejs Fs package',()=>{
    console.log('File Created')
})  */

//fs.appendFile('my Text.txt','this is node fs code \n',()=>{
 //  console.log('File Created')
// })

/* read file */
 /* fs.readFile('myText.txt','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data)
})  */

fs.readFile('data.json','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data)
})

