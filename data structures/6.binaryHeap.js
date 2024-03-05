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
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.
console.log('heap-', heap)
 


