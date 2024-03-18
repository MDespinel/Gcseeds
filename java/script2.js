const CARRITO = []

function solicitarNombre(){
    alert("Bienvenido a Golden Collection Seeds")
    let nombre = prompt("Ingresa tu Nombre:")
    //Este bucle while es simplemente para condicionar que el programa no pueda continuar al menos que el usuario ingrese al menos una letra.
    while(nombre === ""){
        nombre = prompt("Ingresa tu nombre:")
    }
    return nombre;
}


//Para que la siguiente funcion sea mas dinamica, se podria pensar en un bucle para ir agregando mas de un producto al array.
function seleccionarProducto(){
    let productoElegido = prompt("Que llevara hoy? : a) Automaticas - b) Feminizadas - c) Regulares ")

    if(productoElegido === 'a'){
        CARRITO.push('Automaticas')
    } else if(productoElegido === 'b'){
        CARRITO.push('Feminizadas')
    } else if(productoElegido === 'c'){
        CARRITO.push('Regulares')
    }
  
}


//Al hacer carrito[0] hay que recordar que estamos accediendo al valor del array en ese indice, en este caso el indice cero.
function varificarPrecio(){
    let precio;
    if(CARRITO[0] === "Automaticas"){
        precio = 10000
    }
    if(CARRITO[0] === "Feminizadas"){
        precio = 12000
    }
    if(CARRITO[0] === "Regulares"){
        precio = 8000
    }
    return precio
}

function mostrarPrecioProducto(nombreCliente,precioProducto){
    alert("Gracias por su compra "+nombreCliente+" , el precio del producto es de : $ "+precioProducto)
}

const nombreCliente = solicitarNombre()
seleccionarProducto()
const precioProducto = varificarPrecio()
mostrarPrecioProducto(nombreCliente,precioProducto)