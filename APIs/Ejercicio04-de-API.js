
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