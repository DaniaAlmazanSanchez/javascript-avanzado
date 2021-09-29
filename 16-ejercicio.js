const $btn= document.querySelector('#btn');
const $dog=document.querySelector('#dog');


$btn.addEventListener('click', () =>{

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data =>{
        console.log(data);
        const img=document.createElement('img');
        img.src=data.message;
        $dog.appendChild(img);
  
 });
});