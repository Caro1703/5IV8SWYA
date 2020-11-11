function validar_cifrado(){
	var cadena = document.getElementById("cadena").value;
	var clave = document.getElementById("clave").value;
	if(cadena.length == 0 || clave.length == 0){
		document.getElementById("resultado").innerHTML = "Favor de llenar todos los campos";
	}else if(cadena.length<clave.length){

		document.getElementById("resultado").innerHTML = "La clave no puede ser más grande que el mensaje a cifrar";
	}else{
		main_cifrar()
	}
	
}
function validar_descifrado(){
	var cadena = document.getElementById("cadena").value;
	var clave = document.getElementById("clave").value;
	if(cadena.length == 0 || clave.length == 0){
		document.getElementById("resultado").value = "Favor de llenar todos los campos";
	}else if(cadena.length<clave.length){

		document.getElementById("resultado").innerHTML = "La clave no puede ser más grande que el mensaje a cifrar";
	}else{
		main_descifrar()
	}
	
}
function validar_cadena(e){
	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[a-zA-ZñÑ\s]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);

}

function validar_clave(e){
	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[a-zA-ZñÑ\s]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);
}


