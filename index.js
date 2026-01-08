
let Radius;
const PI = 3.14
document.getElementById("MySubmit").onclick = function () {
    Radius = document.getElementById("MyText").value;
    document.getElementById("p1").textContent = `Area of circle =  ${PI * Radius * Radius} cm^2 `
    document.getElementById("p2").textContent = `Circumferene of circle =  ${2 * PI * Radius} cm `

}


