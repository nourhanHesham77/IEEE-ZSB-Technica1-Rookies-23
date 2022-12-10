let i = ''
process.stdin.on('data', c => i += c)
process.stdin.on('end', () => {
    const {EOL} = require('os')
    const lines = i.split(EOL) /*your input text, split by lines*/
    var arr1=lines[0].split(" ");
    var arr2=lines[1].split(" ");
    var x1 = arr1[0]; 
    var x2 = arr1[1];
    numdays(x1,x2,arr2);
})

function numdays(n,t,arr){
    var tday=86400;
    var count=0;
    for(var i=0;i<n;i++){
        var cnt = tday - arr[i];
            t -= cnt;
            count ++;
            if(t <= 0){
                break;
            }
    }
    console.log(count);
}