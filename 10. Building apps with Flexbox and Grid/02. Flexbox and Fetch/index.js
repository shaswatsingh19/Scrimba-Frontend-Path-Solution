const url =  'https://apis.scrimba.com/hexcolors?count=300001'

fetch(url , )
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let i =0
        data.colors.forEach(color => {
            const div = document.createElement('div')
            div.textContent = i
            div.style.backgroundColor = color.value
            div.classList.add('items')
            document.getElementById('container').append(div)
            i+=1
        })
    })
  
    