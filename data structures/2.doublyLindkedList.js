class Node {
    constructor(val){
        this.node = val
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList{
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
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        console.log('new node added', newNode)
    }

    pop(){
        if(!this.head){
            console.log('no nodes to remove. List length is ', this.length)
            return
        }
        if(this.length==1){
            this.head = null
            this.tail = null
            this.length--
            return
        }
        var newTail = this.tail.prev
        this.tail.prev = null
        newTail.next = null
        this.tail = newTail
        this.length--
        console.log('New tail is ', this.tail,'length is ', this.length)
    }

    shift(){
        if(!this.head){
        console.log('no nodes to remove. List length is ', this.length)
        return
        }
        if(this.length==1){
            this.head = null
            this.tail = null
            this.length--
            return
        }
        var newHead = this.head.next
        newHead.prev = null
        this.head.next = null
        this.head = newHead
        this.length--
        console.log('The new head is: ', this.head)
    }

    unshift(val){
        var newNode = new Node(val)
        if(this.length <=0){
            this.head = newNode
            this.tail = newNode
            this.length++
            return
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        console.log('New tail is ', this.tail,'length is ', this.length)
    }

    get(index){
        if(index> this.length || index<0){
            console.log('index is invalid')
            return
        }
        var mid = Math.floor(this.length/2)
       
        if(index<=mid){
            console.log('working from start')
            var count
            var current = this.head
         while(count!=index){
         
                current = current.next
                count++
            }
        } else {
            console.log('working from end')
            count = this.length-1
            current = this.tail
            while(count!=index){
            current = current.prev
            count--
            }
            }
        
            console.log('the element at index'+index+'is :', current)
        return current
    }

    set(index,val){
        var updateNode = this.get(index)

        if (updateNode){
            updateNode.node = val
            console.log('updated node',updateNode)
        }
    }

    insert(index,val){
        if(index<0 || index>this.length) return null
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        if(index == 0){
            this.unshift(val)
        } else if(index == this.length){
            this.push(val)
        } else{
        var current = this.get(index)
        var prevNode = current.prev
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = current
        current.prev = newNode
        }
    }

    remove(index){
        if(index<0 || index>this.length) return null
        if(index == 0){
            this.shift()
        } else if (index == this.length-1){
            this.pop()
        } else{
        var toRemove = this.get(index)
        var prevNode = toRemove.prev
        var nextNode = toRemove.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        toRemove.prev =null
        toRemove.next = null
        this.length--
        }
    }

}

var list = new doublyLinkedList()
list.push('1')
list.push('2')
list.push('3')
console.log('list '+ list)
list.set(2,'newval')
// console.log('list '+ JSON.stringify(list))

