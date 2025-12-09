// Menu
const btnMenu = document.querySelector('.btn-menu');
const navLinks = document.querySelector('.nav-links');

btnMenu.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});



let usuarios = [];

// Login
document.addEventListener("DOMContentLoaded", () => {
	const ventanaLogin = document.getElementById("ventanaLogin");
	const btnLogin = document.getElementById("btnLogin");
	const cerrarLogin = document.getElementById("cerrarLogin");

	btnLogin.addEventListener("click", () => {
		ventanaLogin.classList.add("mostrar");
	});

	cerrarLogin.addEventListener("click", () => {
		ventanaLogin.classList.remove("mostrar");
	});

	ventanaLogin.addEventListener("click", (e) => {
		if (e.target === ventanaLogin) {
			ventanaLogin.classList.remove("mostrar");
		}
	});
});

// Abrir Registro
const ventanaRegistro = document.getElementById("ventanaRegistro");
const btnRegistrarse = document.getElementById("btnRegistrarse");
const cerrarRegistro = document.getElementById("cerrarRegistro");

btnRegistrarse.addEventListener("click", () => {
  ventanaRegistro.classList.add("mostrar");
});

cerrarRegistro.addEventListener("click", () => {
  ventanaRegistro.classList.remove("mostrar");
});

ventanaRegistro.addEventListener("click", (e) => {
  if (e.target === ventanaRegistro) {
    ventanaRegistro.classList.remove("mostrar");
  }
});

// Alert de la ventana Login
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", () => {
  const usuarioIngresado = document.getElementById("usuarioCampo").value;
  const passwordIngresado = document.getElementById("passwordCampo").value;

  let encontrado = false;

  for(let i = 0; i < usuarios.length; i++){
      if(usuarios[i].usuario === usuarioIngresado && usuarios[i].password === passwordIngresado){
          encontrado = usuarios[i];
          break;
      }
  }

  if(encontrado){
      alert("Bienvenido " + encontrado.nombre);
      ventanaLogin.classList.remove("mostrar");
  } else {
      alert("Usuario o contraseña incorrectos.");
  }
});

// Alert de la ventana Registro
const btnRegistrarFinal = document.getElementById("btnRegistrarFinal");

btnRegistrarFinal.addEventListener("click", () => {
  const nombre = document.querySelector("#ventanaRegistro input[placeholder='Nombre completo']").value;

  
  let correo = document.querySelector("#ventanaRegistro input[type='email']").value;

  while (!(correo.includes("@") && correo.includes("."))) {
    correo = prompt("Correo inválido. Debe contener '@' y un punto.\nIngresa tu correo nuevamente:");

    if (correo === null) {
      alert("Registro cancelado.");
      return;
    }
  }

  const contraseña = document.querySelector("#ventanaRegistro input[type='password']").value;

  if(nombre === "" || correo === "" || contraseña === ""){
    alert("Completa todos los campos para registrarte.");
    return;
  }

  usuarios.push({
    usuario: correo,
    password: contraseña,
    nombre: nombre
  });

  alert("Usuario registrado correctamente.\nAhora puedes iniciar sesión.");
  ventanaRegistro.classList.remove("mostrar");
});



// Formulario
document.getElementById("formContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;
  const motivo = document.getElementById("motivo").value;

  const sexo = document.querySelector('input[name="sexo"]:checked')?.value || "No seleccionado";

  let servicios = [];
  document.querySelectorAll('.grupo-checkbox input[type="checkbox"]:checked').forEach(i => {
    servicios.push(i.value);
  });

  alert(
    "¡Formulario enviado con éxito!\n\n" +
    "Nombre: " + nombre + "\n" +
    "Correo: " + correo + "\n" +
    "Motivo: " + motivo + "\n" +
    "Sexo: " + sexo + "\n" +
    "Servicios de interés: " + (servicios.join(", ") || "Ninguno") + "\n" +
    "Mensaje: " + mensaje
  );
});
