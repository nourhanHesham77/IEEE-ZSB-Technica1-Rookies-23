
let mainarr=[[],[],[]];
for(var i=0;i<3;i++){
     for(var j=0;j<3;j++){
         mainarr[i][j]=0;
     }
 }
function getcoun(i,j,z){
   mainarr[i][j]+=z;
   if(j+1<3){
       mainarr[i][j+1]+=z;
   }
   if(j-1>-1){
       mainarr[i][j-1]+=z;
   }
   if(i+1<3){
       mainarr[i+1][j]+=z;
   }
   if(i-1>-1){
       mainarr[i-1][j]+=z;
   }
  
}
function processData(input) {
 
  var newarr=input.split("\r\n");

 var r1=newarr[0].split(" ");
 var r2=newarr[1].split(" ");
 var r3=newarr[2].split(" ");
 


 let light=[r1,r2,r3];
 
 var sum;
 for(i=0;i<3;i++){
     for(let j=0;j<3;j++){
         var z=Number(light[i][j]);
     getcoun(i,j,z);
 }
 }
 for(let i=0;i<3;i++){
     for(let j=0;j<3;j++){
        if(mainarr[i][j]%2===0){
            mainarr[i][j]=1;
        }else{
            mainarr[i][j]=0;
        }
 }
 }
 
 var fin1=mainarr[0].join("");
 var fin2=mainarr[1].join("");
 var fin3=mainarr[2].join("");
 console.log(fin1+"\n"+fin2+"\n"+fin3);



}

process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
   _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
