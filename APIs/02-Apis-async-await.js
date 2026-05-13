

// Apis async/await

async function obtenerUsuarios() {
    try {
        const pagina = await fetch ('https://jsonplaceholder.typicode.com/users')
        const datos = await pagina.json()// convierto los datos del servidor en JSON
        
        
         datos.forEach( usuario => { 
            if(usuario.address.city.startsWith('G')){
            console.log(usuario.name)
            console.log(usuario.email)
            console.log(usuario.address.city)

        }})

 } catch (error) {
        console.log("Error",error)
        
    }
    
}
obtenerUsuarios()

async function crearUsuarios() {
    try{
const usuario =  {
    nombre: "Christian",
    email: "christian@email.com",
    edad: 30
  };
    const pagina = await fetch('https://jsonplaceholder.typicode.com/users',{
        method : "POST",//Manda el objeto creado al servidror
        headers : {"Content-Type": "application/json"}, //sirve para indicar el tipo de contenido que enviamos.
        body : JSON.stringify(usuario)// transforma el objeto en JSON
        
    })
    const datos = await pagina.json()
        console.log(datos) // para convertir la respuesta de la API en un objeto de JavaScript y luego mostrarlo en consola.
}catch(error){
    console.log("Error", error)

}

}
crearUsuarios()