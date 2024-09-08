function cambiaColorBorder(id) {
	id.style.borderColor = "#d0021b";
}

function regresaColorBorder(id) {
	id.style.borderColor = "#dddddd";
}

function mostrarLabel(id) {
	etiqueta = document.getElementById(id);
	etiqueta.style.display = 'block';
}

function ocultarLabel(id) {
	etiqueta = document.getElementById(id);
	etiqueta.style.display = 'none';
}

function mostrarDiv(div) {
	capa = document.getElementById(div);
	capa.style.display = 'block';
}

function ocultarDiv(div) {
	capa = document.getElementById(div);
	capa.style.display = 'none';
}

function cambiaColorFont(id) {
	document.getElementById(id).style.color = "#d0021b";
}

function regresaColorFont(id) {
	document.getElementById(id).style.color = "#545454";
}

function conMayusculas(field) {
    field.value = field.value.toUpperCase();
}
function conMinusculas(field) {
    field.value = field.value.toLowerCase();
}

function posicionInicial(){
	//document.location.href='#id_body';
	window.scroll(0,0);
}

function validarFechaCorrecta(valorFecha, etiqueta) {

	cajaTexto = document.getElementById(valorFecha);
	labelEtiqueta = document.getElementById(etiqueta);

	if (validaFechaDDMMAAAA(valorFecha)) {
		if (cajaTexto.value.length < 10) {
			mostrarLabel(etiqueta);
			cambiaColorBorder(cajaTexto);
			msgError = "Informaci&oacute;n incorrecta: Fecha incompleta\n";
			return msgError;
		} else {
			ocultarLabel(etiqueta);
			regresaColorBorder(cajaTexto);
			return "";

		}

	}

	if (!validaFechaDDMMAAAA(valorFecha)) {
		mostrarLabel(etiqueta);
		cambiaColorBorder(cajaTexto);
		msgError = "Informaci&oacute;n incorrecta: Formato de fecha incorrecta\n";
		return msgError;
	}
}

function validaFechaDDMMAAAA(valorFecha) {
	var fecha="";
	fecha=document.getElementById(valorFecha).value;

	
	var dtCh = "/";
	var minYear = 1900;
	var maxYear = 2100;
	function isInteger(s) {
		var i;
		for (i = 0; i < s.length; i++) {
			var c = s.charAt(i);
			if (((c < "0") || (c > "9")))
				return false;
		}
		return true;
	}
	function stripCharsInBag(s, bag) {
		var i;
		var returnString = "";
		for (i = 0; i < s.length; i++) {
			var c = s.charAt(i);
			if (bag.indexOf(c) == -1)
				returnString += c;
		}
		return returnString;
	}
	function daysInFebruary(year) {
		return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29
				: 28);
	}
	function DaysArray(n) {
		for (var i = 1; i <= n; i++) {
			this[i] = 31;
			if (i == 4 || i == 6 || i == 9 || i == 11) {
				this[i] = 30;
			}
			if (i == 2) {
				this[i] = 29;
			}
		}
		return this;
	}
	function isDate(dtStr) {
		
		var daysInMonth = DaysArray(12);
		var pos1 = dtStr.indexOf(dtCh);
		var pos2 = dtStr.indexOf(dtCh, pos1 + 1);
		var strDay = dtStr.substring(0, pos1);
		var strMonth = dtStr.substring(pos1 + 1, pos2);
		var strYear = dtStr.substring(pos2 + 1);
		strYr = strYear;
		if (strDay.charAt(0) == "0" && strDay.length > 1)
			strDay = strDay.substring(1);
		if (strMonth.charAt(0) == "0" && strMonth.length > 1)
			strMonth = strMonth.substring(1);
		for (var i = 1; i <= 3; i++) {
			if (strYr.charAt(0) == "0" && strYr.length > 1)
				strYr = strYr.substring(1);
		}
		month = parseInt(strMonth);
		day = parseInt(strDay);
		year = parseInt(strYr);
		if (pos1 == -1 || pos2 == -1) {
			return false;
		}
		if (strMonth.length < 1 || month < 1 || month > 12) {
			return false;
		}
		if (strDay.length < 1 || day < 1 || day > 31
				|| (month == 2 && day > daysInFebruary(year))
				|| day > daysInMonth[month]) {
			return false;
		}
		if (strYear.length != 4 || year == 0 || year < minYear
				|| year > maxYear) {
			return false;
		}
		if (dtStr.indexOf(dtCh, pos2 + 1) != -1
				|| isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
			return false;
		}
		return true;
	}
	if (isDate(fecha)) {
		
		return true;
	} else {
		
		return false;
	}
}

function soloLetras(e) {

	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " abcdefghijklmnopqrstuvwxyz'\u00f1\u0308";
	especiales = "8-37-39-46";

	tecla_especial = false;
	for ( var i in especiales) {
		if (key == especiales[i]) {
			tecla_especial = true;
			break;
		}
	}

	if (letras.indexOf(tecla) == -1 && !tecla_especial) {
		return false;
	}
}

function soloNumeros(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;

	if (key == 8 || key == 9)
		return true;

	key = String.fromCharCode(key);

	// var regex = /[0-9]|\./;
	var regex = /[0-9]/;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault)
			theEvent.preventDefault();
	}
}

function soloLetrasNumeros(e) {
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " 0123456789abcdefghijklmn√±opqrstuvwxyz";
	especiales = "8-37-39-46";

	tecla_especial = false;
	for ( var i in especiales) {
		if (key == especiales[i]) {
			tecla_especial = true;
			break;
		}
	}

	if (letras.indexOf(tecla) == -1 && !tecla_especial) {
		return false;
	}
}

function validaCurp(id_cajaTexto) {

	var curp = "";
	var reg = "";
	resultado = {};
	resultado.success = true;

	curp = document.getElementById(id_cajaTexto).value.toUpperCase();

	if (curp.length < 18) {
		resultado.mensaje = "La CURP " + curp
				+ " no tiene la longitud v\u00e1lida, verifique.";
		resultado.success = false;
		return resultado;
	}

	if (curp.length == 18) {
		var digito = calculaDigito(curp);

		reg = /[A-Z]{4}\d{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[A-Z0-9][0-9]/;

		if (curp.search(reg)) {
			// alert("La CURP " + curp + " no es valida, verifique ");
			resultado.mensaje = "La CURP " + curp
					+ " no es v\u00e1lida, verifique.";
			resultado.success = false;
			return resultado;
		}

//		if (!(parseInt(digito) == parseInt(curp.substring(17, 18)))) {
//			// alert("La CURP " + curp + " no es valida, revise el dÌgito
//			// verificador ");
//			resultado.mensaje = "La CURP " + curp
//					+ " no es v\u00e1lida, revise el d\u00edgito verificador.";
//			resultado.success = false;
//			return resultado;
//		}
		return resultado;
	} else {
		switch (curp.length) {
		case 10:
			reg = /[A-Z]{4}\d{6}/;
			break;
		case 11:
			reg = /[A-Z]{4}\d{6}[HM]/;
			break;
		case 12:
			reg = /[A-Z]{4}\d{6}[HM][A-Z]/;
			break;
		case 13:
			reg = /[A-Z]{4}\d{6}[HM][A-Z]{2}/;
			break;
		case 14:
			reg = /[A-Z]{4}\d{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]/;
			break;
		case 15:
			reg = /[A-Z]{4}\d{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{2}/;
			break;
		case 16:
			reg = /[A-Z]{4}\d{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}/;
			break;
		case 17:
			reg = /[A-Z]{4}\d{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[A-Z0-9]/;
			break;
		}

		if (curp.search(reg)) {
			// alert("La CURP " + curp + " no es valida, verifique ");
			resultado.mensaje = "La CURP " + curp
					+ " no es v\u00e1lida, verifique.";
			resultado.success = false;
			return resultado;
		}
		return resultado;
	}
}

function calculaDigito(curp) {
	var segRaiz = curp.substring(0, 17);
	var chrCaracter = "0123456789ABCDEFGHIJKLMN—OPQRSTUVWXYZ";
	var intFactor = new Array(17);
	var lngSuma = 0.0;
	var lngDigito = 0.0;

	for (var i = 0; i < 17; i++) {
		for (var j = 0; j < 37; j++) {
			if (segRaiz.substring(i, i + 1) == chrCaracter.substring(j, j + 1)) {
				intFactor[i] = j;
			}
		}
	}

	for (var k = 0; k < 17; k++) {
		lngSuma = lngSuma + ((intFactor[k]) * (18 - k));
	}

	lngDigito = (10 - (lngSuma % 10));

	if (lngDigito == 10) {
		lngDigito = 0;
	}

	return lngDigito;
}


function generaCurpLocal(primerApellido, segundoApellido, nombres, dia, mes, anio, entidad, sexo) {
	var curpCalculada = "";

	adminCurp.generarCURPbyDatos(primerApellido, segundoApellido, nombres, dia,	mes, anio, entidad, sexo, {
				callback : function(resultado) {
					if (resultado != null) {
						curpCalculada = resultado;
					}
				},
				async : false
			});
	return curpCalculada;
}