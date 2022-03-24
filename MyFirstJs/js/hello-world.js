// function oldFunction(){
//     console.log("the Old Function");
// }
// let newerFunction = function(){
//     console.log("The newer Function");
// }

console.log("The script is being loaded");
console.log("The script is being loaded");
console.log("The script is being loaded");
console.log("The script is being loaded");
console.log("The script is being loaded");
console.log("The script is being loaded");
console.log("The script is being loaded");


const loaded = (msg) =>{
    console.log(`The HTML is loaded. Message is ${msg}`);
    let inputCtrl = document.getElementById("inp"); 
    inputCtrl.value = msg;
}

const newestFunction = (msg) => {
    console.log("The newest Function");
}

console.log("The script has been loaded");

