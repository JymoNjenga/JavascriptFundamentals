const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
});