
let container = document.querySelector('#container')
let x  = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;
//contador de jogadas
let player1 = 0;
let player2 = 0;

//add evento de click aos boxes
for (let index = 0; index < boxes.length; index++) {
// quando  usuario clica no box
  boxes[index].addEventListener('click',function(){
    let elements = checkElements(player1,player2)
   
    // verifica se tem X ou O
    if(this.childNodes.length == 0){

      let cloneElements = elements.cloneNode(true);
      this.appendChild(cloneElements);
  
      //computar jogada
      if(player1 == player2){
        player1++;

        if(secondPlayer == 'ai-player'){
             setTimeout(function(){
              computerPlayer()},700);
             
          player2++;
          
          
        }

      }else{
        player2++;
       
      }
      //verifica o ganhador
      checkInCondition();

    }

  });
  

}
// evento para selecionar 2-players ou IA

for(let i =0; i < buttons.length; i++){
  buttons[i].addEventListener('click',function(){
     secondPlayer = this.getAttribute('id');

     for(let hideBtns = 0; hideBtns < buttons.length; hideBtns++){
        buttons[hideBtns].style.display = 'none';
     }

     setTimeout(function(){
      container.classList.remove('hide');
    },500)
  });
}

// add elementos no box
function checkElements(player1,player2){
  if(player1 == player2){
    elements = x;

  }else{
    elements = o;

  }
  return elements;
}

 // verifica o ganhador
 function checkInCondition(){

  let b1 = document.querySelector('#block-1');
  let b2 = document.querySelector('#block-2');
  let b3 = document.querySelector('#block-3');
  let b4 = document.querySelector('#block-4');
  let b5 = document.querySelector('#block-5');
  let b6 = document.querySelector('#block-6');
  let b7 = document.querySelector('#block-7');
  let b8 = document.querySelector('#block-8');
  let b9 = document.querySelector('#block-9');

  //horizontal
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
     
    let b1child = b1.childNodes[0].className;
    let b2child = b2.childNodes[0].className;
    let b3child = b3.childNodes[0].className;

    if(b1child === 'x' && b2child ==='x' && b3child ==='x'){

      declareWinner('x')

    }
    else if(b1child === 'o' && b2child ==='o' && b3child ==='o'){

      declareWinner('o')

    }
  }
  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
     
    let b4child = b4.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b6child = b6.childNodes[0].className;

    if(b4child === 'x' && b5child ==='x' && b6child ==='x'){

       declareWinner('x')

    }
    else if(b4child === 'o' && b5child ==='o' && b6child ==='o'){

      declareWinner('o')

    }
  }
  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
     
    let b7child = b7.childNodes[0].className;
    let b8child = b8.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if(b7child === 'x' && b8child ==='x' && b9child ==='x'){

       declareWinner('x')

    }
    else if(b7child === 'o' && b8child ==='o' && b9child ==='o'){

      declareWinner('o')

    }
  }

  //vertical
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
     
    let b1child = b1.childNodes[0].className;
    let b4child = b4.childNodes[0].className;
    let b7child = b7.childNodes[0].className;

    if(b1child === 'x' && b4child ==='x' && b7child ==='x'){

       declareWinner('x')

    }
    else if(b1child === 'o' && b4child ==='o' && b7child ==='o'){

      declareWinner('o')

    }
  }
  if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
     
    let b2child = b2.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b8child = b8.childNodes[0].className;

    if(b2child === 'x' && b5child ==='x' && b8child ==='x'){

       declareWinner('x')

    }
    else if(b2child === 'o' && b5child ==='o' && b8child ==='o'){

      declareWinner('o')

    }
  }
  if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
     
    let b3child = b3.childNodes[0].className;
    let b6child = b6.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if(b3child === 'x' && b6child ==='x' && b9child ==='x'){

      declareWinner('x')

    }
    else if(b3child === 'o' && b6child ==='o' && b9child ==='o'){

      declareWinner('o')
    }
  }

  //diagonal
  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
     
    let b1child = b1.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if(b1child === 'x' && b5child ==='x' && b9child ==='x'){

      declareWinner('x')

    }
    else if(b1child === 'o' && b5child ==='o' && b9child ==='o'){

      declareWinner('o')

    }
  }
  if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
     
    let b3child = b3.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b7child = b7.childNodes[0].className;

    if(b3child === 'x' && b5child ==='x' && b7child ==='x'){

      declareWinner('x')

    }
    else if(b3child === 'o' && b5child ==='o' && b7child ==='o'){

      declareWinner('o')

    }
  }

  let counter = 0;
for(let i =0; i < boxes.length;i++){
  if(boxes[i].childNodes[0] != undefined){
    counter++;
  }
}
if(counter == 9){
  declareWinner('DEU VELLHA!!!!')
}

}

// limpa o jogo declara  o vencedor e atualiza o placar

function declareWinner(winner){
  let scoreboard1 = document.querySelector('#scoreboard-1');
  let scoreboard2 = document.querySelector('#scoreboard-2');
  let msg = '';

  if(winner == 'x'){
    scoreboard1.textContent = parseInt(scoreboard1.textContent) + 1;
    msg = 'JOGADOR 1 VENCEU';
  } else if(winner == 'o'){
    scoreboard2.textContent = parseInt(scoreboard2.textContent) + 1;
    msg = 'JOGADOR 2 VENCEU'; 

  }else{
    msg = 'DEU VELHA!!!!'; 

  }

  // exibe msg

  messageText.innerHTML = msg;
  messageContainer.classList.remove('hide');

// esconde msg

setTimeout( function(){
  messageContainer.classList.add('hide');
},2000);

// zerar jogadas
player1 = 0;
player2 = 0;

// remove as jogadas
let boxesToRemove = document.querySelectorAll('.box div')
for(let i = 0; i < boxesToRemove.length; i++){
  boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
}
  

}


function computerPlayer(){
   let clonarBola = o.cloneNode(true);
   let counter = 0;
   let filled = 0

   for(let i = 0;i < boxes.length; i++){

    let randomNumber = Math.floor(Math.random() * 6);
    // preencher somente se estiver vazio o 'Child'
       if(boxes[i].childNodes[0] == undefined){
        
        if(randomNumber <= 1){
          boxes[i].appendChild(clonarBola);
          counter++;
          break;
          
        }else{ // checar quantas estão preechidas
          filled++;

        }

       }

       

   }

   if(counter == 0 && filled < 9){
    computerPlayer();
   }
}






