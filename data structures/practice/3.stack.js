class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    //insert - shift in the begining
    insert(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last =newNode
        }else{
            let secondNode = this.first
            this.first = newNode
            newNode.next = secondNode
        }
        this.length++
    }

    //remove LIFO from begining
    remove(){
        if(this.length<=0){
            console.log('empty list nothing to remove')
            return
        }else{
            let prevHead = this.first
            this.first = prevHead.next
            prevHead.next = null
            this.length--
            console.log('removed node', prevHead)
        }
        
    }

}

let stack = new Stack()
stack.insert(1)
stack.insert(2)
stack.insert(3)
stack.insert(4)
console.log('after insert',stack)
stack.remove()
console.log('after remove',stack)
