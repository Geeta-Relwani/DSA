class Node{
    constructor(val){
        this.value = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
           let prevTail = this.tail
            this.tail = newNode
            prevTail.next = newNode
            this.tail.prev = prevTail

        }
        this.length++
        // console.log(this,'push console.log this ')
    }
//remove node from end of the list
    pop(){
        if(this.length<=0){
            console.log('no nodes to remove')
            return
        }

        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
    }
}


let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(48)
list.push(5)
list.pop()
console.log('list',list)
