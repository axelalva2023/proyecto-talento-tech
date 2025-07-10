const productosTecnologicos = [
{id: 1, nombre: "Celular", precio: 210, img: "./img/celular.png"},
  {id: 2, nombre: "Notebook", precio: 350, img: "./img/notebook.jpg"},
  {id: 3, nombre: "Auriculares", precio: 280, img: "./img/auriculares.jpg"},
 ];

 const productosContenedor = document.querySelector(".productos-contenedor")
  productosTecnologicos.forEach(productos =>{ //Axel ojo el nombre del servicios debe coincidir con el nombre del objeto y propiedades
    const card = document.createElement("div")

    const image = document.createElement("img")
    image.src = productos.img
    image.alt = productos.nombre
    image.id = productos.id

    const name = document.createElement("h3")
    name.textContent = productos.nombre

    const boton = document.createElement("a")
    boton.textContent =`$ ${productos.precio}`

    //Axel luego de eso agregamos añadimos todos los elementos creados a la card
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(boton)

    productosContenedor.appendChild(card)
    //Axel fuimos creando elementos asignadole a variables
    //Axel le estamos inyectando elementos desde js
});

console.log("hola");

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

    // Mostrar el texto con "confianza" en rojo si ya se escribió esa parte
    let textoActual = texto.substring(0, i);
    if (textoActual.includes("confianza")) {
        const index = textoActual.indexOf("confianza");
        const antes = textoActual.substring(0, index);
        const palabra = `<span style="color:red">confianza!</span>`;
        const despues = textoActual.substring(index + "confianza".length);
        titulo.innerHTML = antes + palabra + despues;
    } else {
        titulo.innerHTML = textoActual;
    }

    setTimeout(escribirEfecto, speed);
}

escribirEfecto();

function agregarEfectoCambioImagen(idElemento, imagenHover, imagenOriginal) {
  const elemento = document.getElementById(idElemento);
  
  if (!elemento) return; // Verifica si el elemento existe

  elemento.addEventListener("mouseenter", () => {
      elemento.src = imagenHover;
  });

  elemento.addEventListener("mouseleave", () => {
      elemento.src = imagenOriginal;
  });
}

// Aplicamos la función a cada imagen
agregarEfectoCambioImagen("1", "./img/robot.jpg", "./img/celular.png");
agregarEfectoCambioImagen("2", "./img/robot.jpg", "./img/notebook.jpg");
agregarEfectoCambioImagen("3","./img/robot.jpg", "./img/auriculares.jpg");