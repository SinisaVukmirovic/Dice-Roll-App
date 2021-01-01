const diceElem = document.querySelector('.dice');
// const dots = dice.querySelectorAll('.dot');
// const displayNumb = document.querySelector('.display-numb span');
const numbOfSides = 6;
const numbOfDots = 9;

for (let i = 0; i < numbOfDots; i++) {
    const dotElem = document.createElement('span');
    dotElem.classList.add('dot');

    diceElem.appendChild(dotElem);
}



// const displayDots = {
//     show1: diceElem.querySelector('.show-1'),
//     show2: diceElem.querySelectorAll('.show-2'),
//     show3: diceElem.querySelectorAll('.show-3'),
//     show4: diceElem.querySelectorAll('.show-4')
// }

// diceElem.addEventListener('click', () => {
//     diceElem.classList.add('js-roll-anim');

//     setTimeout(() => {
//         rollFunctionality();
//     }, 500);
    

//     // displayNumb.innerText = `${rolledNumb}`;
// });

// function rollFunctionality() {
//     dice.classList.remove('js-roll-anim');

//     dots.forEach(dot => dot.style.visibility = 'hidden');

//     let rolledNumb = getRandomInt(numbOfSides);
    
//     switch (rolledNumb) {
//         case 1:
//             console.log(1);
//             displayDots.show1.style.visibility = 'visible';
//             dice.style.transform = 'rotate(-10deg)';
//         break;
//         case 2:
//             console.log(2);
//             displayDots.show2.forEach(dot => dot.style.visibility = 'visible');
//             dice.style.transform = 'rotate(10deg)';
//         break;
//         case 3:
//             console.log(3);
//             displayDots.show1.style.visibility = 'visible';
//             displayDots.show2.forEach(dot => dot.style.visibility = 'visible');
//             dice.style.transform = 'rotate(-5deg)';
//         break;
//         case 4:
//             console.log(4);
//             displayDots.show2.forEach(dot => dot.style.visibility = 'visible');
//             displayDots.show3.forEach(dot => dot.style.visibility = 'visible');
//             dice.style.transform = 'rotate(5deg)';
//         break;
//         case 5:
//             console.log(5);
//             displayDots.show1.style.visibility = 'visible';
//             displayDots.show2.forEach(dot => dot.style.visibility = 'visible');   
//             displayDots.show3.forEach(dot => dot.style.visibility = 'visible');
//             dice.style.transform = 'rotate(-15deg)';
//         break;
//         case 6:
//             console.log(6);
//             displayDots.show2.forEach(dot => dot.style.visibility = 'visible');
//             displayDots.show3.forEach(dot => dot.style.visibility = 'visible');
//             displayDots.show4.forEach(dot => dot.style.visibility = 'visible');
//             dice.style.transform = 'rotate(0deg)';
//         break;
//     }

//     displayNumb.innerText = `${rolledNumb}`;

// }

// function getRandomInt(num) {
//     return Math.ceil(Math.random() * num);
// }