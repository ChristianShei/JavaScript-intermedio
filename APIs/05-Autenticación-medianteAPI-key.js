
async function getWeather(city) {
const APIkey = "b14844519af1eb5d5aa1b9dd8b7fa602"

const pag = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    
 try{
        const pagina = await fetch(pag)
        const datos = await pagina.json()
        console.log(datos)
        
    }
        catch(error){
        console.log(`Ocurrio un`, error.message)
     }
}
getWeather("Buenos aires")