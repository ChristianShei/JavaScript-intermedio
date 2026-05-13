// - Modificación de atributos

// Obtención del atributo
const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobación de atributo
const hasTarget = link.hasAttribute("target")

// Eliminación de atributos
link.removeAttribute("targeth")