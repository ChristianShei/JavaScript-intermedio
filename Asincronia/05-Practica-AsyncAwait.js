

// - 1 

function esperarSaludo(){
    return new Promise((resuelve)=> {
        setTimeout(() => {
            resuelve("Hola Christian") 
    },2000);
    })
}
async function mostrarSaludo() {
    const saludo = await esperarSaludo()
        console.log(saludo)
    }

mostrarSaludo()

// - 2
function cargarUsuario(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({
                nombre: "Sheila",
                edad: 10
            })
            
        },1500);
    })
}

async function mostrarUsuario(){
    const usuario = await cargarUsuario()
    console.log("Nombre:", usuario.nombre);
  console.log("Edad:", usuario.edad);
}

mostrarUsuario()


function obtenerPedido(){
    return new Promise((resolve, rejec)=>{
        let error = true;
        if(error){
            rejec("No se pudo obtener el pedido")
        }else resolve ("Pedido recibido")
    },1000)
}


async function verPedido() {
    try{
        let pedido = await obtenerPedido()
        console.log(pedido)
    } catch(error){
        console.log(error)
    }
    
}

verPedido()