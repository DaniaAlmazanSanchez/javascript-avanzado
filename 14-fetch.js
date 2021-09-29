//fetch 
/**
 * Resources
 /post
 /comments
 /albums
 /photos
 /todos
 /users
 
 */
const peticion=fetch('https://jsonplaceholder.typicode.com/photos/1')
//const peticion=fetch('https://jsonplaceholder.typicode.com/todos/1')

.then(resp => resp.json()).then(data=>{
    console.log(data);
});

console.log(peticion);
