// Queues are FIFO first in first out


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first =newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
    }

    pop(){
        if(this.first == this.last){
            this.first = null
            this.last = null
        } else{
            var newFirst = this.first.next
            this.first.next = null
            this.first = newFirst

        }
        
        this.length--
    }
}