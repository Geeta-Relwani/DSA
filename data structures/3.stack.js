//Stack has last in first out LIFO structure

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.start = null
        this.end = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val)
        if(!this.start){
            this.start = newNode
            this.end = newNode
        }else{
            var temp = this.start
            this.start = newNode
            this.start.next = temp
        }
        this.length++
    }

    pop(){
        if(!this.start) return null
        if(this.start == this.end){
            this.start = null
            this.end = null
        } else{
            var temp = this.start
            this.start = this.start.next
            temp.next = null
        }
        this.length--
    }
}

var stack = new Stack()
stack.push('1')
stack.push('2')
stack.push('3')
console.log('stack,',stack)
stack.pop()
stack.pop()

console.log('stack,',stack)
