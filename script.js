 const goal = 25;
 let entries = []; 
 const entriesWrapper = document.querySelector("#entries");
 document.querySelector("#target").innerText = goal;
function addNewEntry(newEntry) {
entriesWrapper.removeChild(entriesWrapper.firstElementChild);
const listItem = document.createElement("li");
const listValue = document.createTextNode(newEntry.toFixed(1));
listItem.appendChild(listValue);
entriesWrapper.appendChild(listItem);
}
function reducer( total, currentValue){
return total + currentValue;
}
function calcTotal(){  
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById("total").innerText = totalValue;
    document.getElementById("progressTotal").innerText = totalValue;  
}
function calcAverage(){
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById("average").innerText = average;
}
function WeeklyHigh(){
const high = Math.max(...entries);
document.getElementById("high").innerText = high;
}
function calcGoal() {
    const totalvalue = entries.reduce(reducer).toFixed(1);
    const completedPercent = totalvalue / (goal / 100);
    const progresscircle = document.querySelector("#progresscircle");
    if (completedPercent > 100) completedPercent === 100;
    progresscircle.style.background = `conic-gradient(#70cb70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}


 function handleSubmit(event) {
     event.preventDefault();
     const entry = Number(document.querySelector("#entry").value);
    if (!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry); 
    calcTotal();
    calcAverage();
    WeeklyHigh();
    calcGoal();
 }

const form = document.querySelector ("form")
.addEventListener("submit" , handleSubmit); 