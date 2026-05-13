// Manejo del DOM (Document Object Model)

console.log(document)

// - Selección de elementos

// Métodos básicos

const myElementById = document.getElementById("id")

const myElementsByClass = document.getElementsByClassName("class")

const myElementsByTag = document.getElementsByTagName("tag")

// Métodos más modernos

document.querySelector(".paragraph")
document.querySelectorAll(".paragraph")