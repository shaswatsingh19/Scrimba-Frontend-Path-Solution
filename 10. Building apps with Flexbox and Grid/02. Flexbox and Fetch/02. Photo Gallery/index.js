
const container = document.getElementById('container')

// https://picsum.photos/id/${photo.id}/100/100
async function getPhotos(){

    const res = await fetch('photos.json')
    const data = await res.json()

    return data

}


function getPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join('')
    
    return `<div class="my-photos">${myPhotosHtml}</div>`   
}

getPhotos().then(photos => {    
    container.innerHTML = `<div class="my-gallery">
        <img style="display: none;" class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/1/200/200" />
        ${getPhotosHtml(photos)}
    </div>`    
    
    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", event => {
            let selectedPhotoSrc = photoImg.src.substr(0, photoImg.src.length - 7)
   
            let selectedPhoto = document.getElementById("my-selected-photo")
            selectedPhoto.src = selectedPhotoSrc+"300/300"
            selectedPhoto.style.display = "inline"
        })
    })
})