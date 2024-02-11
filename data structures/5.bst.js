class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    insert(value){
        var newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        } else{
            var current = this.root
            if(value == current.value) return undefined

                while(true){
                    if(current.value>value){
                        if(current.left == null){
                            current.left = newNode
                            return this
                        } else{
                            current = current.left
                        }
                    } else if(current.value<value){
                        if(current.right == null){
                            current.right = newNode
                            return this
                        } else{
                            current = current.right
                        }
                    }

                }
            
        }
    }


        find(value){
            var current = this.root
            var found = false
            while(current && !found){
                if(current.value == value ){
                    console.log('found')
                    found = true
                    return true
                } else if (value< current.value){
                    current = current.left
                }else{
                    current = current.right
                }
            }
            if(!found){
                console.log('not found')
            }
        }
    
}

var tree = new BinarySearchTree()
tree.insert(3)
tree.insert(1)
tree.insert(2)
tree.insert(4)
console.log(tree)
tree.find(11)