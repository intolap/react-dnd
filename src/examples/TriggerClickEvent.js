import {React, useState} from 'react'

export default function TriggerClickEvent() {
  const cards = ['apple','ball','cat'];
  const [currentList, setCurrentList] = useState(false);
  const [currentCard, setCurrentCard] = useState(false);

  function triggerClick(){
    let nextIndex;
    if(currentCard >= (document.querySelectorAll('.'+currentList).length-1)){
      nextIndex = 0;
    }else{
      nextIndex = currentCard+1;
    }
    document.querySelector('#'+currentList+nextIndex).click();
  }

  function cardElementClick(list,index){
    setCurrentList(list);
    setCurrentCard(index);
    alert(document.querySelector('#'+list+index).innerHTML);
  }

  return (
    <div>
      <ul className="cards">
        {cards.map((card, i) => {
          return (
            <li key={i} className="card people" id={'people'+i} onClick={()=>cardElementClick('people',i)}>
              {card}
            </li>
          );
        })}
      </ul>
      <button className="button" onClick={() => triggerClick()}>Next</button>
    </div>
  )
}