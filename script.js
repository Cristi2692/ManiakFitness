import {cartItems}  from "./products.js"; 


document.addEventListener('DOMContentLoaded', (event) => {
  const searchInput = document.getElementById('site-search');
  const searchInput2 = document.getElementById('search');
  
  function managePlaceholderAndFocusClass(input) {
      input.addEventListener('focus', (event) => {
          event.target.placeholder = 'Texto de búsqueda'; // Cambia el placeholder
          event.target.classList.add('focus-placeholder'); // Añade una clase para cambiar el color del texto placeholder
      });

      input.addEventListener('blur', (event) => {
          event.target.placeholder = 'Pincha para buscar'; // Restaura el placeholder original
          event.target.classList.remove('focus-placeholder'); // Quita la clase que cambia el color del placeholder
      });
  }

  function addWideClassOnFocus(input) {
      input.addEventListener('focus', (event) => {
          event.target.classList.add('wide'); // Añade una clase para aumentar el ancho
      });

      input.addEventListener('blur', (event) => {
          event.target.classList.remove('wide'); // Quita la clase que aumenta el ancho
      });
  }

  // Aplica managePlaceholderAndFocusClass a ambos inputs
  managePlaceholderAndFocusClass(searchInput);
  managePlaceholderAndFocusClass(searchInput2);

  // Aplica addWideClassOnFocus solo al searchInput, no se aplica a modo movil.
  addWideClassOnFocus(searchInput);
});


function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Suma la cantidad de todos los elementos
    
    cartCountElement.textContent = totalCount; // Actualiza el texto con la nueva cantidad
    cartCountElement.style.display = totalCount > 0 ? 'block' : 'none'; // Muestra u oculta el contador
  }
  
  // Inicia el contador del carrito al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Actualiza el contador basado en los elementos del array
  });
