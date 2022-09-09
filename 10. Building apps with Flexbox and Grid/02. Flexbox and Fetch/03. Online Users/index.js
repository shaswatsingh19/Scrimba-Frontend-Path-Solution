
const container = document.getElementById('container')



async function getUsers(){
    const res  = await fetch('users.json')
    const data = await res.json()

    return data
}

function getUsersDiv(user){
    return `
        <div class="my-online-user">
            <div class="user-username">${user.username}</div>
            <div class="user-online"></div>
        </div>
        `
}
getUsers().then(users => {

    const arrDiv  = users.map(user => getUsersDiv(user)).join('')

    document.body.innerHTML = `
    <div class='header'>Whatsapp</div>
    <div id='container'>
        ${arrDiv}
    </div>
    <div class="main-content">Main Content</div>
    <div class="footer">Footer</div>
    `
})

