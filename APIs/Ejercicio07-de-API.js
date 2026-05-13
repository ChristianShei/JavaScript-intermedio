// 7. Envi­a una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function pagina() {
    try {
    
       const pag = await fetch(`https://jsonplaceholder.typicode.com/posts/6`,{
        method: "DELETE",
        
       
        }) 
        const dato = await pag.json()
        console.log(dato)

    } catch (error) { console.log(`Hubo un error`, error)
        
    }
    
}
pagina()