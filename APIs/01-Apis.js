
// Manejos de APIs

// APIs REST (https + URLs + JSON)

fetch('https://jsonplaceholder.typicode.com/posts')

    
    // Transforma la respuesta en JSON
  .then(response => response.json())
    // Procesa los datos
  .then(data => {
    console.log(data)
  return data }
    )
  .then((users)=>{
    users.forEach(usuario => {
      if(usuario.address.city.startsWith('G')){
      console.log(usuario.name);
      console.log(usuario.email);
      console.log(usuario.address.city)}
      
    });
  })
    // Captura errores
  .catch(error => {
    console.error('Error:', error);
  });
  
  
