const charVal=document.getElementById("textarea");
let totalCount=document.getElementById("total-counter");
let remainingCount=document.getElementById("remaining-counter");
let userChar=0;
const updateCounter= ()=>{
userChar=charVal.value.length;
totalCount.innerText=userChar;
remainingCount.innerText = 150-userChar;

};


charVal.addEventListener("keyup",()=>updateCounter());
//Copy the text code
const copyText= ()=>{
charVal.select();  
charVal.setSelectionRange(0,99999);  //for mobile version
//API Call
navigator.clipboard.writeText(charVal.value);//Inside charVal's text.//imp
};