const blogList = document.getElementById('blog-list')

const url  = 'https://apis.scrimba.com/jsonplaceholder/posts'

fetch(url , {method:"GET"})
.then(response => response.json())
.then(data => {
    

    let top5Posts = data.slice(0,45)

    console.log(top5Posts)
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