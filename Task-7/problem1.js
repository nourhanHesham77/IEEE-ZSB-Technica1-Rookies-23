//merge two ll....................
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    
   var l3=new ListNode(null,null);
   let prev = l3;
    // if (list1 && !list2) {
    //   prev.next = list1;
    //   return l3.next;
    // } 
    // if (list2 && !list1) {
    //   prev.next = list2;
    //   return l3.next;
    // }
   while(list1 && list2){
       if(list1.val <= list2.val){
           prev.next=list1;
           prev=list1;
           list1=list1.next;
       }else{
           prev.next=list2;
           prev=list2;
           list2=list2.next;
       }
   }
  if(!list1)prev.next=list2;
  
  if(!list2)  prev.next=list1;

  
   return l3.next;
};