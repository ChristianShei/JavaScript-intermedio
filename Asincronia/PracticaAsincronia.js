//  1. Crea una funcion para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse despues de 2 segundos y mostrar en consola "Hola, [nombre]"

console.log("inicio")

function saludar(nombre){

        setTimeout(() => {
            if(nombre){
           console.log(`hola ${nombre}`)}
        },4000)

    }

saludar("Christian")

console.log("fin")

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada funcion debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1 (callback){
    setTimeout(() => {
        console.log("Sheila")
         callback()
    }, 1000);
   
}
function task2 (callback){
    setTimeout(() => {
        console.log("Rocco")
         callback()
    }, 1000);
   
}
function task3 (){
    setTimeout(() => {
        console.log("Hijos")
         }, 1000);
    
}

task1(()=>{
    task2(()=>{
        task3()
    })
})
// 3. Crea una función para verificar un numero que retorne una Promesa. 
//    Si el numero es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function parImpar (numero){
    return new Promise((resolve, rejec)=>{
        setTimeout(() => {
            if (numero % 2 === 0){
                resolve("Numero par")
            }else rejec("Numero impar")
        }, 5000);
    })
}
parImpar(26)
.then(dato => console.log(dato))
.catch(error => console.log(error))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function  firstTask(){
    return new Promise(resolve=> {
        setTimeout(() => {
            console.log("Primera tarea completada")
            resolve()
            
        }, 1000);
    })
}


function  secondTask(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda tarea completada")
            resolve()
            
        }, 2000);
    })
}


function  thirdTask(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera tarea completada")
            resolve()
            
        }, 1500);
    })
}



// 5. Transforma el ejercicio anterior de Promesas en una funcion async/await llamada executeTasks().

async  function functionexecuteTasks () {

    const tarea1 = await firstTask()
    const tarea2 = await secondTask()
    const tarea3 = await thirdTask()
    
}

functionexecuteTasks()

// 6. Crea una funcion getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function  getUser(id){
return new Promise ((resolve, rejec)=>{
    setTimeout(() => {
        if(id < 5){
            resolve({
              nombre: "Usuario " + id 
            })
        }else {
            rejec("usuario no encontrado")
        }
    },2000);
})
}

async function usuario(id) {
    try {
    let resultado= await getUser(id)
    console.log(resultado)
    } catch (error) {
        console.log(error)
    }
    
}
usuario(3)


// 7. Intenta predecir el resultado de este codigo antes de ejecutarlo en la consola:
    console.log("Inicio")
   setTimeout(() => console.log("setTimeout ejecutado"), 0)
   Promise.resolve().then(() => console.log("Promesa resuelta"))
   console.log("Fin")
   // 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.


function a(a){
    return new Promise((resolve)=>{
        setTimeout(() => {
                resolve("letra A")
        }, 8000);
    })
}
function b(b){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("letra B")
        }, 9000);
    })
}
function c(c){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("letra C")
        }, 10000);
    })
}Promise.all([a("casa"),b("de"), c("sheila")])
  .then((resultado) => {
    console.log(resultado)
    console.log("Todas las promesas resueltas")
  })
  .catch((error) => {
    console.log(error)
  })
  // 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(segundos) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(segundos)
        },segundos * 3000);
    })
    
}
async function traemeLosSegundos(segundos){
    const resolve = await waitSeconds(segundos)
    console.log(resolve)
    console.log("Tiempo finalizado")
}
traemeLosSegundos(3)