

function processData(input) {
    //Enter your code here
   var arr=input.split("");
//   const stack = [];
// const map = new Map([
// ['.', '0'],
// ['-.', '1'],
// ['--', '2']
// ]);
var num=[];
var j=0;
for(let i=0;i<arr.length;i++){
  
    if(arr[i]=="-"){
        if(arr[i+1]=="-"){
           
            num.push('2');
        }else if(arr[i+1]=="."){
           
             num.push('1');
        }
        j++;
        i++;
    }else if(arr[i]=="."){
        
         num.push('0');
        j++;
        
    }
}

    var oarr=num.join("");
     console.log(oarr);
   
    
}

process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
