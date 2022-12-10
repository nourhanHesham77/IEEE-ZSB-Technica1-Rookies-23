//linked list.....

class Node
{
  constructor(data)
  {
    this.data=data;
    this.next=null;
  }
}

class LinkedList
{
  constructor()
  {
    this.head=null;
    this.size=0;
  }
//insertion.....
  insert(data)
  {
    let node = new Node(data); 
    if(this.head==null)
    {
      this.head = node;
      this.size++;
    }else{
      let current = this.head;
      while(current.next!=null){
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  //deletion....
  remove(data){
   let current = this.head;
   let prev = null;
   while(current!=null){
           if(current.data==data){
            if(prev==null){
              //which means w r del. first node..
              this.head=current.next;
            }else{
              prev.next=current.next;
            }
            this.size--;
            return current.data;
           }
           prev=current;
           current=current.next;
   }
   return -1;
  }

  printList()
  {
      while(this.head != null){
        console.log(this.head.data);
        this.head=this.head.next;
      }
  }
}

var llist = new LinkedList();
llist.insert(5);
llist.insert(7);
llist.insert(8);
llist.insert(13);

llist.printList();
