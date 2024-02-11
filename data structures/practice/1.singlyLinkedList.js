//singly linked list and all its functions

class Node{
    constructor(val){
        this.node = val
        this.next = null
    }

}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
        var prevTail = this.tail
        this.tail = newNode
        prevTail.next = this.tail
        }
        this.length++
        return this
    }

    pop(){
        if (!this.head){
            console.log('List is empty')
            return
        }
        var current = this.head
        var newTail = this.head

        while(current.next){
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--
        
    }

    // remove first item in the list
    shift(){
        if(!this.head){
            console.log('list is empty')
            return
        }

        var currentHead = this.head
        this.head = currentHead.next
        this.length--
    }
    // add item to begining of the list
    unshift(val){
        var newNode = new Node(val);
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        } else if (this.length>0){
            var prevHead = this.head
            this.head = newNode
            this.head.next = prevHead
        }
        this.length++
    }

    //get(index) - return value at that index
    get(index){
        if(index<0 || index>=this.length){
            console.log('invalid index')
            return
        }
        var count = 0
        var current = this.head
        while(count != index){
            current = current.next
            count++
        }
        console.log('The value at given index is', current)
        return current
    }

    // set will accept index and node value. and the set the index to that value

    set(value,index){
        if(index<0 || index>this.length){
            console.log('invalid index')
            return
        }
        if(index == 0){
            this.unshift(value)
        } else if (index == this.length){
            this.push(value)
        }else{
            var newNode = new Node(value)
            var count = 0
            var prevNode = this.head
            var nextNode = prevNode.next
            while(count != index){
                prevNode = prevNode.next
                nextNode = prevNode.next
            }

            prevNode.next = newNode
            newNode.next = nextNode

        }
    }

}

var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
console.log('list', JSON.stringify(list))
// list.pop()
// console.log('list', JSON.stringify(list))
// list.shift()
// console.log('list', JSON.stringify(list))
list.set('newSet','1')
console.log('list', JSON.stringify(list))

