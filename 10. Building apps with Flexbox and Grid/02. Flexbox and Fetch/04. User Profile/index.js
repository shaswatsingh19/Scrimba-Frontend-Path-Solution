

async function getUser() {
    let res = await fetch('https://apis.scrimba.com/jsonplaceholder/users/1')

    let data = await res.json()
    return data
}

/* 
    Create a User Profile using data from
        https://jsonplaceholder.typicode.com/users/3
    
    The User Profile must be a Flexbox container with 4 components 
        1. Profile Header
            - With the User's name and username
        2. Company
            - Displaying information about their company
        3. Contact Details
            - Contains Email/Phone/Website
        4. User Address
*/


function getUsersDiv(data){

    return `
    <div class='profile-header'>
        <div>Name: ${data.name}</div>
        <div>Username: ${data.username}</div>
    </div>
    <div class='company'>
        <div>👩🏽‍💼${data.company.name}</div>
        <div>${data.company.catchPhrase}</div>
        <div>${data.company.bs}</div>
    </div>
    
    <div class='contact'>
        <div>📧${data.email}</div>
        <div>📞${data.phone}</div>
        <div>💻${data.website}</div>
    </div>
    <div class='address'>
        <div>${data.address.street}, ${data.address.suite}</div>
        <div>${data.address.city} ${data.address.zipcode}</div>
    </div>
`

}

getUser().then(data => {

    document.getElementById('container').innerHTML = getUsersDiv(data)

})