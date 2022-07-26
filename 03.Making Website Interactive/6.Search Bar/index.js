let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup',function(event){
    let searchQuery = event.target.value.toLowerCase();
    // console.log(event.target.value)
    // console.log(username.value) 
    console.log(searchQuery)

    let allNamesDOMCollection  = document.getElementsByClassName('name') // can also use getElementByTagName('li')
    // console.log(allNamesDOMCollection
    
    for(let i=0;i<allNamesDOMCollection.length;i++){
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
        // console.log(searchQuery.length)
        
        //searchQuery == currentName.substring(0,searchQuery.length)
        // 'k' == karl.substring(0,1) (k)
        // this method only search from start
        if(currentName.includes(searchQuery))  
        {
            console.log(currentName)
            allNamesDOMCollection[i].style.display = 'block';
        }   
        else{
            // document.getElementById('result name').style.display = 'none'
            allNamesDOMCollection[i].style.display = 'none';
        }

    }
})

