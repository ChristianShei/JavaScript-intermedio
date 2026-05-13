// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

//'https://jsonplaceholder.typicode.com/posts`

async function pag(){
    try{

    const cambio = {
    id: 10,
    name: 'Sheila',
    username: 'shsuarez',
    email: 'shsuerez@gmail.com',
    phone: '024-648-3804',
    website: 'sheila.net.net'
  
    }
    const pagina = await fetch(`https://jsonplaceholder.typicode.com/users/2`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(cambio)

    })

    const dato = await pagina.json()
    console.log(dato)

    }catch(error){error => console.log(`hubo un error`, error)

    }
}
pag()