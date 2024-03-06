class Node{
    constructor(val,priority){
        this.val = val
        this.priority = priority
    }
}


class PriorityQueue{
    constructor(){
        this.values = []
    }

    //insert value in queue
    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp(){
        let currentIndex = this.values.length-1
        let element = this.values[currentIndex]
        while(currentIndex>0){
            let parentIndex = Math.floor((currentIndex-1)/2)
            let parent = this.values[parentIndex]
            if(parent.priority< element.priority){
                break
            }
            else if( parent > priority ){
                //swap nodes
                this.values[parentIndex] = element
                this.values[currentIndex] = parent
                currentIndex = parentIndex
            }
        }
    }

    //remove min / highest priority element
    dequeue(){
        let min = this.values[0]
        const end = this.values.pop()
        this.values[0]= end
        this.sinkDown()
        console.log('highest priority', min)
    }

    sinkDown(){
        let idx = 0
        let length = this.values.length
        let element = this.values[idx]

        while(true){
            let leftChildIdx = 2*idx + 1
            let rightChildIdx = 2*idx + 2
            let leftChild, rightChild
            let swap = null

            if(leftChildIdx<length){
                leftChild = this.values[leftChildIdx]
                if(leftChild.priority<element.priority){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx]
                if((swap == null && rightChild.priority < element.priority)||
                (swap !==null && rightChild.priority< leftChild.priority)){
                    swap = rightChildIdx
                }
            }

            if(swap == null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
             idx = swap
        }
    console.log('sinkDown',this.values)
        
    }
}


let queue = new PriorityQueue()

queue.enqueue('fatal accident', 1)
queue.enqueue('glass in foot', 3)
queue.enqueue('gunshot wound', 2)
queue.enqueue('broken bone', 4)
queue.enqueue('fever', 6)
queue.enqueue('flu', 5)
console.log('priority queeu', queue)
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()

