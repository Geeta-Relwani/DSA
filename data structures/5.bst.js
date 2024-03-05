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

        //breadth first search will return node in bfs orders in an array
        BFS(){
            var node = this.root
            var data = []
            var queue = []
            queue.push(this.root)

            while(queue.length){
                node = queue.shift()
                data.push(node.value)
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        console.log('BFS',data)
        return data
        }

        DSFPreOrder(){
            var data = []
            function traverse(node){
                data.push(node.value)
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
            }
            traverse(this.root)
            console.log('dsf preorder -', data)
            return data
        }

        DSFPostOrder(){
            var data = []

            function traverse(node){
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
                data.push(node.value)
               
            }
            traverse(this.root)
            console.log('DFS Post Order - ', data)
            return data
        }

        DSFinOrder(){
            var data = []

            function traverse(node){
                if(node.left) traverse(node.left)
                data.push(node.value)
                if(node.right) traverse(node.right)
               
            }
            traverse(this.root)
            console.log('DFS in Order - ', data)
            return data
        }
    
}

var tree = new BinarySearchTree()
tree.insert('6')
tree.insert('5')
tree.insert('4')
tree.insert('3')
tree.insert('2')
tree.insert('8')
tree.insert('9')
tree.insert('1')

console.log(tree)
tree.find(11)
tree.BFS()
tree.DSFPreOrder()
tree.DSFPostOrder()
tree.DSFinOrder()