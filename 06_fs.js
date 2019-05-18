const fs = require('fs');

fs.readFile('./06_fs.js',(err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});