// - Elementos del DOM

function showMsg( ) {
alert("Clic!")
}
const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg)

sendButton.addEventListener("click", () => {
alert("Clic con una arrow function!")
})

// Eventos comunes

document.addEventListener("DOMContentLoader", () => {  //Se dispara cuando el HTML ya fue cargado
console. log("El DOM esta completamente cargado")
})

sendButton.addEventListener("mouseenter", () => { //Se activa cuando el mouse ENTRA sobre el botón.
sendButton.style.backgroundColor = "green" //🖱️ pasás el cursor arriba del botón
                                            //                  ➡ cambia a verde
})

sendButton.addEventListener("mouseleave", () => {//👉 Se activa cuando el mouse SALE del botón.
sendButton.style.backgroundColor = "blue"   //🖱️ sacás el cursor
                                                //➡ vuelve azul
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
// Código
})