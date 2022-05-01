//elements being manipulated on screen
const boxes= document.querySelector('.box',) ;
const text= document.querySelector('#heading') ;
// selection for which box user chose
const strategy= document.querySelector('#strategy') ;
const restartBtn= documentt.querySelector('#restart') ;

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
      };


