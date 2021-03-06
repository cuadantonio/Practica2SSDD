/*
	Esta primera funcion tiene el objetivo de cargar los primeros elementos del arbol los cuales son los cultivos
	e insertarlos en el codigo html
*/

$(function() {
	
	var urlPelicula='http://localhost:8080/getCultivos/'/*+ encodeURI('Las bicicletas son para el verano')*/;
	$.getJSON(urlPelicula,function(respuesta) {
		
		lista = $('#listaMain');
		lista.append($('<ul/>').html("Cultivos:").attr("id","listaCultivos").addClass('listaCultivos'));
		for(cultivo in respuesta){
			$('#listaCultivos').append($('<li/>').html("Nombre cultivo:").addClass('cultivo'));
			$('#listaCultivos').append($('<li>').html(respuesta[cultivo].nombre).attr("id",respuesta[cultivo].nombre).addClass('cultivo'));
			$('#listaCultivos').append($('<button onClick="funcionEspecie(\''+respuesta[cultivo].nombre+'\')">').html("Especies").attr("id",respuesta[cultivo].nombre+'boton'));
			$('#listaCultivos').append($('<button onClick="funcionEspecieBotones(\''+respuesta[cultivo].nombre+'\')">').html("Ocultar").attr("id",respuesta[cultivo].nombre+'boton2').hide());
		}
		
		});
		
	});
/*
	Esta funcion tiene el objetivo de cargar las especies de un cultivo cuando se pulse el boton apropiado
*/
	function funcionEspecie(nombreCultivo){
		
		var urlEspecie='http://localhost:8080/getEspecies/'+nombreCultivo+'/';
		$.getJSON(urlEspecie,function(respuesta) {
		$('#'+nombreCultivo+'boton').hide();
		$('#'+nombreCultivo+'boton2').show();
		lista2 = $('#'+nombreCultivo);
		lista2.append($('<ul/>').html("Especies:").attr("id","listaEspecies"+nombreCultivo).addClass('listaEspecies'));
		for(especie in respuesta){
			$('#listaEspecies'+nombreCultivo).append($('<li/>').html("Nombre cientifico especie:").attr("id",respuesta[especie].nombreCientifico+'tag').hide().addClass('especie'));
			$('#listaEspecies'+nombreCultivo).append($('<li>').html(respuesta[especie].nombreCientifico).attr("id",respuesta[especie].nombreCientifico).hide().addClass('especie'));
			$('#listaEspecies'+nombreCultivo).append($('<li/>').html("Nombre vulgar especie:").hover(function(){
				$('#'+respuesta[especie].nombreCientifico).show();
				$('#'+respuesta[especie].nombreCientifico+'tag').show();
			}).addClass('especie'));
			$('#listaEspecies'+nombreCultivo).append($('<li>').html(respuesta[especie].nombreVulgar).attr("id",respuesta[especie].nombreVulgar).addClass('especie'));
			$('#listaEspecies'+nombreCultivo).append($('<button onClick="funcionPlaga(\''+respuesta[especie].nombreVulgar+'\')">').html("Plagas").attr("id",respuesta[especie].nombreVulgar+'boton'));
			$('#listaEspecies'+nombreCultivo).append($('<button onClick="funcionPlagaBotones(\''+respuesta[especie].nombreVulgar+'\')">').html("Ocultar").attr("id",respuesta[especie].nombreVulgar+'boton2').hide());
		}
		
		});
	}

/* 
	Esta funcion tiene el objetivo de mostrar un boton, ocultar otro y eliminar las especies correspondientes
	cuando se pulsa el boton apropiado
*/
	function funcionEspecieBotones(nombreCultivo){
		$('#'+nombreCultivo+'boton').show();
		$('#'+nombreCultivo+'boton2').hide();
		$('#listaEspecies'+nombreCultivo).remove();
	}
/*
	Esta funcion tiene el objetivo de cargar las plagas de una especie cuando se pulse el boton apropiado
*/
	function funcionPlaga(nombreEspecie){
		
		var urlPlaga='http://localhost:8080/getPlagas/'+nombreEspecie+'/';
		$.getJSON(urlPlaga,function(respuesta) {
		$('#'+nombreEspecie+'boton').hide();
		$('#'+nombreEspecie+'boton2').show();
		lista3 = $('#'+nombreEspecie);
		lista3.append($('<ul/>').html("Plagas:").attr("id","listaPlagas"+nombreEspecie).addClass('listaPlagas'));
		for(plaga in respuesta){
			$('#listaPlagas'+nombreEspecie).append($('<li/>').html("Nombre cientifico plaga:").attr("id",respuesta[plaga].nombreCientifico+'tag').hide().addClass('plaga'));
			$('#listaPlagas'+nombreEspecie).append($('<li>').html(respuesta[plaga].nombreCientifico).attr("id",respuesta[plaga].nombreCientifico).hide().addClass('plaga'));
			$('#listaPlagas'+nombreEspecie).append($('<li/>').html("URL plaga:").addClass('plaga'));
			$('#listaPlagas'+nombreEspecie).append($('<li>').html(respuesta[plaga].url).attr("id",respuesta[plaga].url).addClass('plaga'));
			$('#listaPlagas'+nombreEspecie).append($('<li/>').html("Nombre vulgar plaga:").hover(function(){
				$('#'+respuesta[plaga].nombreCientifico).show();
				$('#'+respuesta[plaga].nombreCientifico+'tag').show();
			}).addClass('plaga'));
			$('#listaPlagas'+nombreEspecie).append($('<li>').html(respuesta[plaga].nombreVulgar).attr("id",respuesta[plaga].nombreVulgar).addClass('plaga'));
			$('#listaPlagas'+nombreEspecie).append($('<button onClick="funcionSustancia(\''+respuesta[plaga].nombreVulgar+'\')">').html("Sustancias").attr("id",respuesta[plaga].nombreVulgar+'boton'));
			$('#listaPlagas'+nombreEspecie).append($('<button onClick="funcionSustanciaBotones(\''+respuesta[plaga].nombreVulgar+'\')">').html("Ocultar").attr("id",respuesta[plaga].nombreVulgar+'boton2').hide());
		}
		
		});
	}
/* 
	Esta funcion tiene el objetivo de mostrar un boton, ocultar otro y eliminar las plagas correspondientes
	cuando se pulsa el boton apropiado
*/	
	function funcionPlagaBotones(nombreEspecie){
		$('#'+nombreEspecie+'boton').show();
		$('#'+nombreEspecie+'boton2').hide();
		$('#listaPlagas'+nombreEspecie).remove();
	}
/*
	Esta funcion tiene el objetivo de cargar las sustancias de una plaga cuando se pulse el boton apropiado
*/
	function funcionSustancia(nombrePlaga){
		
		var urlSustancia='http://localhost:8080/getSustancias/'+nombrePlaga+'/';
		$.getJSON(urlSustancia,function(respuesta) {
		$('#'+nombrePlaga+'boton').hide();
		$('#'+nombrePlaga+'boton2').show();
		lista4 = $('#'+nombrePlaga);
		lista4.append($('<ul/>').html("Sustancias:").attr("id","listaSustancias"+nombrePlaga).addClass('listaSustancias'));
		for(sustancia in respuesta){
			$('#listaSustancias'+nombrePlaga).append($('<li/>').html("Nombre sustancia:").addClass('sustancia'));
			$('#listaSustancias'+nombrePlaga).append($('<li>').html(respuesta[sustancia].nombre).attr("id",respuesta[sustancia].nombre).addClass('sustancia'));
			$('#listaSustancias'+nombrePlaga).append($('<button onClick="funcionProducto(\''+respuesta[sustancia].nombre+'\')">').html("Productos").attr("id",respuesta[sustancia].nombre+'boton'));
			$('#listaSustancias'+nombrePlaga).append($('<button onClick="funcionProductoBotones(\''+respuesta[sustancia].nombre+'\')">').html("Ocultar").attr("id",respuesta[sustancia].nombre+'boton2').hide());
		}
		
		});
	}
/* 
	Esta funcion tiene el objetivo de mostrar un boton, ocultar otro y eliminar las sustancias correspondientes
	cuando se pulsa el boton apropiado
*/	
	function funcionSustanciaBotones(nombrePlaga){
		$('#'+nombrePlaga+'boton').show();
		$('#'+nombrePlaga+'boton2').hide();
		$('#listaSustancias'+nombrePlaga).remove();
	}
/*
	Esta funcion tiene el objetivo de cargar los productos de una sustancia cuando se pulse el boton apropiado
*/
	function funcionProducto(nombreSustancia){
		
		var urlProducto='http://localhost:8080/getProductos/'+nombreSustancia+'/';
		$.getJSON(urlProducto,function(respuesta) {
		$('#'+nombreSustancia+'boton').hide();
		$('#'+nombreSustancia+'boton2').show();
		lista5 = $('#'+nombreSustancia);
		lista5.append($('<ul/>').html("Productos:").attr("id","listaProductos"+nombreSustancia).addClass('listaProductos'));
		for(producto in respuesta){
			$('#listaProductos'+nombreSustancia).append($('<li/>').html("Nombre producto:").addClass('producto'));
			$('#listaProductos'+nombreSustancia).append($('<li>').html(respuesta[producto].nombre).attr("id",respuesta[producto].nombre).addClass('producto'));
			$('#listaProductos'+nombreSustancia).append($('<li/>').html("URL producto:").addClass('producto'));
			$('#listaProductos'+nombreSustancia).append($('<li>').html(respuesta[producto].url).attr("id",respuesta[producto].url).addClass('producto'));
		}
		
		});
	}
/* 
	Esta funcion tiene el objetivo de mostrar un boton, ocultar otro y eliminar los productos correspondientes
	cuando se pulsa el boton apropiado
*/
	function funcionProductoBotones(nombreSustancia){
		$('#'+nombreSustancia+'boton').show();
		$('#'+nombreSustancia+'boton2').hide();
		$('#listaProductos'+nombreSustancia).remove();
	}