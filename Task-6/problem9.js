//detect squares........................

var DetectSquares = function() {
    this.points = {}
};

/** 
* @param {number[]} point
* @return {void}
*/
DetectSquares.prototype.add = function([x, y]) {
    if (!this.points[x]) {
       this.points[x] = {[y] : 1}   
   } else {
       this.points[x][y] = (this.points[x][y] || 0) + 1    
   }
};

/** 
* @param {number[]} point
* @return {number}
*/

DetectSquares.prototype.squareCount = function(x, y, x1, y1) {
   return (this.points[x1][y1] || 0) * (this.points[x][y1] || 0) * (this.points[x1][y] || 0)
}






DetectSquares.prototype.count = function([x, y]) {
let cnt = 0
   
   for (let x1 in this.points) {
       const diff = Math.abs(x-x1)
       if (this.points[x] && diff !== 0) {
          
           cnt += this.squareCount(x, y, x1, y + diff) + this.squareCount(x, y, x1, y - diff)
       } 
}
 return cnt;
}
