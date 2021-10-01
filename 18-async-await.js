const $btn = document.querySelector('#btn');
const $cats = document.querySelector('#cats');

$btn.addEventListener('click', async() =>{
    const respuesta = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await respuesta.json();

    const imgcats = document.createElement('img');
    imgcats.src = data[0].url;
    imgcats.width = 200;

    $cats.appendChild(imgcats);


});