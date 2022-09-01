const blogList = document.getElementById('blog-list')
const submitBtn = document.querySelector('button')




const url  = 'https://apis.scrimba.com/jsonplaceholder/posts'

fetch(url , {method:"GET"})
.then(response => response.json())
.then(data => {
    

    let top5Posts = data.slice(0,5)

    let arr =[]

    top5Posts.forEach(data => {
        const  title = document.createElement('h3')
        const  p = document.createElement('p')
        const  div = document.createElement('div')

        title.textContent = data.title
        p.textContent = data.body.substring(0,1).toUpperCase() + data.body.substring(1,)
        
        div.append(title,p)
        arr.push(div)
        // document.body.append(title)
        // document.body.append(p)
    })

    blogList.append(...arr)


})

 
document.getElementById('new-post').addEventListener('submit',function(e){
    
    
    const postTitle = document.getElementById('post-title')
    const postBody = document.getElementById('post-body')
    
    // Preventing for reloading the form 
    e.preventDefault()

    const post = {
        title:postTitle.value,
        body:postBody.value,
    }
    console.log(post)


    // Adding to DOM 
    const  title = document.createElement('h3')
    const  p = document.createElement('p')
    const  div = document.createElement('div')

    title.textContent = postTitle.value
    p.textContent = postBody.value.substring(0,1).toUpperCase() + postBody.value.substring(1,)
    
    div.append(title,p)
    blogList.prepend(div)
    
    postTitle.value = ''
    postBody.value = ''

    
})



