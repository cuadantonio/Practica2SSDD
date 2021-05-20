$(function() {
	
	var urlPelicula='http://localhost:8080/getCultivos/'/*+ encodeURI('Las bicicletas son para el verano')*/;
	$.getJSON(urlPelicula,function(respuesta) {
		
		lista = $('#listaMain');
		lista.append($('<ul/>').html("Cultivos:").attr("id","listaCultivos"));
		for(cultivo in respuesta){
			$('#listaCultivos').append($('<li/>').html("Nombre cultivo:"));
			$('#listaCultivos').append($('<li>').html(respuesta[cultivo].nombre).attr("id",respuesta[cultivo].nombre));
			$('#listaCultivos').append($('<button onClick="funcionEspecie(\''+respuesta[cultivo].nombre+'\')">').html("Especies").attr("id",respuesta[cultivo].nombre+'boton'));
			$('#listaCultivos').append($('<button onClick="funcionEspecieBotones(\''+respuesta[cultivo].nombre+'\')">').html("Ocultar").attr("id",respuesta[cultivo].nombre+'boton2').hide());
		}
		
		});
		
	});
	function funcionEspecie(nombreCultivo){
		
		var urlEspecie='http://localhost:8080/getEspecies/'+nombreCultivo+'/';
		$.getJSON(urlEspecie,function(respuesta) {
		$('#'+nombreCultivo+'boton').hide();
		$('#'+nombreCultivo+'boton2').show();
		lista2 = $('#'+nombreCultivo);
		lista2.append($('<ul/>').html("Especies:").attr("id","listaEspecies"+nombreCultivo));
		for(especie in respuesta){
			$('#listaEspecies'+nombreCultivo).append($('<li/>').html("Nombre cientifico especie:"));
			$('#listaEspecies'+nombreCultivo).append($('<li>').html(respuesta[especie].nombreCientifico).attr("id",respuesta[especie].nombreCientifico));
			$('#listaEspecies'+nombreCultivo).append($('<li/>').html("Nombre vulgar especie:"));
			$('#listaEspecies'+nombreCultivo).append($('<li>').html(respuesta[especie].nombreVulgar).attr("id",respuesta[especie].nombreVulgar));
			$('#listaEspecies'+nombreCultivo).append($('<button onClick="funcionPlaga(\''+respuesta[especie].nombreVulgar+'\')">').html("Plagas").attr("id",respuesta[especie].nombreVulgar+'boton'));
			$('#listaEspecies'+nombreCultivo).append($('<button onClick="funcionPlagaBotones(\''+respuesta[especie].nombreVulgar+'\')">').html("Ocultar").attr("id",respuesta[especie].nombreVulgar+'boton2').hide());
		}
		
		});
	}
	
	function funcionEspecieBotones(nombreCultivo){
		$('#'+nombreCultivo+'boton').show();
		$('#'+nombreCultivo+'boton2').hide();
		$('#listaEspecies'+nombreCultivo).remove();
	}
	
	function funcionPlaga(nombreEspecie){
		
		var urlPlaga='http://localhost:8080/getPlagas/'+nombreEspecie+'/';
		$.getJSON(urlPlaga,function(respuesta) {
		$('#'+nombreEspecie+'boton').hide();
		$('#'+nombreEspecie+'boton2').show();
		lista3 = $('#'+nombreEspecie);
		lista3.append($('<ul/>').html("Plagas:").attr("id","listaPlagas"+nombreEspecie));
		for(plaga in respuesta){
			$('#listaPlagas'+nombreEspecie).append($('<li/>').html("Nombre cientifico plaga:"));
			$('#listaPlagas'+nombreEspecie).append($('<li>').html(respuesta[plaga].nombreCientifico).attr("id",respuesta[plaga].nombreCientifico));
			$('#listaPlagas'+nombreEspecie).append($('<li/>').html("URL plaga:"));
			$('#listaPlagas'+nombreEspecie).append($('<li>').html(respuesta[plaga].url).attr("id",respuesta[plaga].url));
			$('#listaPlagas'+nombreEspecie).append($('<li/>').html("Nombre vulgar plaga:"));
			$('#listaPlagas'+nombreEspecie).append($('<li>').html(respuesta[plaga].nombreVulgar).attr("id",respuesta[plaga].nombreVulgar));
			$('#listaPlagas'+nombreEspecie).append($('<button onClick="funcionSustancia(\''+respuesta[plaga].nombreVulgar+'\')">').html("Sustancias").attr("id",respuesta[plaga].nombreVulgar+'boton'));
			$('#listaPlagas'+nombreEspecie).append($('<button onClick="funcionSustanciaBotones(\''+respuesta[plaga].nombreVulgar+'\')">').html("Ocultar").attr("id",respuesta[plaga].nombreVulgar+'boton2').hide());
		}
		
		});
	}
	
	function funcionPlagaBotones(nombreEspecie){
		$('#'+nombreEspecie+'boton').show();
		$('#'+nombreEspecie+'boton2').hide();
		$('#listaPlagas'+nombreEspecie).remove();
	}
	
	function funcionSustancia(nombrePlaga){
		
		var urlSustancia='http://localhost:8080/getSustancias/'+nombrePlaga+'/';
		$.getJSON(urlSustancia,function(respuesta) {
		$('#'+nombrePlaga+'boton').hide();
		$('#'+nombrePlaga+'boton2').show();
		lista4 = $('#'+nombrePlaga);
		lista4.append($('<ul/>').html("Sustancias:").attr("id","listaSustancias"+nombrePlaga));
		for(sustancia in respuesta){
			$('#listaSustancias'+nombrePlaga).append($('<li/>').html("Nombre sustancia:"));
			$('#listaSustancias'+nombrePlaga).append($('<li>').html(respuesta[sustancia].nombre).attr("id",respuesta[sustancia].nombre));
			$('#listaSustancias'+nombrePlaga).append($('<button onClick="funcionProducto(\''+respuesta[sustancia].nombre+'\')">').html("Productos").attr("id",respuesta[sustancia].nombre+'boton'));
			$('#listaSustancias'+nombrePlaga).append($('<button onClick="funcionProductoBotones(\''+respuesta[sustancia].nombre+'\')">').html("Ocultar").attr("id",respuesta[sustancia].nombre+'boton2').hide());
		}
		
		});
	}
	
	function funcionSustanciaBotones(nombrePlaga){
		$('#'+nombrePlaga+'boton').show();
		$('#'+nombrePlaga+'boton2').hide();
		$('#listaSustancias'+nombrePlaga).remove();
	}
	
	function funcionProducto(nombreSustancia){
		
		var urlProducto='http://localhost:8080/getProductos/'+nombreSustancia+'/';
		$.getJSON(urlProducto,function(respuesta) {
		$('#'+nombreSustancia+'boton').hide();
		$('#'+nombreSustancia+'boton2').show();
		lista5 = $('#'+nombreSustancia);
		lista5.append($('<ul/>').html("Productos:").attr("id","listaProductos"+nombreSustancia));
		for(producto in respuesta){
			$('#listaProductos'+nombreSustancia).append($('<li/>').html("Nombre producto:"));
			$('#listaProductos'+nombreSustancia).append($('<li>').html(respuesta[producto].nombre).attr("id",respuesta[producto].nombre));
			$('#listaProductos'+nombreSustancia).append($('<li/>').html("URL producto:"));
			$('#listaProductos'+nombreSustancia).append($('<li>').html(respuesta[producto].url).attr("id",respuesta[producto].url));
		}
		
		});
	}
	
	function funcionProductoBotones(nombreSustancia){
		$('#'+nombreSustancia+'boton').show();
		$('#'+nombreSustancia+'boton2').hide();
		$('#listaProductos'+nombreSustancia).remove();
	}