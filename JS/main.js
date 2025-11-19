// Menu
const btnMenu = document.querySelector('.btn-menu');
const navLinks = document.querySelector('.nav-links');

btnMenu.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

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
  const usuario = document.getElementById("usuarioCampo").value;
  const password = document.getElementById("passwordCampo").value;

  alert(
    "Usuario y contraseña inválidos\n\n" +
    "Usuario ingresado: " + usuario + "\n" +
    "Contraseña ingresada: " + password
  );
});

// Alert de la ventana Registro
const btnRegistrarFinal = document.getElementById("btnRegistrarFinal");

btnRegistrarFinal.addEventListener("click", () => {
  const nombre = document.querySelector("#ventanaRegistro input[placeholder='Nombre completo']").value;
  const correo = document.querySelector("#ventanaRegistro input[type='email']").value;
  const contraseña = document.querySelector("#ventanaRegistro input[type='password']").value;

  alert(
    "Datos de registro inválidos\n\n" +
    "Nombre ingresado: " + nombre + "\n" +
    "Correo ingresado: " + correo + "\n" +
    "Contraseña ingresada: " + contraseña
  );
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
