//Implementing a binary heap using array, we use array position to model the behaviour of heap
// It is a binary tree and can be build using 5.bst logic but array will make it simple
//In heaps every child is less than its parent node
//In array the child of node would be 2n+1/2n+2
// parent of a child will be n-1/2 floored

class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12]
    }

    insert(value){
        
        this.values.push(value)
        this.bubbleUp(value)
    }

    bubbleUp(value){
        let currentIndex = this.values.length-1
        while(currentIndex>0){
            let parentIndex = Math.floor((currentIndex-1)/2)
            let parent = this.values[parentIndex]
            if(value<=parent){
                break
            }
            else if(value>parent){
                this.values[parentIndex] = value
                this.values[currentIndex] = parent
                currentIndex = parentIndex
            }

        }
        console.log('binary Heap: ', this.values)
    }

    extractMax(){
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0]=end
        this.sinkDown()
        console.log('max',max)
        return max
    }

    sinkDown(){
        let idx = 0
        const length = this.values.length
        const element =  this.values[0]

        while(true){
           let leftChildIdx = 2*idx+1
           let rightChildIdx = 2*idx+2
           let leftChild, rightChild
           let swap = null
           if(leftChildIdx<length) {
            leftChild = this.values[leftChildIdx]
            if(leftChild> element){
            swap = leftChildIdx
            }
           } 
           if(rightChildIdx<length){
            rightChild = this.values[rightChildIdx]
            // make sure we swap with the greatest value in left and right child
            if((swap == null && rightChild>element) || (swap !==null && rightChild > leftChild)){
                 swap = rightChildIdx
            }
           }

           if(swap == null) break;
           // do swap if swap is not null
           this.values[idx] = this.values[swap]
           this.values[swap] = element
            idx = swap
        }
        console.log('sinkdown',this.values)

    }
}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
// console.log('heap-', heap)
heap.extractMax()
 


