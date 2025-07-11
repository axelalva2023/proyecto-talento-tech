document.addEventListener('DOMContentLoaded', () => {
    const productosDisponibles = [
      { id: '1', nombre: 'Celular', precio: 25.00, img: "./img/celular.png" },
      { id: '2', nombre: 'Notebook', precio: 40.00, img: "./img/notebook.jpg" },
      { id: '3', nombre: 'Auriculares', precio: 60.00, img: "./img/auriculares.jpg" },
    ];

    const contenedorListaProductos = document.getElementById('contenedorListaProductos');

    function renderizarProductos() {
      const productosHtml = productosDisponibles.map(producto => {
        return `
          <div class="item-producto">
            <h3>${producto.nombre}</h3>
            <img src="${producto.img}" alt="${producto.nombre}" id="${producto.id}">
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button class="btn-agregar-carrito" id="btn-agregar-${producto.id}">Agregar al Carrito</button>
          </div>
        `;
      });

      contenedorListaProductos.innerHTML = productosHtml.join('');
      adjuntarEventosAgregarCarrito();

      // 🟢 Ahora las imágenes existen, aplicamos efecto hover
      agregarEfectoCambioImagen("1", "./img/robot.jpg", "./img/celular.png");
      agregarEfectoCambioImagen("2", "./img/robot.jpg", "./img/notebook.jpg");
      agregarEfectoCambioImagen("3", "./img/robot.jpg", "./img/auriculares.jpg");
    }

    function adjuntarEventosAgregarCarrito() {
      productosDisponibles.forEach(producto => {
        const boton = document.getElementById(`btn-agregar-${producto.id}`);
        if (boton) {
          boton.addEventListener('click', () => {
            agregarProductoAlCarrito(producto);
          });
        }
      });
    }

    function agregarProductoAlCarrito(productoAAgregar) {
      let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
      const indiceProductoExistente = carrito.findIndex(item => item.id === productoAAgregar.id);

      if (indiceProductoExistente !== -1) {
        carrito[indiceProductoExistente].cantidad++;
      } else {
        carrito.push({
          id: productoAAgregar.id,
          nombre: productoAAgregar.nombre,
          precio: productoAAgregar.precio,
          cantidad: 1
        });
      }

      localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
      alert(`${productoAAgregar.nombre} agregado al carrito!`);
    }

    function agregarEfectoCambioImagen(idElemento, imagenHover, imagenOriginal) {
      const elemento = document.getElementById(idElemento);
      if (!elemento) return;

      elemento.addEventListener("mouseenter", () => {
        elemento.src = imagenHover;
      });

      elemento.addEventListener("mouseleave", () => {
        elemento.src = imagenOriginal;
      });
    }

    renderizarProductos();
  });

  // 📝 Efecto de escritura en el texto
  const texto = "Compre con confianza";
  let i = 0;
  let escribiendo = true;
  const speed = 100;

  function escribirEfecto() {
    const titulo = document.getElementById("texto");

    if (escribiendo) {
      if (i < texto.length) {
        i++;
      } else {
        escribiendo = false;
        setTimeout(escribirEfecto, speed * 3);
        return;
      }
    } else {
      if (i > 0) {
        i--;
      } else {
        escribiendo = true;
        setTimeout(escribirEfecto, speed * 3);
        return;
      }
    }

    let textoActual = texto.substring(0, i);
    if (textoActual.includes("confianza")) {
      const index = textoActual.indexOf("confianza");
      const antes = textoActual.substring(0, index);
      const palabra = `<span style="color:red">confianza</span>`;
      const despues = textoActual.substring(index + "confianza".length);
      titulo.innerHTML = antes + palabra + despues;
    } else {
      titulo.innerHTML = textoActual;
    }

    setTimeout(escribirEfecto, speed);
  }

  escribirEfecto();

