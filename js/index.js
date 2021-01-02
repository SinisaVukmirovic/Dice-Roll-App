const app = document.querySelector('.app');
const rollBtnElem = app.querySelector('#rollBtn');
const diceElem = app.querySelector('#dice');
const numbOfSides = 6;
const numbOfDots = 9;

const generateDice = () => {
    for (let i = 0; i < numbOfDots; i++) {
        const dotElem = document.createElement('span');
        dotElem.classList.add('dot');
        dotElem.classList.add(`dot-${i + 1}`);

        diceElem.appendChild(dotElem);
    }
    // initial Dice display 
    diceElem.querySelector('.dot-5').style.visibility = 'visible';
};

const rollDiceAnim = () => {
    diceElem.classList.add('rollDiceAnim');
    rollBtnElem.disabled = true;

    diceElem.addEventListener('animationend', () => {
        diceElem.classList.remove('rollDiceAnim');
        rollBtnElem.disabled = false;
    });

    setTimeout(() => {
        rollDiceNumb();
    }, 700);
}

const getRandomNumb = (numb) => {
    return Math.ceil(Math.random() * numb);
};

const rollDiceNumb = () => {
    diceElem.querySelectorAll('.dot').forEach(dot => dot.style.visibility = 'hidden');

    let rolledNumb = getRandomNumb(numbOfSides);
    
    switch (rolledNumb) {
        case 1:
            console.log(1);
            diceElem.querySelector('.dot-5').style.visibility = 'visible';
        break;
        case 2:
            console.log(2);
            diceElem.querySelector('.dot-1').style.visibility = 'visible';
            diceElem.querySelector('.dot-9').style.visibility = 'visible';
        break;
        case 3:
            console.log(3);
            diceElem.querySelector('.dot-1').style.visibility = 'visible';
            diceElem.querySelector('.dot-5').style.visibility = 'visible';
            diceElem.querySelector('.dot-9').style.visibility = 'visible';
        break;
        case 4:
            console.log(4);
            diceElem.querySelector('.dot-1').style.visibility = 'visible';
            diceElem.querySelector('.dot-3').style.visibility = 'visible';
            diceElem.querySelector('.dot-7').style.visibility = 'visible';
            diceElem.querySelector('.dot-9').style.visibility = 'visible';
        break;
        case 5:
            console.log(5);
            diceElem.querySelector('.dot-1').style.visibility = 'visible';
            diceElem.querySelector('.dot-3').style.visibility = 'visible';
            diceElem.querySelector('.dot-5').style.visibility = 'visible';
            diceElem.querySelector('.dot-7').style.visibility = 'visible';
            diceElem.querySelector('.dot-9').style.visibility = 'visible';
        break;
        case 6:
            console.log(6);
            diceElem.querySelector('.dot-1').style.visibility = 'visible';
            diceElem.querySelector('.dot-2').style.visibility = 'visible';
            diceElem.querySelector('.dot-3').style.visibility = 'visible';
            diceElem.querySelector('.dot-7').style.visibility = 'visible';
            diceElem.querySelector('.dot-8').style.visibility = 'visible';
            diceElem.querySelector('.dot-9').style.visibility = 'visible';
        break;
    }

    displayResult(rolledNumb);
};

const displayResult = (res) => {
    const resultElem = app.querySelector('#result');

    resultElem.style.visibility = 'visible';
    resultElem.querySelector('span').textContent = `${res}`;
};

generateDice();
rollBtnElem.addEventListener('click', rollDiceAnim);