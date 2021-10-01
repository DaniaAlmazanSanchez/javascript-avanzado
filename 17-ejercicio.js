
const $cards=document.querySelector('#cards');

const showCards=()=>{
fetch(' https://jsonplaceholder.typicode.com/albums/1/photos')
.then( resp => resp.json())
.then(data =>{

 data.forEach(card => {
     col=document.createElement('div');
     col.classList.add('col-md-4');
     col.innerHTML=
     ` <div class="card" >
       <img src="${card.url}" class="card-img-top" alt="...">
       <div class="card-body">
       <p class="card-text">${card.url}</p>
       </div>
       </div>
       ` ;
    $card.appendChild(col);
 });
})
}