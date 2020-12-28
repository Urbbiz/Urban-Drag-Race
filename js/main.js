import {models} from './modelsData.js';
import {getModel} from './getModel.js';

const car1 = document.querySelector('.car-1');
const car2 = document.querySelector('.car-2');
const pyroBlock = document.querySelector('.pyro');
const winBlock = document.querySelector('.win');
const winP = winBlock.querySelector('p');
const playAgain = winBlock.querySelector('button');
let victory = false;


// const models = ['astra', 'astra2', 'avencis', 'forester', 'kia', 'saab', 'outback', 'verso']


const windowWidth = innerWidth;
const carWidth = 150;
const finishwidth = 40;
const finishRightSpace = 10;
const carStep = 30;

const finishPosition = windowWidth - carWidth - finishwidth - finishRightSpace;
let car1Position = 0;
let car2Position = 0;

const car1Model = getModel(models);   /*Math.floor(Math.random() * models.length);*/
const car2Model = getModel(models);  /*Math.floor(Math.random() * models.length);*/

car1.dataset.model = models[car1Model];
car2.dataset.model = models[car2Model];



car1.style.left = car1Position;
car2.style.left = car2Position;

// aaddEventListener('keypress'); /* registruoja ir paspaudima ir atspaudimapaspaudimas */
// addEventListener('keydown');  /* registruoja tik kai ispaudi  */
addEventListener('keyup',(event) => {
    const key = event.key;
    if(key === 'w') {
        car1Position += carStep;
        car1.style.left = car1Position + 'px';
        if (car1Position > finishPosition) {
            alert('laimejo pirmas automobilis!')
            location.reload();
        }
    }

    if(key === 'p') {
        car2Position += carStep;
        car2.style.left = car2Position + 'px';
        if (car2Position > finishPosition) {
            alert ('laimejo antras automobilis!')
            location.reload();
        }
        
    }


});  


