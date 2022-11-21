// Events 
const btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerText = 'Search';
btn.style.fontSize = '13px';

// подписываемся на события нажатия кнопки
btn.addEventListener('click', () => {
    console.log('clock');
});

let count = 0;
const f = () => {
    console.log('click on button');
    count++;
    if (count == 10) {
        // отписываемся от второго события click
        btn.removeEventListener('click', f);
    }
};
btn.addEventListener('click', f);

const delta = 0.5; // +- на 0.5px

let fSize = parseFloat(btn.style.fontSize.substring(0, btn.style.fontSize.length - 2));
btn.addEventListener('wheel', (event) => {
    const isUp = event.deltaY < 0;
    if (isUp) {
        fSize += delta;
    } else {
        fSize -= delta;
    }
    btn.style.fontSize = `${fSize}px`;
});


const mouse = document.createElement('div');
mouse.classList.add('mouse');
document.body.appendChild(mouse);
mouse.style.width = '100px';
mouse.style.height = '100px';



function cssToFloat(v) {
    return parseFloat(v.substring(0, v.length - 2));
}

// получаем размер окна просмотра
const mouseWidth = cssToFloat(mouse.style.width);
const mouseHeigth = cssToFloat(mouse.style.height);

function hRand(start, end) {
    return Math.trunc(Math.random() * (end - start) + start);
}

mouse.addEventListener('dblclick', () => {
    window.close();
});

setInterval(() => {
    const w = document.documentElement.clientWidth;
    const h = document.documentElement.clientHeight;
    const right = hRand(0, w - mouseWidth);
    const bottom = hRand(0, h - mouseHeigth);
    mouse.style.right = `${right}px`
    mouse.style.bottom = `${bottom}px`
}, 300);

function changeColor(color) {
    document.body.style.background = color;
}





