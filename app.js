const fs=require('fs').promises;

async function readAndWrite(){
    try{
       await fs.writeFile('promiseAsync.js','function name(){console.log("this is your name ")}  name();');
       const file=await fs.readFile('promiseAsync.js','utf8');

       console.log(file);
    }
    catch(err){
       if(err){
        console.log("there was an error retrieving your file");
        console.log(err);
       }
    }


}

readAndWrite();



