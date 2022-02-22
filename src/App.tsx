import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './component/Card/Card';


const suits:string[] = [ 'heart', 'diamond', 'spade', 'club']

const generateDeckOfCards = () => {
    let result = [];
    for(let i = 1; i < 14; i++) {
        for(let j = 0; j < suits.length; j++) {
            const suit = suits[j]

            let imageUrl;

          
            if(suit === 'heart'){
                imageUrl= 'assets/hearts.png';
            } else if(suit === 'club'){
                imageUrl= 'assets/club.png';
            }else if(suit === 'spade') {
                imageUrl= 'assets/spade.png';
            }else if(suit === 'diamond'){
                imageUrl= 'assets/diamond.png';
            }

            let displayValue;
            if(i === 1){
              displayValue = "A"
            } else if(i === 11) {
              displayValue = 'J'
            } else if(i === 12) {
              displayValue = 'Q'
            } else if (i === 13) {
              displayValue = 'K'
            } else {
              displayValue = i.toString()
            }
            

            const card = {
                suit,
                numbers: i,
                img: imageUrl,
                displayValue,
                selected: false
            }
            result.push(card)
        } 
    }

  let shuffledDeck = []
  while (result.length > 0) {
    const randomNumber = Math.floor(Math.random() * result.length)
    const randomCard = result.splice(randomNumber, 1)

    shuffledDeck.push(randomCard[0])

  //   // generate a random number between 0 and the current of the remaining cards 
  //   // use that random number to remove an elemet from results
  //   // push that removed element into the shuffled deck
  }

  return shuffledDeck;

}

function App() {
  
  const [deck, setDeck] = useState(generateDeckOfCards())
  const [dealtCards, setDealtCard] = useState<Array<Array<any>>>([[],[],[],[],[],[],[]])
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)
  

  
  
  useEffect(() => { 
    dealCards()
  }, [])

  const handleDealtCardClick = (col:number, index:number) => {
    console.log(col, index)
    dealtCards[col][index].selected = true

  }

  const handleNextCardClick = () => { // this manages the click to show next card
    if (currentCardIndex === deck.length - 1) { // looks at card position and evaluates if it equals to the deck length minus 1,
      setCurrentCardIndex(0)// if it does, then it sets the card index to 0
    } else { 

      setCurrentCardIndex(currentCardIndex + 1) // otherwise it will add one to the currentCardIndex
    }

  }

  //const handleNextCardClick = () => { // this manages the click to show next card
    //if (22 === 52 - 1) { // looks at card position and evaluates if it equals to the deck length minus 1,
      //setCurrentCardIndex(0)// if it does, then it sets the card index to 0
   // } else { 

     // setCurrentCardIndex(currentCardIndex + 1) // otherwise it will add one to the currentCardIndex
    //}

  const dealCards = () => {

    const newDeck = [...deck] //stops duplication of the original deck by bring it into a newDeck
    const newDealtCards = [...dealtCards] // get the dealtCards and puts it in to newDealtCards
    
    for (let i = 0; i <= 6; i++) { //this loop looks at i and loops up to 6 times as long as its equal or below 7.
      const removedCard = newDeck.splice(0, i + 1) //new const called removedCard looks at newDeck and splices it by looking at the value of 'i' and adds one to the last card as long as its below 7.
      newDealtCards[i].push(...removedCard) // newDealtCards gets the value of [i] and pushes it into removedCards   
    }



//  } i = 0
//     const removedCard = [{suit}]
//     newDealtCards[0].push(...removedCard) // newDealtCards gets the value of [i] and pushes it into removedCards   
// }
    
// } i = 1
// const removedCard = [newDeck.splice(0, 1+1)] //new const called removedCard looks at newDeck and splices it by looking at the value of 'i' and adds one to the last card as long as its below 7.
// newDealtCards[1].push(...removedCard) // newDealtCards gets the value of [i] and pushes it into removedCards   
// }
    
// } i = 2 
// const removedCard = newDeck.splice(0, i+2) //new const called removedCard looks at newDeck and splices it by looking at the value of 'i' and adds one to the last card as long as its below 7.
// newDealtCards[2].push(...removedCard) // newDealtCards gets the value of [i] and pushes it into removedCards   
// }
    
// }i= 3
// const removedCard = newDeck.splice(0, i+3) //new const called removedCard looks at newDeck and splices it by looking at the value of 'i' and adds one to the last card as long as its below 7.
// newDealtCards[3].push(...removedCard) // newDealtCards gets the value of [i] and pushes it into removedCards   
// }
    
// }i = 4
// const removedCard = newDeck.splice(0, i+4) //new const called removedCard looks at newDeck and splices it by looking at the value of 'i' and adds one to the last card as long as its below 7.
// newDealtCards[4].push(...removedCard) // newDealtCards gets the value of [i] and pushes it into removedCards   
// }
    
// } i = 5
// const removedCard = newDeck.splice(0, i+5) //new const called removedCard looks at newDeck and splices it by looking at the value of 'i' and adds one to the last card as long as its below 7.
// newDealtCards[5].push(...removedCard) // newDealtCards gets the value of [i] and pushes it into removedCards   
// }
    
    // } i = 6
// const removedCard = newDeck.splice(0, i+6) //new const called removedCard looks at newDeck and splices it by looking at the value of 'i' and adds one to the last card as long as its below 7.
// newDealtCards[6].push(...removedCard) // newDealtCards gets the value of [i] and pushes it into removedCards   
// }

    

    setDeck(newDeck) // the state changes to the state of newDeck
    setDealtCard(newDealtCards) // the state changes to the state of newDealtCards

    //console.log(newDealtCards)
  }
  
  const currentCardToDisplay = deck[currentCardIndex] 
  return (
    
    <div className='card-container'>

      <button onClick={handleNextCardClick} className='card-button'>Next Card</button>
      <div className='left-card-selection-container'>
        <div>
          <Card
            card={currentCardToDisplay}
            />
        </div >
   
           <div className='right-side-card-collector'> cards on the right</div>
           <div className='right-side-card-collector'> cards on the right</div>
           <div className='right-side-card-collector'> cards on the right</div>
            <div className='right-side-card-collector'> cards on the right</div>
     
      </div>
      <div className='card-collection-container'>
        
        
        {dealtCards.map((column, colIndex) => {
            return (<div className='playing-cards'>
             
              {column.map((card, index) => {
                const cardPosition = index;
                const lastPositionInArray = column.length - 1
                const isCardHidden = cardPosition !== lastPositionInArray;
                
                return <Card
                  hidden={isCardHidden}
                  card={card}
                  handleClick={() =>  handleDealtCardClick(colIndex, index)}
                />
              })}
            </div>)
          })
        }
      
      
      </div>
    </div>
  );
}

export default App;
