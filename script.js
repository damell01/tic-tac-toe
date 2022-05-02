//elements being manipulated on screen
const boxes= document.querySelector('.box',) ;
const text= document.querySelector('#heading') ;
// selection for which box user chose
const strategy= document.querySelector('#strategy') ;
const restartBtn= documentt.querySelector('#restart') ;
const spaces=[];
//user-choices
const tick_circle="O" ;
tick_x='X' ;
//creates board  
    const drawBoard = () => {
        boxes.forEach((box, i) => {
          let styleString = '';
          // adds bottom border to boxes whose index is less than three
          if (i < 3) {
            styleString += 'border-bottom: 3px solid var(--text);';
          }
          // a  right border is created for any index divisible by three
          if (i % 3 === 0) {
            styleString += 'border-right: 3px solid var(--text);';
          }
          //a left border for any index that leaves modulus of 2
          if (i % 3 === 2) {
            styleString += 'border-left: 3px solid var(--text);';
          }
          // leaves top border for any index  greater than 0
          if (i > 5) {
            styleString += 'border-top: 3px solid var(--text);';
          }
          box.style = styleString;
          box.addEventListener('click', boxClicked);
        });
        const boxClicked = (e) => {
            const id = e.target.id;
            if (!spaces[id]) {
              spaces[id] = currentPlayer;
              e.target.innerText = currentPlayer;
          
              if (playerWon()) {
                text.innerText = `${currentPlayer} has won!`;
                restart();
                return;
              }
          
              if (playerDraw()) {
                return;
              }
              currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
            }
          };
          // logic for winner
          const playerWon = () => {
            if (spaces[0] === currentPlayer) {
              if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
                strategy.innerText = `${currentPlayer} wins up to top`;
                return true;
              }
              if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
                strategy.innerText = `${currentPlayer} wins on the left`;
                return true;
              }
              if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
                strategy.innerText = `${currentPlayer} wins diagonally`;
                return true;
              }
            }
            if (spaces[8] === currentPlayer) {
              if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
                strategy.innerText = `${currentPlayer} wins on the right`;
                return true;
              }
              if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
                strategy.innerText = `${currentPlayer} wins on the bottom`;
                return true;
              }
            }
            if (spaces[4] === currentPlayer) {
              if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
                strategy.innerText = `${currentPlayer} wins vertically on middle`;
                return true;
              }
              if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
                strategy.innerText = `${currentPlayer} wins horizontally on the middle`;
                return true;
              }
              if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
                strategy.innerText = `${currentPlayer} wins diagonally`;
                return true;
              }
            }
          };
      };


