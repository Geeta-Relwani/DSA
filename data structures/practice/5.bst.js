//         6
//     4           7
// 1       5      2    8


//  [ [6], [4,7], [1,5,2,8] ]


// return true or false if any path from root to leaf Node sums to S

// return array digits formed from root to leaf node

// [ 641, 645, 672, 678 ]

class Node {
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(val){
        let newNode = new Node(val)
        if(this.root === null){
            this.root = newNode
            return
        }else{
            let current = this.root

            while(true){
                if(val== current.value) return null

                if(val<current.value){
                    if(!current.left){
                        current.left = newNode
                        return
                    } else{
                        current = current.left
                    }
                }
                else if(current.value<val){
                    if(!current.right){
                        current.right = newNode
                        return
                    }else{
                        current = current.right
                    }
                }
            }
        }
    }

    find(val){
        let current = this.root
        let isFound = false

        while(!isFound && current){
            if(val === current.value){
                console.log('found')
                isFound = true
                return
            } else if(val<current.value && current.left){
                current = current.left
            }else if(val>current.value && current.right){
                current = current.right
            }else{
                console.log('not found')
            }
        }
        }
    
}

let tree = new BST()
tree.insert(5)
tree.insert(12)
tree.insert(10)
console.log(tree)
tree.find(11)