console.log('hi');
let plates = document.querySelector("#plates");
console.log(plates);
let dots = document.querySelector("#dots");
let selectColor = '#fff';
makecolorpaltes();
function init() {
    // let dots = document.querySelector("#dots");
    for (let i = 0; i < dots.children.length; i++) {
        const dot = dots.children[i];
        dot.addEventListener('click', changecolor);
    }
}


function changecolor(e) {
    console.log(e);
    e.target.style.backgroundColor = selectColor;
}


function makecolorpaltes() {
    let color = ['red', 'yellow', 'blue', 'black', 'pink'];
    for (let i = 0; i < plates.children.length; i++) {
        const plate = plates.children[i];
        // plate.addEventListener('click', changecolor);
        plate.style.backgroundColor = color[i % color.length]
        plate.addEventListener('click', function (e) {
            selectColor = e.target.style.backgroundColor;
        });
    }

}