
// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

`https://jsonplaceholder.typicode.com/posts/6`

async function paginaDePractica(city) {
try{
 const key = "f16b908203233e9edebf585dbc9606e1"
 const pagina = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
 

 const fet = await fetch(pagina)
 const dato = await fet.json()
 console.log(dato)

    }
    catch(error){ 
        console.log(error)

    }
}

paginaDePractica("Brazil")
