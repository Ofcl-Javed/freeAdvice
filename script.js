// https://api.adviceslip.com/advice
const divider = document.querySelector(".divider");
const advice = document.querySelector("#advice");
const rank = document.querySelector("#rank");
let data;
const changeDivider = () =>{
    if(window.innerWidth < 600){
        divider.innerHTML = `<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`;
    }
    else{
        divider.innerHTML = `<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`;
    }
};
const callAdvice = async () =>{
    const slip =  "https://api.adviceslip.com/advice";
    try{
        let slipData = await fetch(slip);
        data = await slipData.json();
        rank.innerText = data.slip.id;
        advice.innerText = data.slip.advice;
    }catch (err){
        console.log(err);
    }
}
callAdvice();
window.onload = changeDivider;
window.addEventListener("resize", changeDivider);