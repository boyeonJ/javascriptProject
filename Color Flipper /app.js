const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    console.log(getRandomNumber());
});


function getRandomNumber() {
    return Math.random() * colors.length;
}