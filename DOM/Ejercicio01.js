

const lista = document.getElementById("lista")
const titu = document.createElement("h1")

titu.textContent = "hola mundu me llamo Sheila" // Agrega el texto
titu.style.color = "blue" // cambia el texto en azul
titu.style.textAlign = "center" //Central el texto en el medio



lista.append(titu)
// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

        // Se agregoen el HTML
          //             <div style="text-align:center;">
          //                 <img src="Sheila.jpg" width="300" >
          //             </div>

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la pagina

const box = document.querySelectorAll(".resaltado")
box.forEach(B => {
    B.style.color= "blue";
    B.style.textAlign= "center"
    });

// 4. Crea un parrafo con id="paragraph" y cambia su color de texto a azul

const parraf = document.createElement("p")
parraf.id = "paragraph"
parraf.textContent = "Este es el ejercicio 4"

lista.append(parraf)
// 5. Agrega un boton que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const boton = document.getElementById("boton")
boton.addEventListener("click",()=>{
     const lisnue = document.createElement("li")
     lisnue.textContent = "Este es el ejercicio 5"
     lista.appendChild(lisnue)

})

// 6. Crea un parrafo con id="deleteParagraph" y un boton. Al hacer clic en el boton, elimina el parrafo del DOM

const p = document.createElement("p")
p.id = "deleteParagraph"
p.textContent = "Este es el ejercicio 6 que debe ser borrado por el boton"
lista.append(p)

const butdelet = document.createElement("button")
butdelet.id = "butdelet"
butdelet.textContent = "Delete"
lista.append(butdelet)

butdelet.addEventListener("click", () =>{
     p.remove()
})
// 7. Crea un <div id="content"> con algun texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const divv = document.createElement("div")
divv.id = "content"
divv.textContent = "Este es el ejercicio 7"
lista.append(divv)

divv.innerHTML = "<h2>Nuevo Contenido</h2>"

// 8. Crea un boton con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

const greet = document.createElement("button")
greet.id = "greetBtn"
greet.textContent = "Alerta"
lista.append(greet)

greet.addEventListener("click",()=>{
    alert ("Hola")
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const escribir = document.createElement("input")
escribir.id = "textInput"
lista.append(escribir)
escribir.addEventListener("input",()=>{
    di.textContent = escribir.value
})


const di = document.createElement("div")
di.id = "result"
lista.append(di)
// 10. Crea un boton con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const bu = document.createElement("button")
bu.id = "backgroundBtn"
bu.textContent = "presiona"
bu.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "black"
     document.body.style.backgroundColor = "blue"
})
lista.append(bu)