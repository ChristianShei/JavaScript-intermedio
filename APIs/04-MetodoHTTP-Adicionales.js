
    

    fetch('https://jsonplaceholder.typicode.com/posts/2',{
       method:"PATCH",
       headers: {"content-type":"application/json"},
       body:JSON.stringify({
        title:"SHEILAAAAA",
        body: "GATO"
       })
    })
      
    .then(respuesta => respuesta.json())
    .then(dato =>{console.log(dato)
      return dato}
)

.catch(error => console.log(error))


   