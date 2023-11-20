import car from '../../img/car.png';
import dog from '../../img/dog.png';
import duck from '../../img/duck.png';
import flower from '../../img/flower.png';

export const create = () => {
    return `<div class="graphic__row">${addCells(1)}</div>
            <div class="graphic__row">${addCells(5)}</div>
            <div class="graphic__row">${addCells(9)}</div>
            <div class="graphic__row">${addCells(13)}</div>`;
}

export const addCells = (initial) => {
    let cells = ``;
    for(let i=initial; i<initial+4; i++) {
        cells+= `<div class="graphic__row--drop" id="cell-${i}"></div>`;
    }
    return cells;
}

export const addImages = () => {
    const images = ['car', 'dog', 'duck', 'flower'];
    const cells = [];
    while(cells.length < 4) {
        let randomIndex = Math.floor(Math.random() * 16) + 1;
        if(!cells.includes(randomIndex)) {
            cells.push(randomIndex);
        }
    }
    cells.forEach( function callbackFn(element, index) { 
        document.getElementById(`cell-${element}`).insertAdjacentHTML('beforeend', 
        `<img class="graphic__row--drag" id="${images[index]}" src="img/${images[index]}.png" draggable="true"/>`);
    })
}