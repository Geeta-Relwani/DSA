function makeDeck(){

  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'
  const suits = ['hearts','diamonds','spades','club']
  const deck = []

//   values.split(',')
console.log(values,suits)
  for(let value of values.split(',')){
    for(let suit of suits){
        deck.push({
            value,
            suit
        })
    }
  }
  return deck
}
// makeDeck()
// console.log(makeDeck())

// We can implement this above function in object properties.

const myDeck = {
    deck:[],
    suits: ['heart','diamonds','spades','clubs'],
    values: 'A,2,3,4,5,6,7,8,9,10,Q,K',
    initializeDeck(){
        const {suits, deck, values} = this
        for(let value of values.split(',')){
            for(let suit of suits){
                deck.push({
                    value,
                    suit
                })
            }
          }

    },
    drawCard(){
        return this.deck.pop()
    }
    

}