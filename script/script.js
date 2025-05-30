let blocks = 10;

let gridbox = document.getElementById("grid-box");

let brushcolor = document.getElementById("pickcolor").value;

gridbox.style.gridTemplateColumns = `repeat(${blocks}, 1fr)`;
gridbox.style.gridTemplateRows = `repeat(${blocks}, 1fr)`;

creatBlocks();
colorPicker();
sketching();

document.getElementById("slider").addEventListener("input", function () {
    blocks = this.value;
    creatBlocks();
    colorPicker();
    sketching();
})

function colorPicker() {
    document.getElementById("pickcolor").addEventListener("input", function () {
        brushcolor = this.value;
    });
}

function sketching() {
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

function creatBlocks() {
    gridbox.innerHTML = " ";

    gridbox.style.gridTemplateColumns = `repeat(${blocks}, 1fr)`;
    gridbox.style.gridTemplateRows = `repeat(${blocks}, 1fr)`;

    for (let i = 0; i < (blocks * blocks); i++) {
        let box = document.createElement('div');
        box.className = "grid-element";
        document.getElementById("grid-box").appendChild(box);
    }
}