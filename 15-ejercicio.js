const $btn=document.querySelector('#btn');
const $cat=document.querySelector('#cat');

$btn.addEventListener('click',()=>{
fetch(' https://api.thecatapi.com/v1/images/search')
.then(resp => resp.json()).then(data =>{
    console.log(data);
    const imgcat=document.createElement('img');
    imgcat.src=data[0].url;
    imgcat.width=300;
    $cat.appendChild(imgcat);

});
});