//heaviest stone.......

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    //fisrt solution...........................********************************************************
     stones.sort((a,b) => b-a);
    if(stones.length==0) return 0;

        while(stones.length>1){
        if(stones[1]==stones[0]&&stones[1]&&stones.length>2){
    stones.splice(0, 2); 
    
        }else if(stones[1]!=stones[0]&&stones[1]){
       
         stones[0]=stones[0]-stones[1];
          stones.splice(1,1);
           stones.sort((a,b) => b-a);
        }else if(stones[1]==stones[0]&&stones[1]&&stones.length==2){
            return 0;
        }
        }
     return stones[0];

    //second solution without loop.........................**************************************
//     if (stones.length == 1){                 
//     return stones
//   } else if (stones.length == 0){          
//     return 0
//   }
//   let heavy1 = Math.max(...stones)         
//   stones.splice(stones.indexOf(heavy1), 1) 
//   let heavy2 = Math.max(...stones)         
//   stones.splice(stones.indexOf(heavy2), 1) 
//   if (heavy1 > heavy2) {               
//     let newStone = heavy1 - heavy2         
//     stones.push(newStone)                  
//   }
  
//   return lastStoneWeight(stones) 



//and using max heap will work too..............**********
    
};