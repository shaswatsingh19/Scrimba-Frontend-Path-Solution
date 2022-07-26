let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn  = document.getElementById("input-btn");
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn')
let ulEl = document.getElementById('ul-el');
inputBtn.addEventListener("click",saveLead);
deleteBtn.addEventListener("dblclick" ,deleteLead); // double clicked event
tabBtn.addEventListener('click',tabLead);



// getting leads from local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage) 


if(leadsFromLocalStorage){// run infinitly and always shows the lead until we clear the localstorage
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

// for(let i=0;i<myLeads.length;i++){
//     ulEl.innerHTML += '<li>'+myLeads[i] +'</li>';
// } More heavy as innerHTML running for 3 times

function render(arr){

    let listItems  = ""
    for(let i=0;i<arr.length;i++){
        
        // listItems+= '<li><a href=https://'+ myLeads[i]+' target="_blank">'+myLeads[i]+"</a></li>";
        // `
        //     <li>
        //         <a target='_blank' href='${myLeads[i]}'>
        //             ${myLeads[i]}
        //         </a>
        //     </li>
        // `
        listItems+= `
                    <li>
                        <a href= "${arr[i]}" target="_blank">
                        ${arr[i]}
                        </a>
                    </li>
                    `
    }
    ulEl.innerHTML = listItems;

}

// let i=0;
function saveLead(){
    console.log("button clicked")
    myLeads.push(inputEl.value);
    inputEl.value = '' // clear the input 
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads);
    // console.log(localStorage.getItem("myLeads"))
}


function deleteLead(){
    localStorage.clear();
    myLeads = []
    render(myLeads)
}


function tabLead(){
    
    // let link = window.location.href;
    // if(link){// for running in edge

    //     console.log(link)
    //     myLeads.push(link);
    //     localStorage.setItem("myLeads",JSON.stringify(myLeads))
    //     render(myLeads); 
    // }

    // else{

        chrome.tabs.query({active: true, currentWindow: true} , function(tabs){// here tabs  = [ { url : "url of the current tab"} ]
                console.log(tabs);
                myLeads.push(tabs[0].url);
                
                localStorage.setItem("myLeads",JSON.stringify(myLeads))
                render(myLeads);    
    
        })

    // }

}
