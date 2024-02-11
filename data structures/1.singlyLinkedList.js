class Node {
    constructor(val){
        this.node = val
        this.next = null
    }
}

class singlyLinkedList {
    constructor (){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){

    var newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail =newNode
        }
        this.length++;
        return this
    }

    // pop removes the last item in the list
    pop(){
        if(!this.head){
            console.log('empty list')
            return 
        }
        var current = this.head
        var newTail = this.head
        while (current.next){
            console.log(current.val)
            newTail = current
            current = current.next
            }
        this.tail = newTail
        this.tail.next = null
        this.length--
        }

        //shift removes the first item in the list
        shift(){
            if(!this.head){
                console.log('empty list')
                return 
            }
            var currentHead = this.head
            // var newHead = this.head.next
            this.head = currentHead.next,
            // currentHead.next = null
            this.length--
        }

        //unshift add first item to the list
        unshift(val){
            var newNode = new Node(val)
            if(!this.head){
                this.head = newNode
                this.tail = newNode
            } else {
            newNode.next = this.head
            this.head = newNode
            }
            this.length++

        }

        //Get function - it will accept an index and we need to return the value/node at that position
        get(index){
            if(index<0 || index>=this.length){
                console.log('Invalid index')
                return null
            }
                var count = 0
                var current = this.head
                while(count !=index){
                current = current.next
                count++
            }
            console.log('node at index ' ,index,'is: ',current)
            return current
        }
        // set will accept index and node value. and the set the index to that value
        set(index,value){
            var foundNode = this.get(index)
            if(foundNode){
                foundNode.node = value
                return true
               
            }else{
                console.log('node not found')
                return null            
            }

         
        }

        //insert will accept index and value and we can insert the value at at that position
        insert(index, value){
            if(index<0 || index>this.length) return null
            var prevNode = this.get(index-1)
            if(index ==0){
                this.unshift(value)
                return 
            } else if(index == this.length){
                this.push(value)
            } else{
                var prevNode = this.get(index-1)
                var nextNode = this.get(index)
                var newNode = new Node(value)
                prevNode.next = newNode
                newNode.next = nextNode
                this.length++
            }

        }

        //remove node at at index
        remove(index){
            if(index<0 || index>=this.length)return false
            if(index ==0) {
                this.shift()
                return true
        }else if(index == this.length-1){ 
            this.pop()
            return true
        } else{
            var prev = this.get(index-1)
            var nextNode = this.get(index+1)
            prev.next = nextNode
            this.length--
        }

        }
    }


let list = new singlyLinkedList()
// list.push('hello')
list.push('1')
list.push('2')
list.push('3')
// console.log('list '+JSON.stringify(list) )
// list.pop()
// console.log('list '+JSON.stringify(list) )
// list.shift()
// list.unshift('unshift')
// list.set(2,'updated value')
// list.remove(1)
// console.log('list '+JSON.stringify(list) )
console.log(list )