
// const count = document.querySelector('#count');
// const decrease = document.getElementsByClassName('btn')[0];
// const reset = document.getElementsByClassName('btn')[1];
// const increase = document.getElementsByClassName('btn')[2];

// decrease.addEventListener('click',()=> {
//     count.textContent = parseInt(count.textContent) - 1;
//     count.style.color = countColor(parseInt(count.textContent) - 1);
// });
// reset.addEventListener('click',()=> {
//     count.textContent =  0;
//     count.style.color = countColor(0);
// });
// increase.addEventListener('click',()=> {
//     count.textContent = 1 + parseInt(count.textContent);
//     count.style.color = countColor(1 + parseInt(count.textContent));
// });

let count = parseInt(document.querySelector('#count'));
const value = document.querySelector('#count');

const countColor = (n) => {
    if(n<0) return "red";
    if(n>0) return "green";
    return "#222";
}

const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const name = e.currentTarget.classList;
        if(name.contains('decrease')){
            count--;
        }else if(name.contains('increase')){
            count++;
        }else {
            count = 0;
        }
        
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
        value.style.color = "red";
        }
        if (count === 0) {
        value.style.color = "#222";
        }

        value.textContent = count;
    })
})