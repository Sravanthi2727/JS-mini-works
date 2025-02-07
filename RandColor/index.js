let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    let rcolor = random();
    h1.innerText = "The random color value is " + rcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = random();
});
function random(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}