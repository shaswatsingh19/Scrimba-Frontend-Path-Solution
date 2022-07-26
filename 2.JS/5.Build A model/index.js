let overlay = document.getElementById('overlay');

let open = document.getElementById('open-model');
let close = document.getElementById('close-model');


open.addEventListener('click',function(){
    overlay.style.display ='block';
});


close.addEventListener('click',function (){
    overlay.style.display ='none';
});