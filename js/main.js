function validateForm(){
	var nombre = document.getElementById("name").value;
	var contrasenia = document.getElementById("input-password").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var opcion = document.querySelector("select").value;

	if (nombre == null || nombre.length == 0 && apellido == null || apellido == 0 && correo == null || correo == 0 && contrasenia == null || contrasenia == 0) {
		var textError = document.createTextNode("Complete los campos.");
		var error = document.createElement("span");
		error.appendChild(textError);
		var ancla = document.getElementById("name");
		var padre = ancla.parentNode;
		var nuevoHijo = padre.insertBefore(error, ancla); 
	} else {

		if(nombre == null || nombre.length == 0 || nombre == "") {
			var textError = document.createTextNode("Escribe tu nombre.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("name");
			var padre = ancla.parentNode;
			var nuevoHijo = padre.insertBefore(error, ancla); 
		} else if ( /[0-9]/.test(nombre)) {
			var textError = document.createTextNode("No ingrese números.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("name");
			var padre = ancla.parentNode;
			var nuevoHijo = padre.insertBefore(error, ancla); 
		} else if ( /^[a-z]/.test(nombre.charAt(0))) {
			var textError = document.createTextNode("Escriba el primer caracter de su nombre en mayúscula.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("name");
			var padre = ancla.parentNode;
			var nuevoHijo = padre.insertBefore(error, ancla); 
		}

		if(apellido == null || apellido.length == 0 || apellido == "") {
			var textError = document.createTextNode("Escribe tu apellido.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("lastname");
			var padre = ancla.parentNode;
			var nuevoHijo = padre.insertBefore(error, ancla); 
		} else if (/[0-9]/.test(apellido)) {
			var textError = document.createTextNode("No ingrese números.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("lastname");
			var padre = ancla.parentNode;
		} else if (/^[a-z]/.test(apellido.charAt(0))) {
			var textError = document.createTextNode("Escriba el primer caracter de su apellido en mayúscula.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("lastname");
			var padre = ancla.parentNode;
		}

		var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!emailRegex.test(correo)) {
			var textError = document.createTextNode("Ingrese un correo válido.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("input-email");
			var padre = ancla.parentNode;
		};

		if (contrasenia == null || contrasenia.length == 0 || contrasenia == "") {
			var textError = document.createTextNode("Ingresa una contraseña.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("input-password");
			var padre = ancla.parentNode;
		} else if (contrasenia.length < 6){
			var textError = document.createTextNode("Contraseña no válida, debe tener como mínimo 6 caracteres.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("input-password");
			var padre = ancla.parentNode;
		};

		if (contrasenia == "123456" || contrasenia == "098754" || contrasenia == "password") {
			var textError = document.createTextNode("'123456', '098754' y 'password' no son contraseñas válidas.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("input-password");
			var padre = ancla.parentNode;
		};

		if (opcion == null || opcion == 0) {
			var textError = document.createTextNode("Elige una opción.");
			var error = document.createElement("span");
			error.appendChild(textError);
			var ancla = document.getElementById("select");
			var padre = ancla.parentNode;
		};
	};
}