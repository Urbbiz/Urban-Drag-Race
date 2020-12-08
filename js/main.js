const car1 = document.querySelector('.car-1');
const car2 = document.querySelector('.car-2');

const windowWidth = innerWidth;
const carWidth = 150;
const finishwidth = 40;
const finishRightSpace = 10;

const finishPosition = windowWidth - carWidth - finishwidth - finishRightSpace;

let car1Position = 0;
let car2Position = 0;

// aaddEventListener('keypress'); /* registruoja ir paspaudima ir atspaudimapaspaudimas */
// addEventListener('keydown');  /* registruoja tik kai ispaudi  */
addEventListener('keyup',(event) => {
    const key = event.key;
    if(key === 'w') {
        car1Position += 10;
        car1.style.left = car1Position + 'px';
        if (car1Position > finishPosition) {
            alert('laimejo pirmas automobilis!')
        }
    }

    if(key === 'p') {
        car2Position += 10;
        car2.style.left = car2Position + 'px';
        if (car2Position > finishPosition) {
            alert ('laimejo antras automobilis!')
        }
        
    }


});  


