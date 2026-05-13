//-1 Realiza una peticion GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

 fetch(`https://jsonplaceholder.typicode.com/users`)

.then(datos => datos.json())


.then (dato => console.log(dato))
.catch(error => console.log(error))