console.log("inicio")

setTimeout(() => {
console.log("Esto se ejecuta despues de 4 segundos")
},4000)

console.log("fin")

// - Problema: Callback hell

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