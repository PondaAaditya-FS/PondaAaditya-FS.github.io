
/* function for calculating area */
function calculateArea() {
    areaElement = document.getElementById("area");

    /* If square is selected */
    if (document.getElementById("square").checked) {
        if (
            document.getElementById("side").value == "" ||
            isNaN(document.getElementById("side").value)
        ) {
            areaElement.innerText = "Please enter valid value for side";
            areaElement.className = "error";
        } else {
            area =
                document.getElementById("side").value *
                document.getElementById("side").value;
            areaElement.innerText = `Area is ${area}`;
            areaElement.className = "success";
        }
    }

    /* If rectangle is selected */
    if (document.getElementById("rectangle").checked) {
        if (
            document.getElementById("length").value == "" ||
            isNaN(document.getElementById("length").value)
        ) {
            areaElement.innerText = "Please enter valid value for length";
            areaElement.className = "error";
        } else if (
            document.getElementById("width").value == "" ||
            isNaN(document.getElementById("width").value)
        ) {
            areaElement.innerText = "Please enter valid value for width";
            areaElement.className = "error";
        } else {
            area =
                document.getElementById("length").value *
                document.getElementById("width").value;
            areaElement.innerText = `Area is ${area}`;
            areaElement.className = "success";
        }
    }

    /* If circle is selected */
    if (document.getElementById("circle").checked) {
        if (
            document.getElementById("radius").value == "" ||
            isNaN(document.getElementById("radius").value)
        ) {
            areaElement.innerText = "Please enter valid value for radius";
            areaElement.className = "error";
        } else {
            area =
                Math.PI *
                document.getElementById("radius").value *
                document.getElementById("radius").value;
            areaElement.innerText = `Area is ${area}`;
            areaElement.className = "success";
        }
    }

    /* If triangle is selected */
    if (document.getElementById("triangle").checked) {
        if (
            document.getElementById("base").value == "" ||
            isNaN(document.getElementById("base").value)
        ) {
            areaElement.innerText = "Please enter valid value for base";
            areaElement.className = "error";
        } else if (
            document.getElementById("height").value == "" ||
            isNaN(document.getElementById("height").value)
        ) {
            areaElement.innerText = "Please enter valid value for height";
            areaElement.className = "error";
        } else {
            area =
                (1 / 2) *
                document.getElementById("base").value *
                document.getElementById("height").value;
            areaElement.innerText = `Area is ${area}`;
            areaElement.className = "success";
        }
    }
    /* Identify the shape */
}

/* When Shape is changed, make related input fields visible */
function shapeChange() {
    hideAllInputs();
    if (document.getElementById("square").checked) {
        document.getElementById("squareInput").hidden = false;
        drawSquare();
    } else if (document.getElementById("rectangle").checked) {
        document.getElementById("rectangleInput").hidden = false;
        drawRectangle();
    } else if (document.getElementById("circle").checked) {
        document.getElementById("circleInput").hidden = false;
        drawCircle();
    } else if (document.getElementById("triangle").checked) {
        document.getElementById("triangleInput").hidden = false;
        drawTriangle();
    }
}

/* hide all input fields */
function hideAllInputs() {
    document.getElementById("squareInput").hidden = true;
    document.getElementById("rectangleInput").hidden = true;
    document.getElementById("circleInput").hidden = true;
    document.getElementById("triangleInput").hidden = true;
}

/* draw a square */
function drawSquare() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 100, 100);
    ctx.beginPath();
    ctx.rect(25, 25, 50, 50);
    ctx.stroke();
}

/* draw a rectangle */
function drawRectangle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 100, 100);
    ctx.beginPath();
    ctx.rect(15, 25, 70, 50);
    ctx.stroke();
}

/* draw a circle */
function drawCircle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 100, 100);
    ctx.beginPath();
    ctx.arc(50, 50, 25, 0, 2 * Math.PI);
    ctx.stroke();
}

/* draw a triangle */
function drawTriangle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 100, 100);
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(20, 80);
    ctx.lineTo(80, 80);
    ctx.lineTo(50, 20);
    ctx.stroke();
    ctx.closePath();
}

drawSquare();