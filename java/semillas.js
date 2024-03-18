// Datos de las semillas
const semillas = [
    { id: 1, nombre: "Aurora Boreal Auto", 
      descripcion: " Esta cepa automática emite un aroma dulce y terroso con sutiles matices cítricos. Con un ciclo de vida de 70 días desde la germinación hasta la cosecha, la Aurora Boreal Auto produce cogollos resinosos con un contenido de THC del 18% y un CBD del 1.5%. Ofrece un efecto relajante y eufórico, perfecto para aliviar el estrés y mejorar el estado de ánimo.",
      imagen: "/images/auto1.webp", 
      precio: 150 },
    { id: 2, nombre: "Cítrico Dream Auto", 
      descripcion: "Esta variedad automática ofrece un aroma cítrico y refrescante, reminiscente de limones maduros. Con un ciclo de vida de 65 días, desde la germinación hasta la cosecha, la Cítrico Dream Auto produce cogollos densos y aromáticos con un contenido de THC del 20% y un CBD del 0.8%. Su efecto equilibrado combina la relajación física con un estado mental claro y enérgico.", 
      imagen: "/images/auto2.webp", 
      precio: 150 },
    { id: 3, nombre: "Púrpura Kush Auto", 
      descripcion: "Con un aroma intenso y afrutado con notas dulces y terrosas, la Púrpura Kush Auto es una variedad automática de ciclo de vida corto de solo 60 días. Sus cogollos exhiben tonos púrpuras y ofrecen un contenido de THC del 22% y un CBD del 0.5%. Su efecto índico es potente y relajante, ideal para combatir el insomnio y el dolor.",
      imagen: "/images/auto3.webp", 
      precio: 20 },
    { id: 4, nombre: "Nieve Blanca Auto", 
      descripcion: "Esta cepa automática emana un aroma fresco y floral con toques de especias. Con un ciclo de vida de 75 días, la Nieve Blanca Auto produce cogollos cubiertos de tricomas con un contenido de THC del 19% y un CBD del 1%. Su efecto híbrido equilibrado induce una sensación de relajación física y estimulación mental, perfecta para cualquier momento del día.",
      imagen: "/images/auto4.webp", 
      precio: 10 },
    { id: 5, nombre: "Dulce Sueño Fem", 
      descripcion: "Esta cepa feminizada emite un aroma dulce y floral con notas de bayas maduras. Con un período de floración de 8 semanas, la Dulce Sueño Fem produce cogollos densos y resinosos con un contenido de THC del 18% y un CBD del 1.5%. Su efecto relajante y calmante la hace ideal para aliviar el estrés y promover la relajación.", 
      imagen: "/images/fem1.webp", 
      precio: 15 },
    { id: 6, nombre: "Amnesia Haze Fem",
      descripcion: "Con un aroma cítrico y terroso con toques picantes, la Amnesia Haze Fem tiene un período de floración de 10 semanas. Sus cogollos son voluminosos y resinosos, con un contenido de THC del 22% y un CBD del 0.8%. Su efecto cerebral estimulante y energizante es perfecto para aumentar la creatividad y la concentración.", 
      imagen: "/images/fem2.webp", 
      precio: 20 },
    { id: 7, nombre: "Mango Kush Fem", 
      descripcion: "Esta variedad feminizada emana un aroma exótico y afrutado con notas tropicales de mango y piña. Con un período de floración de 9 semanas, la Mango Kush Fem produce cogollos compactos y aromáticos con un contenido de THC del 20% y un CBD del 0.5%. Su efecto relajante y eufórico es ideal para aliviar el dolor y mejorar el estado de ánimo.",
      imagen: "/images/fem3.webp",
      precio: 10 },
    { id: 8, nombre: "Gelato Fem:", 
      descripcion: "Con un aroma dulce y cremoso con matices de vainilla y bayas, la Gelato Fem tiene un período de floración de 8-9 semanas. Sus cogollos exhiben tonos púrpuras y ofrecen un contenido de THC del 24% y un CBD del 0.3%. Su efecto equilibrado combina la relajación física con una euforia mental suave, perfecta para disfrutar durante el día.", 
      imagen: "/images/fem4.webp", 
      precio: 15 },
    { id: 9, nombre: "Critical Kush Fem", 
      descripcion: "Esta cepa feminizada emite un aroma terroso y especiado con toques de madera y tierra. Con un período de floración de 7-8 semanas, la Critical Kush Fem produce cogollos densos y aromáticos con un contenido de THC del 23% y un CBD del 1%. Su efecto índico potente y relajante es ideal para combatir el insomnio y el estrés.", 
      imagen: "/images/fem5",
      precio: 20 }
    // Agrega más semillas según sea necesario
];

// Renderizar las semillas al cargar la página
document.addEventListener('DOMContentLoaded', renderizarSemillas);

// Función para renderizar las semillas en el DOM
function renderizarSemillas() {
    const semillasContainer = document.getElementById('semillas');

    semillas.forEach(semilla => {
        const semillaElement = document.createElement('div');
        semillaElement.classList.add('semilla');

        semillaElement.innerHTML = `
            <img src="${semilla.imagen}" alt="${semilla.nombre}">
            <h2>${semilla.nombre}</h2>
            <p>${semilla.descripcion}</p>
            <p>Precio: $${semilla.precio}</p>
            <button class="agregar-carrito" data-id="${semilla.id}">Agregar al Carrito</button>
        `;

        semillasContainer.appendChild(semillaElement);

        // Agregar evento de clic al botón de agregar al carrito
        semillaElement.querySelector('.agregar-carrito').addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const semillaSeleccionada = semillas.find(semilla => semilla.id === id);
            agregarAlCarrito(semillaSeleccionada);
        });
    });
}

// Función para agregar una semilla al carrito
function agregarAlCarrito(semilla) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(semilla);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    mostrarCarrito();
}

// Función para mostrar el carrito de compras
function mostrarCarrito() {
    const carritoContainer = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');

    carritoContainer.innerHTML = '';
    let total = 0;

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.forEach(item => {
        const carritoElement = document.createElement('li');
        carritoElement.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" class="miniatura">
            ${item.nombre} - $${item.precio}
        `;
        carritoContainer.appendChild(carritoElement);
        total += item.precio;
    });

    totalCarrito.textContent = total;
}

// Función para limpiar el carrito de compras
document.getElementById('limpiar-carrito').addEventListener('click', function() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
});
