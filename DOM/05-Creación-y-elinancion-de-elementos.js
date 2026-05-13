// - Creación y eliminación de elementos

// Creación

const newParagraph = document.createElement("p")
newParagraph.textContent = "Este es un nuevo párrafo creado desde JS"
newParagraph.style.padding = "8px"

container.appendChild(newParagraph)

const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"

// Inserción en un lugar concreto

const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem, secondItem)

itemsList.append(newItem)
itemsList.prepend(newItem)
secondItem.before(newItem)
secondItem.after(newItem)

// Eliminación

newParagraph.remove()

// Eliminación tradicional

const parent = newParagraph.parentElement
parent. removeChild(newParagraph)