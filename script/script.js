let blocks = 10;

let gridbox = document.getElementById("grid-box");

let brushcolor = document.getElementById("pickcolor").value;

let backcolor = document.getElementById("pickBackColor").value;
document.getElementById("grid-box").style.backgroundColor = `${backcolor}`;


gridbox.style.gridTemplateColumns = `repeat(${blocks}, 1fr)`;
gridbox.style.gridTemplateRows = `repeat(${blocks}, 1fr)`;

creatBlocks();
colorPicker();
backColorPicker();
sketchingByMouse();
sketchingByTouch();

document.getElementById("slider").addEventListener("input", function () {
    blocks = this.value;
    creatBlocks();
    colorPicker();
    backColorPicker();
    sketchingByMouse();
    sketchingByTouch();
})

function colorPicker() {
    document.getElementById("pickcolor").addEventListener("input", function () {
        brushcolor = this.value;
    });
}

function backColorPicker() {
    document.getElementById("pickBackColor").addEventListener("input", function () {
        backcolor = this.value;
        document.getElementById("grid-box").style.backgroundColor = `${backcolor}`;
    });
}

function sketchingByMouse() {
    let sketch = document.getElementsByClassName('grid-element');

    let isMouseDown = false;

    document.addEventListener("mousedown", function () {
        isMouseDown = true;
    });

    document.addEventListener("mouseup", function () {
        isMouseDown = false;
    });

    for (let i = 0; i < sketch.length; i++) {
        sketch[i].addEventListener("mouseover", function () {
            if (isMouseDown) {
                sketch[i].style.backgroundColor = `${brushcolor}`;
            }
        });
    }

}
function sketchingByTouch() {
    let sketch = document.getElementsByClassName('grid-element');

    let isTouchStart = false;

    document.addEventListener("touchstart", function () {
        isTouchStart = true;
    });

    document.addEventListener("touchend", function () {
        isTouchStart = false;
    });

    for (let i = 0; i < sketch.length; i++) {
        sketch[i].addEventListener("touchmove", function () {
            if (isTouchStart) {
                sketch[i].style.backgroundColor = `${brushcolor}`;
            }
        });
    }

}

function creatBlocks() {
    gridbox.innerHTML = " ";

    gridbox.style.gridTemplateColumns = `repeat(${blocks}, 1fr)`;
    gridbox.style.gridTemplateRows = `repeat(${blocks}, 1fr)`;

    backColorPicker();
    for (let i = 0; i < (blocks * blocks); i++) {
        let box = document.createElement('div');
        box.className = "grid-element";
        document.getElementById("grid-box").appendChild(box);
    }
}