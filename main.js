const box = document.querySelector('.box-container');
let nextChild = box;

function drawSquare(elementName, size, color) {

  function createEl() {
    let b;
    b = document.createElement('div');
    b.classList.add('box', 'rotate');
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.backgroundColor = `rgba(${color/2}, ${color/2}, ${color/2, 1})`;

    nextChild.appendChild(b)
    nextChild = nextChild.firstElementChild;
  }
  createEl();
}

let size = 1600;
let iteration = 5;
let color = 255;

for(let i = 0; i < iteration; i++) {
  drawSquare('.box-container', size, color);
  size -= 300;
  color -= 50;
}
