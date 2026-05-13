//6. Realiza una petición PATCH para modificar Únicamente uno o dos campos de un recurso existente

async function pag() {
    try {
        const cambio = {
     id: 2,
     name: 'Sheila',
     username: 'shsuarez',
     email: 'shsuerez@gmail.com',
     phone: '024-648-3804',
     website: 'sheila.net.net'
          }
        const pagina = await fetch(`https://jsonplaceholder.typicode.com/posts/2`,{
           method: "PATCH",
           headers: {"Content-type":"application/json"},
           body:JSON.stringify(cambio)
        })
        const datos = await pagina.json(cambio)
        console.log(datos)
    } catch (error) {error => 
        console.log(`Hubo un error`, error)
        
    }
    
}
pag()