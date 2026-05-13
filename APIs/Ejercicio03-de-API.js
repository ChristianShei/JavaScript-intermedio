
 async function http(){

const pag = await fetch(`https://jsonplaceholder.typicode.com/users`)
const datos = await pag.json()
    console.log(datos)
}
http()