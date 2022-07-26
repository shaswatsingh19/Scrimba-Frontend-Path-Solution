// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// document.getElementById("increment-btn").addEventListener("click", function(){
//     count++;
//     console.log(count);
//  });

let count =0;
let countEl =document.getElementById('count-el');

document.getElementById('increment-btn').addEventListener('click',incrementCount);


function incrementCount(){
    count++;
    console.log(count);
    countEl.textContent = count;
}

document.getElementById('save-btn').addEventListener('click',save);
let prev_entry = document.getElementById('saved-value');
let saved = 0;



function save(){
    saved = count;
    prev_entry.textContent += saved +" - ";
    console.log("Total is "+saved);
}

