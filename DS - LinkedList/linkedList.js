/*

*/

class Node {
  constructor(data, node){
    this.data = data;
    this.next = node || null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    if(!this.head) return 0;
    let length = 0;
    let currentNode = this.head;

    while (currentNode){
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }

  getFirst(){
    return this.head;

  }

  getLast(){
    if(!this.head) return null;
    
    let lastNode = this.head;

    while(lastNode){
      if(lastNode.next === null){
        return lastNode;
      }
      lastNode = lastNode.next;
    }
  }

  removeFirst(){
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head) return null;

    if(this.size === 1) {this.head = null; return;}

    let node = this.head.next;
    let previous = this.head;

    while(node.next){

      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data){
    if(!this.head) {this.head = new Node(data); return;}
    
    if (this.size === 1) { this.head.next = new Node(data); return; }

    let currentNode = this.head.next;

    while(currentNode){
      if(currentNode.next === null){
        currentNode.next = new Node(data);
        return;
      }
      currentNode = currentNode.next;
    }

  }

  clear(){
    this.head = null;
  }

}


exports.Node = Node;
exports.LinkedList = LinkedList;