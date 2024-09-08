	var cajaTexto_Curp;
	var cajaTexto_nombres;
	var cajaTexto_primerApellido;
	var cajaTexto_segundoApellido;
	var cajaTexto_sexo;
	var cajaTexto_fechaNacimiento;
	var cajaTexto_entidadNacimiento;
	
	var cajaTexto_resultado_nombres;
	var cajaTexto_resultado_apellidoPaterno;
	var cajaTexto_resultado_apellidoMaterno;
	var cajaTexto_resultado_curp;

	document.onready = function () 
	{		
		cajaTexto_Curp = document.getElementById('id_cajaTexto_curp_buscar_aspirante');
		cajaTexto_nombres=document.getElementById('id_cajaTexto_nombres_buscar_aspirante');
		cajaTexto_primerApellido = document.getElementById('id_cajaTexto_primer_apellido_buscar_aspirante');
		cajaTexto_segundoApellido = document.getElementById('id_cajaTexto_segundo_apellido_buscar_aspirante');
		cajaTexto_sexo = document.getElementById('id_sexo_buscar_aspirante');
		cajaTexto_fechaNacimiento = document.getElementById('calendarYear_buscar_aspirante');
		cajaTexto_entidadNacimiento = document.getElementById('id_entidad_nacimiento_buscar_aspirante');
		
		cajaTexto_resultado_nombres = document.getElementById('id_cajaTexto_nombre_muestraDatosGenerales');
		cajaTexto_resultado_apellidoPaterno = document.getElementById('id_cajaTexto_apellidoPaterno_muestraDatosGenerales');
		cajaTexto_resultado_apellidoMaterno = document.getElementById('id_cajaTexto_apellidoMaterno_muestraDatosGenerales');
		cajaTexto_resultado_curp = document.getElementById('id_cajaTexto_curp_muestraDatosGenerales');
		
		colorLetra="#F6F6F6";
		colorFila="#B38E5D";
		colorCelda="#9D2449";
		
		mantenimiento(diaInicioMantenimiento, horaInicioMantenimiento, diaFinMantenimiento, horaFinMantenimiento);
		
		//Funciones
		
		/* Eventos conMayusculas */
		$('#id_cajaTexto_curp_buscar_aspirante, #id_cajaTexto_nombres_buscar_aspirante, #id_cajaTexto_primer_apellido_buscar_aspirante, #id_cajaTexto_segundo_apellido_buscar_aspirante').keyup(function(event) {
			return conMayusculas(this);
		});
		
		/* Eventos soloLetras */
		$('#id_cajaTexto_nombres_buscar_aspirante, #id_cajaTexto_primer_apellido_buscar_aspirante, #id_cajaTexto_segundo_apellido_buscar_aspirante').keypress(function(event) {
			return soloLetras(event);
		});
		
		/* Eventos soloLetrasNumeros */
		$('#id_cajaTexto_curp_buscar_aspirante').keypress(function(event) {
			return soloLetrasNumeros(event);
		});
		
		/* Evento no permite copy-paste */
		$('#id_cajaTexto_nombres_buscar_aspirante, #id_cajaTexto_primer_apellido_buscar_aspirante, #id_cajaTexto_segundo_apellido_buscar_aspirante, #calendarYear_buscar_aspirante').bind('copy paste', function (e) {
		    e.preventDefault();
		});
		
		///// QUITA ERRORES BORDER, ASTERISCO, LEYENDA CAMPO OBLIGATORIO RED  /////
		
		$('#id_colapsed_panel_curp_letras').click(function() {
			$('#id_cajaTexto_curp_buscar_aspirante').val("");
			quitarError(id_cajaTexto_curp_buscar_aspirante,'etiqueta_curp_buscar_aspirantes','id_error_busqueda_curp');
			quitarError(id_cajaTexto_curp_buscar_aspirante,'etiqueta_curp_invalido_buscar_aspirantes','id_error_busqueda_curp');
			ocultarDiv('id_ventana_error_buscar_aspirante');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		$('#id_colapsed_panel_curp_btn').click(function() {
			$('#id_cajaTexto_curp_buscar_aspirante').val("");
			quitarError(id_cajaTexto_curp_buscar_aspirante,'etiqueta_curp_buscar_aspirantes','id_error_busqueda_curp');
			quitarError(id_cajaTexto_curp_buscar_aspirante,'etiqueta_curp_invalido_buscar_aspirantes','id_error_busqueda_curp');
			ocultarDiv('id_ventana_error_buscar_aspirante');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		$('#id_colapsed_panel_busq_datos_letras').click(function() {
			limpiaDatosErrores();
			ocultarDiv('id_ventana_error_buscar_aspirante');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		$('#id_colapsed_panel_busq_datos_btn').click(function() {
			limpiaDatosErrores();
			ocultarDiv('id_ventana_error_buscar_aspirante');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		/* Eventos CURP */
		$('#id_cajaTexto_curp_buscar_aspirante').keyup(function() {
			quitarError(id_cajaTexto_curp_buscar_aspirante,'etiqueta_curp_buscar_aspirantes','id_error_busqueda_curp');
			quitarError(id_cajaTexto_curp_buscar_aspirante,'etiqueta_curp_invalido_buscar_aspirantes','id_error_busqueda_curp');
			ocultarDiv('id_ventana_error_buscar_aspirante');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		$('#id_cajaTexto_nombres_buscar_aspirante').keyup(function() {
			quitarError(id_cajaTexto_nombres_buscar_aspirante,'etiqueta_nombre_buscar_aspirantes','id_error_busqueda_nombre');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
				
		$('#id_cajaTexto_primer_apellido_buscar_aspirante').keyup(function() {
			quitarError(id_cajaTexto_primer_apellido_buscar_aspirante,'etiqueta_primer_apellido_buscar_aspirantes','id_error_busqueda_prime_ape');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		$('#id_cajaTexto_segundo_apellido_buscar_aspirante').keyup(function() {
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		$('#id_sexo_buscar_aspirante').change(function() {
			quitarError(id_sexo_buscar_aspirante,'etiqueta_sexo_buscar_aspirantes','id_error_busqueda_sexo');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		$('#calendarYear_buscar_aspirante').change(function() {
			quitarError(calendarYear_buscar_aspirante,'etiqueta_fecha_nacimiento_buscar_aspirantes','id_error_busqueda_fech_nac');
			quitarError(calendarYear_buscar_aspirante,'etiqueta_formato_fecha_nacimiento_buscar_aspirantes','id_error_busqueda_fech_nac');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		$('#id_entidad_nacimiento_buscar_aspirante').change(function() {
			quitarError(id_entidad_nacimiento_buscar_aspirante,'etiqueta_entidad_nacimiento_buscar_aspirantes','id_error_busqueda_lug_nac');
			ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
		});
		
		//////////////////////
		
		/* datos buscar aspirante */
		$('#id_cajaTexto_nombres_buscar_aspirante').keyup(function() {
							if ($('#id_ventana_error_buscar_aspirante') != null) {
								if ($('#id_cajaTexto_nombres_buscar_aspirante').val() != ""	
									    && $('#id_cajaTexto_primer_apellido_buscar_aspirante').val() != ""
										&& $('#calendarYear_buscar_aspirante').val() != ""
										&& $('#id_sexo_buscar_aspirante').val() != null
										&& $('#id_entidad_nacimiento_buscar_aspirante').val() != null) {
									ocultarDiv('id_ventana_error_buscar_aspirante');
								}
							}
						});
		
		$('#id_cajaTexto_primer_apellido_buscar_aspirante').keyup(function() {
			if ($('#id_ventana_error_buscar_aspirante') != null) {
				if ($('#id_cajaTexto_nombres_buscar_aspirante').val() != ""
						&& $('#id_cajaTexto_primer_apellido_buscar_aspirante').val() != ""
						&& $('#calendarYear_buscar_aspirante').val() != ""
						&& $('#id_sexo_buscar_aspirante').val() != null
						&& $('#id_entidad_nacimiento_buscar_aspirante').val() != null) {
					ocultarDiv('id_ventana_error_buscar_aspirante');
				}
			}
		});
		
		
		$('#id_sexo_buscar_aspirante').change(function() {
			if ($('#id_ventana_error_buscar_aspirante') != null) {
				if ($('#id_cajaTexto_nombres_buscar_aspirante').val() != ""
						&& $('#id_cajaTexto_primer_apellido_buscar_aspirante').val() != ""
						&& $('#calendarYear_buscar_aspirante').val() != ""
						&& $('#id_sexo_buscar_aspirante').val() != null
						&& $('#id_entidad_nacimiento_buscar_aspirante').val() != null) {
					ocultarDiv('id_ventana_error_buscar_aspirante');
				}
			}
		});
		
		$('#calendarYear_buscar_aspirante').keyup(function() {
			if ($('#id_ventana_error_buscar_aspirante') != null) {
				if ($('#id_cajaTexto_nombres_buscar_aspirante').val() != ""
						&& $('#id_cajaTexto_primer_apellido_buscar_aspirante').val() != ""
						&& $('#calendarYear_buscar_aspirante').val() != ""
						&& $('#id_sexo_buscar_aspirante').val() != null
						&& $('#id_entidad_nacimiento_buscar_aspirante').val() != null) {
					ocultarDiv('id_ventana_error_buscar_aspirante');
				}
			}
		});
		
		$('#id_entidad_nacimiento_buscar_aspirante').change(function() {
			if ($('#id_ventana_error_buscar_aspirante') != null) {
				if ($('#id_cajaTexto_nombres_buscar_aspirante').val() != ""
						&& $('#id_cajaTexto_primer_apellido_buscar_aspirante').val() != ""
						&& $('#calendarYear_buscar_aspirante').val() != ""
						&& $('#id_sexo_buscar_aspirante').val() != null
						&& $('#id_entidad_nacimiento_buscar_aspirante').val() != null) {
					ocultarDiv('id_ventana_error_buscar_aspirante');
				}
			}
		});
		
		$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			    $('a.scroll-top').fadeIn('slow');
			    } else {
			        	 $('a.scroll-top').fadeOut('slow');
			           }
		});

		$('a.scroll-top').click(function(event) {
			event.preventDefault();
			    $('html, body').animate({scrollTop: 0}, 1000);
		});
		
	};
	
	function limpiaDatosErrores(){
		$('#id_cajaTexto_nombres_buscar_aspirante').val("");
		$('#id_cajaTexto_primer_apellido_buscar_aspirante').val("");
		$('#id_cajaTexto_segundo_apellido_buscar_aspirante').val("");
		$('#id_sexo_buscar_aspirante').val("");
		$('#calendarYear_buscar_aspirante').val("");
		$('#id_entidad_nacimiento_buscar_aspirante').val("");
		quitarError(id_cajaTexto_nombres_buscar_aspirante,'etiqueta_nombre_buscar_aspirantes','id_error_busqueda_nombre');
		quitarError(id_cajaTexto_primer_apellido_buscar_aspirante,'etiqueta_primer_apellido_buscar_aspirantes','id_error_busqueda_prime_ape');
		quitarError(id_sexo_buscar_aspirante,'etiqueta_sexo_buscar_aspirantes','id_error_busqueda_sexo');
		quitarError(calendarYear_buscar_aspirante,'etiqueta_fecha_nacimiento_buscar_aspirantes','id_error_busqueda_fech_nac');
		quitarError(calendarYear_buscar_aspirante,'etiqueta_formato_fecha_nacimiento_buscar_aspirantes','id_error_busqueda_fech_nac');
		quitarError(id_entidad_nacimiento_buscar_aspirante,'etiqueta_entidad_nacimiento_buscar_aspirantes','id_error_busqueda_lug_nac');
	}
	
	function quitarError(colorBoarder, etiquetaError, colorFont) {

		regresaColorBorder(colorBoarder);
		ocultarLabel(etiquetaError);
		regresaColorFont(colorFont);
		
	};
	
	function foco(elementoId) {
		$('html,body').animate({
			scrollTop : $(elementoId).offset().top
		}, 2000);
	};
	
	function avisoPrivacidad() {

		var botonPrivacidad = document.getElementById('btn_avisoPrivacidad');

		if (botonPrivacidad.getAttribute('aria-expanded') == 'false') {
			foco('#id_jsp_aviso_privacidad');
		};
		
		if (botonPrivacidad.getAttribute('aria-expanded') == 'true') {
			foco('#id_inicio_pagina');
		};
		
	};
	

function validaInfoByCurp() {
	ocultarDiv('id_ventana_info_calific_dispo2');
	ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');

	//$('#id_btn_consul_alumn_calific').addClass("disabled");
	var curp="";
	curp = cajaTexto_Curp.value;
	regresaColorBorder(cajaTexto_Curp);
	ocultarLabel('etiqueta_curp_buscar_aspirantes');
	ocultarLabel('etiqueta_curp_invalido_buscar_aspirantes');
	ocultarDiv('id_ventana_error_buscar_aspirante');
	regresaColorFont('id_error_busqueda_curp');
	if (curp == "") {
		cambiaColorBorder(cajaTexto_Curp);
		mostrarLabel('etiqueta_curp_buscar_aspirantes');
		cambiaColorFont('id_error_busqueda_curp');
		mostrarDiv('id_ventana_error_buscar_aspirante');
		msgError = foco('#id_inicio_pagina');
		//$('#id_btn_consul_alumn_calific').removeClass("disabled");
	}
	else {
		var resultadoValidaEstructuraCurp = validaCurp('id_cajaTexto_curp_buscar_aspirante');
		if (resultadoValidaEstructuraCurp.success) {
			adminCalificaciones.validaCicloActualyFecha( curp, {
				callback : function(result) {
					console.log("Resultado Validaci&oacute;n: "+result);
					if(result==1){
						ocultarDiv('id_ventana_info_calific_dispo2');
						document.getElementById('id_ventana_error_buscar_aspirante_datos_incorrectos').innerHTML = "Las calificaciones del periodo no est&aacute;n <b>disponibles</b>, consulta al final del mismo.";
					} else if(result==2){
						ocultarDiv('id_ventana_info_calific_dispo2');
						document.getElementById('id_ventana_error_buscar_aspirante_datos_incorrectos').innerHTML = "El Alumno esta registrado pero sin evaluaciones.";
					} else if(result==3){
						ocultarDiv('id_ventana_info_calific_dispo2');
						document.getElementById('id_ventana_error_buscar_aspirante_datos_incorrectos').innerHTML = "El Alumno esta registrado pero no en el ciclo escolar.";
					} else {
						ocultarDiv('id_ventana_info_calific_dispo2');
						document.getElementById('id_ventana_error_buscar_aspirante_datos_incorrectos').innerHTML = "Con los datos que ingresaste no se encontr&oacute; informaci&oacute;n del alumno, favor de revisar nuevamente.";
					}
					if(result==3){
						//mostrarDiv('id_ventana_info_calific_dispo');
						ocultarDiv('id_capa_muestra_calific_ciclo_actual');
						adminCalificaciones.consultaCalificacionesCicloActual(curp, {
							callback : function(resultado) {

								if (resultado == null) {
									mostrarDiv('id_ventana_aviso_error');
									ocultarDiv('id_jsp_buscar_aspirante');
									ga('send', 'event', 'Errores','ErrorConsultaDatosByCURP','Error en la conexion a la base de datos al consultar los datos por CURP');
								} else {
									if (resultado.evaluacionesRegulares != null) {
										//$('#id_btn_consul_alumn_calific').addClass("disabled");
										llenaTablaCicloActual(resultado);
									} else {
										//$('#id_btn_consul_alumn_calific').removeClass("disabled");
										mostrarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
										ga('send', 'event', 'Consultas', 'ErrorBusquedaAlumnoByCURP', 'Usuario busco con CURP que no se encontro en la base de datos');
									}
								}
							},
							async : false
						});
					} else {
						ocultarDiv('id_ventana_info_calific_dispo');
						mostrarDiv('id_capa_muestra_calific_ciclo_actual');
						adminCalificaciones.consultaCalificacionesCicloActual(curp, {
							callback : function(resultado) {

								if (resultado == null) {
									mostrarDiv('id_ventana_aviso_error');
									ocultarDiv('id_jsp_buscar_aspirante');
									ga('send', 'event', 'Errores','ErrorConsultaDatosByCURP','Error en la conexion a la base de datos al consultar los datos por CURP');
								} else {
									if (resultado.evaluacionesRegulares != null) {
										//$('#id_btn_consul_alumn_calific').addClass("disabled");
										llenaTablaCicloActual(resultado);
									} else {
										//$('#id_btn_consul_alumn_calific').removeClass("disabled");
										mostrarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
										ga('send', 'event', 'Consultas', 'ErrorBusquedaAlumnoByCURP', 'Usuario busco con CURP que no se encontro en la base de datos');
									}
								}
							},
							async : false
						});
					}
						
				},errorHandler:function(errorString, exception)
					{ alert("Oops: " + errorString); }
				,async : false
				});

		}

		else {
			//$('#id_btn_consul_alumn_calific').removeClass("disabled");
			document.getElementById('etiqueta_curp_invalido_buscar_aspirantes').innerHTML = resultadoValidaEstructuraCurp.mensaje;
			cambiaColorBorder(cajaTexto_Curp);
			mostrarLabel('etiqueta_curp_invalido_buscar_aspirantes');
			cambiaColorFont('id_error_busqueda_curp');
		}
	}
}

function validaInfoByDatos() {
	ocultarDiv('id_ventana_info_calific_dispo2');
	ocultarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
	var nombres=cajaTexto_nombres.value;
	var primerApellido=cajaTexto_primerApellido.value;
	var segundoApellido= cajaTexto_segundoApellido.value;
	var sexo = cajaTexto_sexo.value;
	var fechaNacimiento = cajaTexto_fechaNacimiento.value;
	var entidadNacimiento = cajaTexto_entidadNacimiento.value;
	var msgError = "";

	regresaColorBorder(cajaTexto_nombres);
	regresaColorBorder(cajaTexto_primerApellido);
	regresaColorBorder(cajaTexto_segundoApellido);
	regresaColorBorder(cajaTexto_sexo);
	regresaColorBorder(cajaTexto_fechaNacimiento);
	regresaColorBorder(cajaTexto_entidadNacimiento);

	ocultarLabel('etiqueta_nombre_buscar_aspirantes');
	ocultarLabel('etiqueta_primer_apellido_buscar_aspirantes');
	ocultarLabel('etiqueta_segundo_apellido_buscar_aspirantes');
	ocultarLabel('etiqueta_sexo_buscar_aspirantes');
	ocultarLabel('etiqueta_fecha_nacimiento_buscar_aspirantes');
	ocultarLabel('etiqueta_entidad_nacimiento_buscar_aspirantes');

	regresaColorFont('id_error_busqueda_nombre');
	regresaColorFont('id_error_busqueda_prime_ape');
	regresaColorFont('id_error_busqueda_sexo');
	regresaColorFont('id_error_busqueda_fech_nac');
	regresaColorFont('id_error_busqueda_lug_nac');

	ocultarDiv('id_ventana_error_buscar_aspirante');

	if (nombres == "") {
		mostrarLabel('etiqueta_nombre_buscar_aspirantes');
		cambiaColorBorder(cajaTexto_nombres);
		msgError = foco('#id_inicio_pagina');
		cambiaColorFont('id_error_busqueda_nombre');
		mostrarDiv('id_ventana_error_buscar_aspirante');
	}
	if (primerApellido == "") {
		mostrarLabel('etiqueta_primer_apellido_buscar_aspirantes');
		cambiaColorBorder(cajaTexto_primerApellido);
		msgError = foco('#id_inicio_pagina');
		cambiaColorFont('id_error_busqueda_prime_ape');
		mostrarDiv('id_ventana_error_buscar_aspirante');
	}

	if (sexo == "") {
		mostrarLabel('etiqueta_sexo_buscar_aspirantes');
		cambiaColorBorder(cajaTexto_sexo);
		msgError = foco('#id_inicio_pagina');
		cambiaColorFont('id_error_busqueda_sexo');
		mostrarDiv('id_ventana_error_buscar_aspirante');
	}
	if (fechaNacimiento == "") {
		mostrarLabel('etiqueta_fecha_nacimiento_buscar_aspirantes');
		cambiaColorBorder(cajaTexto_fechaNacimiento);
		msgError = foco('#id_inicio_pagina');
		cambiaColorFont('id_error_busqueda_fech_nac');
		mostrarDiv('id_ventana_error_buscar_aspirante');
	}

	if (fechaNacimiento != "") {
		msgError = msgError + validarFechaCorrecta('calendarYear_buscar_aspirante','etiqueta_formato_fecha_nacimiento_buscar_aspirantes');
	}

	if (entidadNacimiento == "") {
		mostrarLabel('etiqueta_entidad_nacimiento_buscar_aspirantes');
		cambiaColorBorder(cajaTexto_entidadNacimiento);
		msgError = foco('#id_inicio_pagina');
		cambiaColorFont('id_error_busqueda_lug_nac');
		mostrarDiv('id_ventana_error_buscar_aspirante');
	}

	if (msgError != "") {
		//(msgError);
	} else {
		var dia = fechaNacimiento.substring(0, 2);
		var mes = fechaNacimiento.substring(3, 5);
		var anio = fechaNacimiento.substring(6, 10);
		var curpGenerado = generaCurpLocal(primerApellido, segundoApellido,
				nombres, dia, mes, anio, entidadNacimiento, sexo);
		//(curpGenerado);
		console.log("CURP Generado: "+ curpGenerado );
		adminCalificaciones.validaCicloActualyFecha( curpGenerado, {
			callback : function(result) {
				console.log("Resultado Validación: "+result);
					if(result==1){
						ocultarDiv('id_ventana_info_calific_dispo2');
						document.getElementById('id_ventana_error_buscar_aspirante_datos_incorrectos').innerHTML = "Las calificaciones del periodo no est&aacute;n <b>disponibles</b>, consulta al final del mismo.";
					} else if(result==2){
						ocultarDiv('id_ventana_info_calific_dispo2');
						document.getElementById('id_ventana_error_buscar_aspirante_datos_incorrectos').innerHTML = "El Alumno esta registrado pero sin evaluaciones.";
					} else if(result==3){
						ocultarDiv('id_ventana_info_calific_dispo2');
						document.getElementById('id_ventana_error_buscar_aspirante_datos_incorrectos').innerHTML = "El Alumno esta registrado pero no en el ciclo escolar.";
					} else {
						ocultarDiv('id_ventana_info_calific_dispo2');
						document.getElementById('id_ventana_error_buscar_aspirante_datos_incorrectos').innerHTML = "Con los datos que ingresaste no se encontr&oacute; informaci&oacute;n del alumno, favor de revisar nuevamente.";
					}

				if(result==3){
					//mostrarDiv('id_ventana_info_calific_dispo');
					ocultarDiv('id_capa_muestra_calific_ciclo_actual');
					adminCalificaciones
				.consultaCalificacionesCicloActual(
						curpGenerado,
						{
							callback : function(resultado) {
								if (resultado == null) {
									mostrarDiv('id_ventana_aviso_error');
									ocultarDiv('id_jsp_buscar_aspirante');
									ga(
											'send',
											'event',
											'Errores',
											'ErrorConsultaDatosByDatos',
											'Error en la conexion a la base de datos al consultar los datos por Datos de vida');
								} else {

									if (resultado.evaluacionesRegulares != null) {
										llenaTablaCicloActual(resultado);
									} else {
										mostrarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
										ga('send', 'event', 'Consultas',
												'ErrorBusquedaAlumnoByDatos',
												'Usuario busco con datos que no se encontraron en la base de datos');
									}
								}
							},
							async : false
						});
				} else {
					ocultarDiv('id_ventana_info_calific_dispo');
					mostrarDiv('id_capa_muestra_calific_ciclo_actual');
					adminCalificaciones
					.consultaCalificacionesCicloActual(
							curpGenerado,
							{
								callback : function(resultado) {
									if (resultado == null) {
										mostrarDiv('id_ventana_aviso_error');
										ocultarDiv('id_jsp_buscar_aspirante');
										ga(
												'send',
												'event',
												'Errores',
												'ErrorConsultaDatosByDatos',
												'Error en la conexion a la base de datos al consultar los datos por Datos de vida');
									} else {

										if (resultado.evaluacionesRegulares != null) {
											llenaTablaCicloActual(resultado);
										} else {
											mostrarDiv('id_ventana_error_buscar_aspirante_datos_incorrectos');
											ga('send', 'event', 'Consultas',
													'ErrorBusquedaAlumnoByDatos',
													'Usuario busco con datos que no se encontraron en la base de datos');
										}
									}
								},
								async : false
							});
				}
				
			},errorHandler:function(errorString, exception)
					{ alert("Oops: " + errorString); }
			,async : false
			});	
	}
}
function llenaTablaCicloActual(infoAlumno) {
	ocultarDiv("id_jsp_buscar_aspirante");
	ocultarDiv("id_jsp_muestraDatosHistorico");
	mostrarDiv("id_jsp_muestraDatosGenerales");
	mostrarDiv("id_jsp_muestraDatos");
	var codigoTabla = "";
	var longArray = "";
	cajaTexto_resultado_nombres.value = infoAlumno.nombres;
	cajaTexto_resultado_apellidoPaterno.value = infoAlumno.primerApellido;
	cajaTexto_resultado_apellidoMaterno.value = infoAlumno.segundoApellido;
	cajaTexto_resultado_curp.value = infoAlumno.curp;
	longArray = infoAlumno.evaluacionesRegulares.length;
	var cicloescolar = "";
	var bloque = "PERIODO ";
	for (var i = 0; i < infoAlumno.evaluacionesRegulares.length; i++) {
			cicloescolar = infoAlumno.evaluacionesRegulares[i].clicloEscolar;
		if (cicloescolar < "2018-2019") {
			bloque = "BIMESTRE ";
		}
		bloque = "PERIODO ";
		var conta = 0;
		if (infoAlumno.evaluacionesRegulares[i].calificacion1.valueOf() != 0) conta = conta + 1;
		if (infoAlumno.evaluacionesRegulares[i].calificacion2.valueOf() != 0) conta = conta + 1;
		if (infoAlumno.evaluacionesRegulares[i].calificacion3.valueOf() != 0) conta = conta + 1;
		if (infoAlumno.evaluacionesRegulares[i].calificacion4.valueOf() != 0) conta = conta + 1;
		if (infoAlumno.evaluacionesRegulares[i].calificacion5.valueOf() != 0) conta = conta + 1;
		infoAlumno.evaluacionesRegulares[i].numEva = conta;
	}
	for (var i = 0; i < infoAlumno.evaluacionesRegulares.length; i++) {
		cicloescolar = infoAlumno.evaluacionesRegulares[i].clicloEscolar;
		if (cicloescolar < "2018-2019") {
			bloque = "BIMESTRE ";
		}
		bloque = "PERIODO ";
		var conta = 0;
		if (infoAlumno.evaluacionesRegulares[i].calificacion1.valueOf() != 0) conta = conta + 1;
		if (infoAlumno.evaluacionesRegulares[i].calificacion2.valueOf() != 0) conta = conta + 1;
		if (infoAlumno.evaluacionesRegulares[i].calificacion3.valueOf() != 0) conta = conta + 1;
		if (infoAlumno.evaluacionesRegulares[i].calificacion4.valueOf() != 0) conta = conta + 1;
		if (infoAlumno.evaluacionesRegulares[i].calificacion5.valueOf() != 0) conta = conta + 1;
		infoAlumno.evaluacionesRegulares[i].numEva = conta;
		if (infoAlumno.evaluacionesRegulares[i].calificacion1.valueOf() == -3.0) {
			infoAlumno.evaluacionesRegulares[i].calificacion1 = "X";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion1 == "0") {
			infoAlumno.evaluacionesRegulares[i].calificacion1 = " ";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion2.valueOf() == -3.0) {
			infoAlumno.evaluacionesRegulares[i].calificacion2 = "X";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion2 == "0") {
			infoAlumno.evaluacionesRegulares[i].calificacion2 = " ";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion3.valueOf() == -3.0) {
			infoAlumno.evaluacionesRegulares[i].calificacion3 = "X";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion3 == "0") {
			infoAlumno.evaluacionesRegulares[i].calificacion3 = " ";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion4.valueOf() == -3.0) {
			infoAlumno.evaluacionesRegulares[i].calificacion4 = "X";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion4 == "0") {
			infoAlumno.evaluacionesRegulares[i].calificacion4 = " ";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion5.valueOf() == -3.0) {
			infoAlumno.evaluacionesRegulares[i].calificacion5 = "X";
		}
		if (infoAlumno.evaluacionesRegulares[i].calificacion5 == "0") {
			infoAlumno.evaluacionesRegulares[i].calificacion5 = " ";
		}
		if (infoAlumno.evaluacionesRegulares[i].promedioCal.valueOf() == -3.0) {
			infoAlumno.evaluacionesRegulares[i].promedioCal = "X";
		}
		if (infoAlumno.evaluacionesRegulares[i].promedioCal == "0") {
			infoAlumno.evaluacionesRegulares[i].promedioCal = " ";
		}
		if (infoAlumno.evaluacionesRegulares[i].numEva!=5 && cicloescolar < "2018-2019") {
			infoAlumno.evaluacionesRegulares[i].promedioCal = "---";
		}
		if (infoAlumno.evaluacionesRegulares[i].numEva!=3 && cicloescolar >= "2018-2019") {
			infoAlumno.evaluacionesRegulares[i].promedioCal = "---";
		}
		
		if ((parseInt(i) + 1) != longArray) {
			codigoTabla = codigoTabla
					+ "<tr>"
					+ "<th scope='row' style='width: 350px'>"
					+ infoAlumno.evaluacionesRegulares[i].materia.nombre
					+ "</th>"
					+ "<td style='text-align: center'>"
					+ infoAlumno.evaluacionesRegulares[i].calificacion1
					+ "</td>"
					+ "<td style='text-align: center'>"
					+ infoAlumno.evaluacionesRegulares[i].calificacion2
					+ "</td>"
					+ "<td style='text-align: center'>"
					+ infoAlumno.evaluacionesRegulares[i].calificacion3
					+ "</td>"
					+ (cicloescolar >= '2018-2019' ? "" : "<td style='text-align: center'>"
							+ infoAlumno.evaluacionesRegulares[i].calificacion4
							+ "</td>" + "<td style='text-align: center'>"
							+ infoAlumno.evaluacionesRegulares[i].calificacion5
							+ "</td>") + "<td style='text-align: center'>"
					+ infoAlumno.evaluacionesRegulares[i].promedioCal + "</td>"
					+ "</tr>";
			if ((infoAlumno.evaluacionesRegulares[i].grado != infoAlumno.evaluacionesRegulares[parseInt(i) + 1].grado)
					//|| (infoAlumno.evaluacionesRegulares[i].cct_escuela != infoAlumno.evaluacionesRegulares[parseInt(i) + 1].cct_escuela)
					) {
				var nivelActual = (infoAlumno.evaluacionesRegulares[parseInt(i) + 1].nivel == 4 ? "SECUNDARIA"
						: infoAlumno.evaluacionesRegulares[parseInt(i) + 1].nivel == 3 ? "PRIMARIA"
								: "");
				codigoTabla = codigoTabla
						+ "<tr>"
						+ "<th>&nbsp;</th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorCelda
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>NIVEL: <em>"
						+ nivelActual
						+ ",</em> GRADO: <em>"
						+ infoAlumno.evaluacionesRegulares[parseInt(i) + 1].grado
						+ "</em></font></th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorCelda
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>CICLO ESCOLAR: <em>"
						+ infoAlumno.evaluacionesRegulares[parseInt(i) + 1].clicloEscolar
						+ "</em></font></th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorFila
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>MATERIA</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "1</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "2</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "3</font></th>"
						+ (cicloescolar >= '2018-2019' ? ""
								: "<th style='text-align: center'><font color='" + colorLetra + "'>"
										+ bloque + "4</font></th>"
										+ "<th style='text-align: center'><font color='" + colorLetra
										+ "'>" + bloque + "5</font></th>"
										+ "<th style='text-align: center'><font color='" + colorLetra
										+ "'>PROMEDIO</font></th>") + "</tr>";
			}
		} else {
					codigoTabla = codigoTabla
					+ "<tr>"
					+ "<th scope='row' style='width: 350px'>"
					+ infoAlumno.evaluacionesRegulares[i].materia.nombre
					+ "</th>"
					+ "<td style='text-align: center'>"
					+ infoAlumno.evaluacionesRegulares[i].calificacion1
					+ "</td>"
					+ "<td style='text-align: center'>"
					+ infoAlumno.evaluacionesRegulares[i].calificacion2
					+ "</td>"
					+ "<td style='text-align: center'>"
					+ infoAlumno.evaluacionesRegulares[i].calificacion3
					+ "</td>"
					+ (cicloescolar >= '2018-2019' ? "" : "<td style='text-align: center'>"
							+ infoAlumno.evaluacionesRegulares[i].calificacion4
							+ "</td>" + "<td style='text-align: center'>"
							+ infoAlumno.evaluacionesRegulares[i].calificacion5
							+ "</td>") + "<td style='text-align: center'>"
					+ infoAlumno.evaluacionesRegulares[i].promedioCal + "</td>"
					+ "</tr>";
			var nivel = (infoAlumno.evaluacionesRegulares[0].nivel == 4 ? "SECUNDARIA"
					: infoAlumno.evaluacionesRegulares[0].nivel == 3 ? "PRIMARIA"
							: "");
			var grado = infoAlumno.evaluacionesRegulares[0].grado;
			var cicloEscolar = infoAlumno.evaluacionesRegulares[0].clicloEscolar;
			document.getElementById("id_titulo_ciclo_mas_reciente").innerHTML = 'Calificaciones ciclo escolar ('
					+ cicloEscolar + ')';
			document.getElementById("id_tabla_muestraDatos").innerHTML = "<table class='table'>"
					+ "<thead>" + "<tr bgcolor='"
					+ colorCelda
					+ "'>"
					+ "<th><font color='"
					+ colorLetra
					+ "'>NIVEL: <em>"
					+ nivel
					+ ",</em> GRADO: <em>"
					+ grado
					+ "</em></font></th>"
					+ "</tr>"
					+ "<tr bgcolor='"
					+ colorCelda
					+ "'>"
					+ "<th><font color='"
					+ colorLetra
					+ "'>CICLO ESCOLAR: <em>"
					+ cicloEscolar
					+ "</em></font></th>"
					+ "</tr>"
					+ "<tr bgcolor='"
					+ colorFila
					+ "'>"
					+ "<th><font color='"
					+ colorLetra
					+ "'>MATERIA</font></th>"
					+ "<th style='text-align: center'><font color='"
					+ colorLetra
					+ "'>"
					+ bloque
					+ "1</font></th>"
					+ "<th style='text-align: center'><font color='"
					+ colorLetra
					+ "'>"
					+ bloque
					+ "2</font></th>"
					+ "<th style='text-align: center'><font color='"
					+ colorLetra
					+ "'>"
					+ bloque
					+ "3</font></th>"
					+ ((cicloEscolar >= "2018-2019") ? "" : "<th style='text-align: center'><font color='"
							+ colorLetra + "'>" + bloque + "4</font></th>"
							+ "<th style='text-align: center'><font color='" + colorLetra + "'>" + bloque
							+ "5</font></th>")
					+ "<th style='text-align: center'><font color='"
					+ colorLetra
					+ "'>PROMEDIO</font></th>"
					+ "</tr>"
					+ "</thead>"
					+ "<tbody>"
					+ codigoTabla
					+ "</tbody>"
					+ "</table>";
		}
	}
}
function llenaTabla() {
	var codigoTabla = "";
	var longArray = "";
	var curpGenerado = "";
	var infoAlumno = null;
	curpGenerado = cajaTexto_resultado_curp.value;
	adminCalificaciones
			.consultaCalificaciones(
					curpGenerado,
					{
						callback : function(resultado) {
							if (resultado == null) {
								mostrarDiv('id_ventana_aviso_error');
								ocultarDiv('id_jsp_buscar_aspirante');
								ga(
										'send',
										'event',
										'Errores',
										'ErrorConsultaDatosHistoricos',
										'Error en la conexion a la base de datos',
										'Error en base de datos al consultar los datos historicos');
							} else {
								if (resultado.evaluacionesRegulares != null) {
									infoAlumno = resultado;
								} else {
									mostrarDiv('id_ventana_error_muestraDatosHistorico');
									ga('send', 'event', 'Consultas',
											'ErrorBusquedaAlumnoByDatos',
											'Usuario busco historico con datos que no se encontraron en la base de datos');
								}
							}
						},
						async : false
					});
	if (infoAlumno == null) {
		return;
	} else {
		document.getElementById("id_tabla_muestraDatosHistorico").innerHTML = matrizAlumno(infoAlumno);
	}
}

function doSalir() {
	var servidor = window.location.host;	
	var pathname = window.location.pathname;
	var contexto = '';
	for(var i = 0; i < pathname.length; i++)
		{
		 contexto = contexto + pathname.charAt(i);
		 if(i>0 && pathname.charAt(i) == '/')
			 break;
		}
	
	var url=location.protocol + "//" + servidor + contexto ;
	location.href=url;
//	mostrarDiv("id_jsp_buscar_aspirante");
//	ocultarDiv("id_jsp_muestraDatosHistorico");
//	ocultarDiv("id_jsp_muestraDatosGenerales");
//	ocultarDiv("id_jsp_muestraDatos");
//	cajaTexto_Curp.value = "";
//	cajaTexto_nombres.value = "";
//	cajaTexto_primerApellido.value = "";
//	cajaTexto_segundoApellido.value = "";
//	cajaTexto_sexo.selectedIndex = 0;
//	cajaTexto_fechaNacimiento.value = "";
//	cajaTexto_entidadNacimiento.selectedIndex = 0;
};

function muestraDatosHistorico() {
	ocultarDiv("id_jsp_muestraDatos");
	mostrarDiv("id_jsp_muestraDatosHistorico");
	mostrarDiv("id_jsp_muestraDatosGenerales");
	llenaTabla();

}

function muestraDatoscicloActual() {
	ocultarDiv("id_jsp_muestraDatosHistorico");
	mostrarDiv("id_jsp_muestraDatos");
	mostrarDiv("id_jsp_muestraDatosGenerales");

}

function mantenimiento(diaInicioMantenimiento, horaInicioMantenimiento,
		diaFinMantenimiento, horaFinMantenimiento) {

	var fechaActual = "";
	var nombreDias = [ "Lunes", "Martes", "Miercoles", "Jueves", "Viernes",
			"Sabado", "Domingo" ];
	var diaActual = "";
	var horaActual = "";
	adminCalificaciones
			.fechaActualServidor({
				callback : function(resultado) {
					if (resultado == null) {
						mostrarDiv('id_ventana_aviso_error');
						ocultarDiv('id_jsp_buscar_aspirante');
						ga('send', 'event', 'Errores', 'ErrorCargaPagina',
								'Error al revisar la carga de pagina(consulta fecha del servidor)');
					} else {
						fechaActual = resultado;
					}
				},
				async : false
			});
	//diaActual = fechaActual.substring(0, fechaActual.indexOf('-'));
	var fActual = fechaActual.toString().substr(0, 10);
	diaActual = fActual.substring(6) + "/" + fActual.substring(3, 5) + "/"
			+ fActual.substring(0, 2);
	horaActual = fechaActual.substring((fechaActual.indexOf(' ') + 1));
	console.log("Fecha Actual: " + diaActual);
	console.log("Manto: " + diaInicioMantenimiento + " Hora: "
			+ horaInicioMantenimiento + " FIN: " + diaFinMantenimiento + " H["
			+ horaFinMantenimiento + "] \n [: "
			+ (diaActual >= diaInicioMantenimiento) + "] "
			+ (horaActual >= horaInicioMantenimiento) + " [[ "
			+ (diaActual <= diaFinMantenimiento) + "]] \n Fecha Actual: "
			+ diaActual + " H:" + horaActual);
	if (diaInicioMantenimiento != "-1") {
		if (diaActual >= diaInicioMantenimiento) {
			var manto = false;
			if (diaInicioMantenimiento == diaActual) {
				if (horaActual >= horaInicioMantenimiento) {
					manto = true;
				}
			} else if (diaActual >= diaInicioMantenimiento
					&& diaActual <= diaFinMantenimiento) {
				if (horaActual <= horaFinMantenimiento) {
					manto = true;
				}
			}
			if (manto) {
				ocultarDiv('id_jsp_buscar_aspirante');
				mostrarDiv('id_ventana_aviso_mantenimiento');
				ga('send', 'event', 'Mantenimiento',
						'ConsultaDuranteMantenimiento',
						'Usuario consulta la aplicacion durante el periodo de mantenimiento');
			}
		} else if (diaActual <= diaFinMantenimiento) {
			var manto = false;
			if (diaInicioMantenimiento == diaActual) {
				if (horaActual >= horaInicioMantenimiento) {
					manto = true;
				}
			} else if (diaActual >= diaInicioMantenimiento
					&& diaActual <= diaFinMantenimiento) {
				if (horaActual <= horaFinMantenimiento) {
					manto = true;
				}
			}
			if (manto) {
				ocultarDiv('id_jsp_buscar_aspirante');
				mostrarDiv('id_ventana_aviso_mantenimiento');
				ga('send', 'event', 'Mantenimiento',
						'ConsultaDuranteMantenimiento',
						'Usuario consulta la aplicacion durante el periodo de mantenimiento');
			}

		}
	}
}

function matrizAlumno(infoAlumno) {
	var codigoTabla = "";

	cajaTexto_resultado_nombres.value = infoAlumno.nombres;
	cajaTexto_resultado_apellidoPaterno.value = infoAlumno.primerApellido;
	cajaTexto_resultado_apellidoMaterno.value = infoAlumno.segundoApellido;
	cajaTexto_resultado_curp.value = infoAlumno.curp;
	longArray = infoAlumno.evaluacionesRegulares.length;
	var cicloescolar = "";
	var grado=0;
	var escuela ="";
	var nivel = "";
	var bloque = "PERIODO ";
	for (var i = 0; i < infoAlumno.evaluacionesRegulares.length; i++) {
		var nivelActual = (infoAlumno.evaluacionesRegulares[i].nivel == 4 ? "SECUNDARIA"
						: infoAlumno.evaluacionesRegulares[i].nivel == 3 ? "PRIMARIA"
														: "");
		if (i==0){
			cicloescolar = infoAlumno.evaluacionesRegulares[i].clicloEscolar;
			grado = infoAlumno.evaluacionesRegulares[i].grado;
			escuela = infoAlumno.evaluacionesRegulares[i].cct_escuela;
			nivelActual = (infoAlumno.evaluacionesRegulares[i].nivel == 4 ? "SECUNDARIA"
						: infoAlumno.evaluacionesRegulares[i].nivel == 3 ? "PRIMARIA"
														: "");
			nivel= infoAlumno.evaluacionesRegulares[i].nivel;
			codigoTabla += "<div class='col-sm-12'><table class='table'><thead>"
						+ "<tr>"
						+ "<th>&nbsp;</th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorCelda
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>NIVEL: <em>"
						+ nivelActual
						+ ",</em> GRADO: <em>"
						+ infoAlumno.evaluacionesRegulares[i].grado
						+ "</em></font></th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorCelda
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>\nCICLO ESCOLAR: <em>"
						+ infoAlumno.evaluacionesRegulares[i].clicloEscolar
						+ "</em></font></th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorFila
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>\nMATERIA</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "1</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "2</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "3</font></th>\n"
						+ (infoAlumno.evaluacionesRegulares[i].clicloEscolar >= '2018-2019' ? ""
								: "<th style='text-align: center'><font color='" + colorLetra + "'>"
										+ bloque + "4</font></th>"
										+ "<th style='text-align: center'><font color='" + colorLetra
										+ "'>" + bloque + "5</font></th>"
										)
						+ "<th style='text-align: center'><font color='" + colorLetra
										+ "'>PROMEDIO</font></th>" 
						+ "</tr>";
		} 
		if(i!=0 && (cicloescolar!=infoAlumno.evaluacionesRegulares[i].clicloEscolar 
			|| grado != infoAlumno.evaluacionesRegulares[i].grado
			//|| escuela != infoAlumno.evaluacionesRegulares[i].cct_escuela
			|| nivel != infoAlumno.evaluacionesRegulares[i].nivel)){
				codigoTabla += "\n</thead></table></div><div class='col-sm-12'><table class='table'><thead>"
						+ "<tr>"
						+ "<th>&nbsp;</th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorCelda
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>NIVEL: <em>"
						+ nivelActual
						+ ",</em> GRADO: <em>"
						+ infoAlumno.evaluacionesRegulares[i].grado
						+ "</em></font></th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorCelda
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>\nCICLO ESCOLAR: <em>"
						+ infoAlumno.evaluacionesRegulares[i].clicloEscolar
						+ "</em></font></th>"
						+ "</tr>"
						+ "<tr bgcolor='"
						+ colorFila
						+ "'>"
						+ "<th><font color='"
						+ colorLetra
						+ "'>\nMATERIA</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "1</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "2</font></th>"
						+ "<th style='text-align: center'><font color='"
						+ colorLetra
						+ "'>"
						+ bloque
						+ "3</font></th>\n"
						+ (infoAlumno.evaluacionesRegulares[i].clicloEscolar >= '2018-2019' ? ""
								: "<th style='text-align: center'><font color='" + colorLetra + "'>"
										+ bloque + "4</font></th>"
										+ "<th style='text-align: center'><font color='" + colorLetra
										+ "'>" + bloque + "5</font></th>"
										)
						+ "<th style='text-align: center'><font color='" + colorLetra
										+ "'>PROMEDIO</font></th>" 
						+ "</tr>";
		};
		cicloescolar = infoAlumno.evaluacionesRegulares[i].clicloEscolar;
		grado = infoAlumno.evaluacionesRegulares[i].grado;
		escuela = infoAlumno.evaluacionesRegulares[i].cct_escuela;
		nivelActual = (infoAlumno.evaluacionesRegulares[i].nivel == 4 ? "SECUNDARIA"
						: infoAlumno.evaluacionesRegulares[i].nivel == 3 ? "PRIMARIA"
														: "");
		nivel= infoAlumno.evaluacionesRegulares[i].nivel;
		if (cicloescolar < "2018-2019") {
			bloque = "BIMESTRE ";
		}
		bloque = "PERIODO ";
		var conta = 0;
			if (infoAlumno.evaluacionesRegulares[i].calificacion1.valueOf()>=5.0
			|| infoAlumno.evaluacionesRegulares[i].calificacion1.valueOf()<=-1) conta=conta+1;
			if (infoAlumno.evaluacionesRegulares[i].calificacion2.valueOf()>=5.0
			|| infoAlumno.evaluacionesRegulares[i].calificacion2.valueOf()<=-1) conta=conta+1;
			if (infoAlumno.evaluacionesRegulares[i].calificacion3.valueOf()>=5.0
			|| infoAlumno.evaluacionesRegulares[i].calificacion3.valueOf()<=-1) conta=conta+1;
			if (infoAlumno.evaluacionesRegulares[i].calificacion4.valueOf()>=5.0
			|| infoAlumno.evaluacionesRegulares[i].calificacion4.valueOf()<=-1) conta=conta+1;
			if (infoAlumno.evaluacionesRegulares[i].calificacion5.valueOf()>=5.0
			|| infoAlumno.evaluacionesRegulares[i].calificacion5.valueOf()<=-1) conta=conta+1;
			infoAlumno.evaluacionesRegulares[i].numEva= conta;
			if (infoAlumno.evaluacionesRegulares[i].calificacion1.valueOf() == -3.0) {
				infoAlumno.evaluacionesRegulares[i].calificacion1 = "X";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion1 == "0") {
				infoAlumno.evaluacionesRegulares[i].calificacion1 = " ";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion2.valueOf() == -3.0) {
				infoAlumno.evaluacionesRegulares[i].calificacion2 = "X";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion2 == "0") {
				infoAlumno.evaluacionesRegulares[i].calificacion2 = " ";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion3.valueOf() == -3.0) {
				infoAlumno.evaluacionesRegulares[i].calificacion3 = "X";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion3 == "0") {
				infoAlumno.evaluacionesRegulares[i].calificacion3 = " ";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion4.valueOf() == -3.0) {
				infoAlumno.evaluacionesRegulares[i].calificacion4 = "X";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion4 == "0") {
				infoAlumno.evaluacionesRegulares[i].calificacion4 = " ";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion5.valueOf() == -3.0) {
				infoAlumno.evaluacionesRegulares[i].calificacion5 = "X";
			}
			if (infoAlumno.evaluacionesRegulares[i].calificacion5 == "0") {
				infoAlumno.evaluacionesRegulares[i].calificacion5 = " ";
			}
			if (infoAlumno.evaluacionesRegulares[i].promedioCal.valueOf() == -3.0) {
				infoAlumno.evaluacionesRegulares[i].promedioCal = "X";
			}
			if (infoAlumno.evaluacionesRegulares[i].promedioCal == "0") {
				infoAlumno.evaluacionesRegulares[i].promedioCal = " ";
			}
			if (infoAlumno.evaluacionesRegulares[i].promedioCal!="X"){
				if (infoAlumno.evaluacionesRegulares[i].numEva != 5 && cicloescolar < "2018-2019") {
					infoAlumno.evaluacionesRegulares[i].promedioCal = "---";
				}
				if (infoAlumno.evaluacionesRegulares[i].numEva != 3 && cicloescolar >= "2018-2019") {
					infoAlumno.evaluacionesRegulares[i].promedioCal = "---";
				}
			}	
			if((infoAlumno.evaluacionesRegulares[i].numEva==3  && cicloescolar >= "2018-2019")
				|| (infoAlumno.evaluacionesRegulares[i].numEva==5  && cicloescolar < "2018-2019")
			){
				codigoTabla += "\n<tr>"
						+ "<th scope='row' style='width: 350px'>"
						+ infoAlumno.evaluacionesRegulares[i].materia.nombre
						+ "</th>"
						+ "<td style='text-align: center'>"
						+ infoAlumno.evaluacionesRegulares[i].calificacion1
						+ "</td>"
						+ "<td style='text-align: center'>"
						+ infoAlumno.evaluacionesRegulares[i].calificacion2
						+ "</td>"
						+ "<td style='text-align: center'>"
						+ infoAlumno.evaluacionesRegulares[i].calificacion3
						+ "</td>"
						+ ((infoAlumno.evaluacionesRegulares[i].clicloEscolar >= "2018-2019") ? ""
								: "<td style='text-align: center'>"
										+ infoAlumno.evaluacionesRegulares[i].calificacion4
										+ "</td>"
										+ "<td style='text-align: center'>"
										+ infoAlumno.evaluacionesRegulares[i].calificacion5
										+ "</td>") + "<td style='text-align: center'>"
						+ infoAlumno.evaluacionesRegulares[i].promedioCal
						+ "</td>" + "</tr>";
			}
	};
	return codigoTabla += "\n</thead></table></div>";
};

