async function pagina(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/jajaja`)
        if(!response.ok){
               throw new Error(`Algo anda mal ${response.status}`)
        }
        const datos = await response.json()
        console.log(datos)
    
    }catch(error){
        console.log(`Algo salio mal`, error)
    }
}
pagina()