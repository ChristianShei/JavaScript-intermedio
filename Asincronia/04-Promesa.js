function step1 (Callback){
setTimeout(() => {
    console.log("Paso 1 completado")
    Callback()
}, 1000)}

 
function step2 (Callback){
setTimeout(() => {
    console.log("Paso 2 completado")
    Callback()
}, 1000)}

function step3 (Callback){
setTimeout(() => {
    console.log("Paso 3 completado")
    Callback()
}, 1000)}

 step1(()=>{
     step2(()=>{
        step3(()=>{
            console.log("Todos los pasos completados")
        })
    })
 })
// - Promesa

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=> {
       const ok = false
       if(ok){
        resolve("Operación exitosa")
       } else{
        reject("Se ha producido un error")
       }
    },4000)
})


promise
.then(result =>{
    console.log(result)
})
.catch(error => {
    console.log(error)
})
function step1Promesa (){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("Paso 1 con promesa completado")
            resolve()
        },1000)
    })
}


 
function step2Promesa (){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("Paso 2 con promesa completado")
            resolve()
        },1000)
    })
}


function step3Promesa (){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("Paso 3 con promesa completado")
            resolve()
        },1000)
    })
}

step1Promesa()
.then(step2Promesa)
.then(step3Promesa)
.then(()=>{
    console.log("Todos los pasos con promeas completados")

})
