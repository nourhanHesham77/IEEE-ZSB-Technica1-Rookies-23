//points of min distance..................
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var mpoints=[];
    let dis = new Array(points.length);
        for(var i=0;i<points.length;i++){
            var f=Math.pow(points[i][0],2);
            var s=Math.pow(points[i][1],2);
            //storing value of distancs
           dis[i]= f+s;
        }
          dis.sort((a,b) => a-b);
         
          let disofk = dis[k - 1];
          for(var i=0;i<points.length;i++){
              //get x & y of every point
              var x=points[i][0];
              var y=points[i][1];
              var testdis=x*x+y*y;
              if(testdis <= disofk){
                  //storing points
                mpoints.push([x,y])
              }
          }
          
    
    return mpoints;
};