const textos = [
  { id: "texto1", texto: "{ Hola }" },
  { id: "texto2", texto: "Soy Yeral" },
  { id: "texto3", texto: "Desarrolladora Web" },
  { id: "texto4", texto: "& Consultora UX/UI".replace("ult", "<strong class='texto-delineado'>ult</strong>") }, 
  { id: "texto5", texto: "Perfil" },
  { id: "texto6", texto: "Profesional" },
  { id: "texto7", texto: "Servicios" },
  { id: "texto8", texto: "Proyectos" },
  { id: "texto9", texto: "Destacados" },
  { id: "texto10", texto: "Indeal" },
  { id: "texto11", texto: "Inversionistas"},
  { id: "texto12", texto: "Habilidades Técnicas" },
  { id: "texto13", texto: "& Formación Académica"},
  { id: "texto14", texto: "Gatodumas" },
  { id: "texto15", texto: "Escuela de Gastronomía"},
  { id: "texto16", texto: "Rediseño" },
  { id: "texto17", texto: "Optimización"},
  { id: "texto18", texto: "Mareauto" },
  { id: "texto19", texto: "Optimización"},
  { id: "texto20", texto: "Fleik"},
  { id: "texto21", texto: "Customer"},
  { id: "texto22", texto: "Journey"},
  { id: "texto23", texto: "Resultado"},
  { id: "texto24", texto: "Responsabilidades"},
  { id: "texto25", texto: "en el Proyecto"},
  { id: "texto26", texto: "Selvática"},
  { id: "texto27", texto: "Constructores"},


];

function escribirTexto(elementoId, texto, callback) {
  let elemento = document.getElementById(elementoId);
  if (!elemento) { 
    console.warn(`⚠️ Saltando '${elementoId}', no encontrado.`);
    if (callback) callback();
    return;
  }

  elemento.innerHTML = ""; // Limpia antes de escribir

  let partes = texto.match(/(<[^>]+>|[^<]+)/g); // Separa etiquetas y texto normal
  let i = 0;

  function escribir() {
    if (i < partes.length) {
      if (partes[i].startsWith("<")) {
        elemento.innerHTML += partes[i]; // Agrega etiquetas HTML directamente
      } else {
        let j = 0;
        function escribirLetra() {
          if (j < partes[i].length) {
            elemento.innerHTML += partes[i][j];
            j++;
            setTimeout(escribirLetra, 100);
          } else {
            i++;
            setTimeout(escribir, 100);
          }
        }
        escribirLetra();
        return;
      }
      i++;
      setTimeout(escribir, 100);
    } else if (callback) {
      setTimeout(callback, 500);
    }
  }
  escribir();
}

function animarTextos() {
  let textosFiltrados = textos.filter(t => document.getElementById(t.id));

  let indiceTexto = 0;

  function siguienteTexto() {
    if (indiceTexto < textosFiltrados.length) {
      escribirTexto(textosFiltrados[indiceTexto].id, textosFiltrados[indiceTexto].texto, siguienteTexto);
      indiceTexto++;
    }
  }

  siguienteTexto();
}

document.addEventListener("DOMContentLoaded", animarTextos);

// 🌀 SWIPER CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4, 
      spaceBetween: 20, 
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: { 
        320: { slidesPerView: 1 },  
        768: { slidesPerView: 2 },  
        1024: { slidesPerView: 3 }, 
        1200: { slidesPerView: 4 }  
      }
    });
  } else {
    console.error("Error: No se encontró el contenedor '.mySwiper'");
  }
});



// Carrusel
const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            
            // Crear el rastro
            const trail = document.createElement("div");
            trail.classList.add("cursor-trail");
            trail.style.left = `${e.clientX}px`;
            trail.style.top = `${e.clientY}px`;

            document.body.appendChild(trail);

            // Eliminar el rastro suavemente
            setTimeout(() => {
                trail.style.opacity = "0";
                setTimeout(() => {
                    trail.remove();
                }, 300);
            }, 100);
        });

        document.addEventListener('mousedown', () => {
            cursor.classList.add('active'); // Activa el color fluorescente
        });

        document.addEventListener('mouseup', () => {
            cursor.classList.remove('active'); // Vuelve a blanco al soltar el clic
        });






        // Esperar a que cargue la página antes de quitar la precarga
        window.addEventListener("load", () => {
            setTimeout(() => {
                document.querySelector(".loader-wrapper").style.display = "none";
            }, 1500); // Oculta la cortinilla después de la animación
        });
    



     // ✅ Código para hacer que el preloader desaparezca de forma suave
        window.addEventListener("load", function () {
            setTimeout(() => {
                let preloader = document.getElementById("preloader");
                let contenido = document.getElementById("contenido");

                preloader.classList.add("desaparecer"); // Desvanece el preloader
                contenido.classList.add("mostrar"); // Muestra el contenido suavemente

                setTimeout(() => {
                    preloader.style.display = "none"; // Oculta completamente
                }, 1000);
            }, 1000); // Tiempo extra para el efecto
        });



       