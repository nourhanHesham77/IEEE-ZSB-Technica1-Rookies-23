

function processData(input) {
    //Enter your code here

  var nyear=input;
  var theyear;
  while(true){
      nyear++;
      var f=parseInt(nyear/1000);
      var s=parseInt(nyear/100 %10);
      var t=parseInt(nyear/10 %10);
      var rth=parseInt(nyear%10);
      if(f!=s&&f!=t&&f!=rth&&s!=t&&t!=rth&&s!=rth){
          theyear=nyear;
           break;
      }
  }
  console.log(theyear);


}

process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
