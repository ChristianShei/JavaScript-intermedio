// 1. Realiza una peticion GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

// 4. Realiza una peticion POST a JSONPlaceholder para crear una nueva publicación. Envi­a un objeto con propiedades como title o body

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

// 6. Realiza una petición PATCH para modificar Únicamente uno o dos campos de un recurso existente

// 7. Envi­a una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API


//-1 Realiza una peticion GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

 fetch(`https://jsonplaceholder.typicode.com/users`)

.then(datos => datos.json())


.then (dato => console.log(dato))
.catch(error => console.log(error))

//-2 Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

async function pagina(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/jajaja`)
        if(!response.ok){
               throw new Error(`Algo anda mal${response.status}`)
        }

        const datos = await response.json()
        console.log(datos)
    
    }catch(error){
        console.log(`algo anda mal`,error)
    }
}
pagina()

//-3 Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

 async function http (){
    const pag = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const datos = await pag.json()
        console.log(datos)
}
http()
//-4 Realiza una peticion POST a JSONPlaceholder para crear una nueva publicación. Envi­a un objeto con propiedades como title o body

async function postt() {
    
try{
const info = {
    id: 12,
    title: "haciendo los ejercicios del profe mouredev"
}
const pag = await fetch(`https://jsonplaceholder.typicode.com/posts/`,{
    method : "POST",
    headers:  {"Content-Type": "application/json"},
    body: JSON.stringify(info)
})
const datos =  await pag.json()
console.log(datos)

}catch(error){
console.log("Hubo un Error ", error)
}

}
postt()

// -5 // 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en 


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
// 6. Realiza una petición PATCH para modificar Únicamente uno o dos campos de un recurso existenteasync function pag() {
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