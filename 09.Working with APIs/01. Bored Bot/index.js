const btn = document.querySelector('#btn')
const h4 = document.querySelector('h4')

const url ="https://apis.scrimba.com/bored/api/activity"

const fetchSomething = () =>{
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        h4.textContent = data.activity
    })
    
}
btn.addEventListener('click',fetchSomething)



