
 function http2() {
     fetch(`https://jsonplaceholder.typicode.com/jaja`)
    
    .then (respuesta => {
        if(!respuesta.ok)
        {throw new Error(`hubo un error ${respuesta.status}`)}
        return respuesta.json()
    })
    
    

    .then (datos => {console.log(datos)})
    .catch (error =>{
        console.log("Error", error)
    }
)
    
}
http2()