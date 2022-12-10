//sample test cases passed .........but there is time limit errors in this code (sorry for that)
//trying to improve it with linked list to avoid these errors but still..




// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
//    main(stdin_input);
   removeFriends(stdin_input);
});

function main(input) {
    // process.stdout.write("Hi, " + input + ".\n");
         // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
function removeFriends(input){
   
    var txtArray=input.split('\n');
        var arr=[];
for(var i=1;i<txtArray.length;i++){
var x=txtArray[i];
var myArr1 = String(x).split(" ").map((x)=>{
return Number(x);
})
arr.push(myArr1);
}
    for(var k=0;k<arr.length;k+=2){
     var num=arr[k][1];
     var elminated=[];
    while(elminated.length<num){
      for(var i=0;i<arr[k+1].length;i++){
        while(arr[k+1][i]<=arr[k+1][i+1]){
           var deleted= arr[k+1].splice(i, 1);
           elminated.push(Number(deleted));
        }
        if(elminated.lenght==0){
            arr[k+1].pop();
        }
      }
    }
      console.log(arr[k+1].join(" "));

}


}