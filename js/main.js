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
let car1Position = 0;
let car2Position = 0;

const car1Model = getModel(models);   /*Math.floor(Math.random() * models.length);*/
const car2Model = getModel(models);  /*Math.floor(Math.random() * models.length);*/

car1.dataset.model = car1Model;
car2.dataset.model = car2Model;

const windowWidth = innerWidth;
const carWidth = 150;
const finishwidth = 40;
const finishRightGap = 10;
// const carStep = 30;
const distanceToFinish = windowWidth - carWidth - finishwidth - finishRightGap;



// car1.style.left = car1Position;
// car2.style.left = car2Position;

addEventListener('keyup', (event) => {
    if (victory) {
        return;
    }

// addEventListener('keypress'); /* registruoja ir paspaudima ir atspaudimapaspaudimas */
// addEventListener('keydown');  /* registruoja tik kai ispaudi  */
// addEventListener('keyup',(event) => {
    const key = event.key;
    if(key === 'w') {
        car1Position += 20;
        car1.style.left = car1Position + 'px';
        if (car1Position > distanceToFinish) {
            victory = true;
            winP.innerText = 'Pirma laimejo';
            winBlock.classList.add('show');
            pyroBlock.classList.add('show');    
        }
    }

    if(key === 'p') {
        car2Position += 20;
        car2.style.left = car2Position + 'px';
        if (car2Position > distanceToFinish) {
            victory = true;
            winP.innerText = 'Antra laimejo';
            winBlock.classList.add('show');
            pyroBlock.classList.add('show')   
        }  
    }

})
playAgain.addEventListener('click',() => {
    location.reload();

}) 
