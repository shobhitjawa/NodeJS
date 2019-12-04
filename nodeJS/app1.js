const path=require('path');
var pathObj=path.parse(__filename);
console.log(pathObj);

const os=require('os');
var totalmemory=os.totalmem();
var freememory=os.freemem();
console.log('total memory :'+ totalmemory);
console.log('freememory :'+ freememory);
console.log(`Total Memory : ${totalmemory}`);
console.log(`Free Memory :${freememory}`);

const fs=require('fs');
const files=fs.readdirSync('./');  //synchronus or blocking  
console.log(files);

const files1=fs.readdirSync('./new');       //synchronus or blocking input/output
console.log(files1);

fs.readdir('./',function(err,outy){
if(err) 
console.log('Error',err);
else
console.log('Result :'+outy);
});

const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on('messageLoggedBaby',function()
{
        console.log('Listener Called');
});
emitter.emit('messageLoggedBaby');

 emitter.on('arps',(arg)=>{
     console.log('Listenercalled',arg);
 });
 emitter.emit('messageLoggedBaby');