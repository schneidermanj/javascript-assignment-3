// Do your work in this file.

//1. Create a `div` element with a class name of "**view**" and append it to the document `body`.
var skyElement = document.createElement("div");
skyElement.className = "view";
document.body.appendChild(skyElement);

//1. Create a `div` element with a class name of "**grass**" and append it to the previously created "view" div from step 3.
var grassElement = document.createElement("div");
grassElement.className = "grass";
skyElement.appendChild(grassElement);

// Create a `div` element with a class name of "**sun**" and append it to the previously created "view" div from step 3.
var sunElement = document.createElement("div");
sunElement.className = "sun";
skyElement.appendChild(sunElement);

// Write a [`while`] loop to create 5 divs. The div classes will be "**ray-1**", "**ray-2**", "**ray-3**", "**ray-4**", and "**ray-5**". Append each of these divs to the previously created "sun" div from step 5.

var i = 1;
while (i <= 5) {
    var rayElement = document.createElement("div");
    rayElement.className = "ray-" + i;
    sunElement.appendChild(rayElement);
    i++;
}

// Create a `div` element with a class name of "**mountain**" and append it to the previously created "view" div from step 3.
var mountainElement = document.createElement("div");
mountainElement.className = "mountain";
skyElement.appendChild (mountainElement);

// Create a `div` element with a class name of "**mountain-top**" and append it to the previously created "mountain" div from step 7.
var mountainTopElement = document.createElement("div");
mountainTopElement.className = "mountain-top";
mountainElement.appendChild (mountainTopElement);


// Write a [`do...while`] loop to create 3 divs. The div classes will be "**mountain-cap-1**", "**mountain-cap-2**", and "**mountain-cap-3**". Append each of these divs to the previously created "mountain-top" div from step 8.

var i = 1;
do {
    var capElement = document.createElement("div");
    capElement.className = "mountain-cap-" + i;
    mountainTopElement.appendChild(capElement);
    i++;
}
while (i <= 3);