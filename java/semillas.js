// Renderizar las semillas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  // Cargar el archivo JSON
  fetch('../java/semillas.json')
      .then(response => response.json()) // Parsear la respuesta como JSON
      .then(semillas => renderizarSemillas(semillas)) // Pasar los datos a la función renderizarSemillas
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

// Función para renderizar las semillas en el DOM
function renderizarSemillas(semillas) {
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
