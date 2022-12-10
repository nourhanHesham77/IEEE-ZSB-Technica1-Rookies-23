


function processData(input) {
    //Enter your code here
    var x= input.split("\n");
    var otree=x[1].split(" ");
    
  class Node {

    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class binarySearchTree {
    constructor(){
        this.root=null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root , newNode){
        if(newNode.value< root.value){
            if(root.left===null){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode);
            }
        }
        return root;
        // root.preorder(root);
    }


getRootNode()
{
   
    return this.root;
}

preorder(root)
{
   
    //  if(root !== null)
    // {
    //     console.log(root.value);
       
    //     this.preorder(root.left);
    //     this.preorder(root.right);
       
       
    // }
    if (!root) return [];
  var res = [];
  var queue = [root];
  var node = null;
  while (queue.length) {
    node = queue.pop();
      res.push(node.value);
      if (node.right) queue.push(node.right);
     if (node.left) queue.push(node.left);
      
  
   
   
  }
  return res.join(" ");
  

}
 

}
const bst = new binarySearchTree();
for(var i=0;i<otree.length;i++){
    bst.insert(Number(otree[i]));
} 


   var root=bst.getRootNode();
  console.log(bst.preorder(root));
   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
   

   