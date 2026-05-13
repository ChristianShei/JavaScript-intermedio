
// Manejo de errores

// response.status
async function pagina() {
    const pag = await fetch(`https://jsonplaceholder.typicode.com/jaja`)
    if(!pag.ok){
        throw new Error (`Error HTTP ${pag.status}`)
    }
    
}
pagina()

// responde.ok
async function web() {
    const pag = await fetch(`https://jsonplaceholder.typicode.com/jaja`)
    if(!pag.ok){
        throw new Error ("Error en la red")
    }
    
}
web()

// manejo con try/catch

async function http() {
   try{
        const pagina = await fetch (`https://jsonplaceholder.typicode.com/jaja`)
        if(!pagina.ok){
         throw new Error(`Error HTTP ${pagina.status}`)
        }

        const datos = await pagina.json()
        console.log(datos)
        
    }
        catch(error){
        console.log(`Ocurrio un`, error.message)
     }

    
}
http()

 function http2() {
     fetch(`https://jsonplaceholder.typicode.com/jaja`)
        .then (respuesta => {
         if(!respuesta.ok)
            {throw new Error(`hubo un error ${respuesta.status}`)}
         return respuesta.json()
    })
   

    .then (datos => {console.log(datos)})
    .catch (error =>{console.log("Error", error)
    }
)
    
}