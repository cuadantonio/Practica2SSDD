$(function() {
	
	var urlPelicula='http://localhost:8080/getCultivos/'/*+ encodeURI('Las bicicletas son para el verano')*/;
	$.getJSON(urlPelicula,function(respuesta) {
		
		lista = $('#listaMain');
		lista.append($('<ul/>').html("Cultivos:").attr("id","listaCultivos"));
		for(cultivo in respuesta){
			var nombre = respuesta[cultivo].nombre
			$('#listaCultivos').append($('<li/>').html("Nombre cultivo:"));
			$('#listaCultivos').append($('<li>').html(respuesta[cultivo].nombre).attr("id",respuesta[cultivo].nombre));
			$('#listaCultivos').append($('<button onClick="funcionEspecie(\''+respuesta[cultivo].nombre+'\')">').html("Especies").attr("id",respuesta[cultivo].nombre+'boton'));
			/*lista.append($('<h2/>').html('Especies:'));
			for(especie in respuesta[cultivo].especies) {
			lista.append($('<p>').html(respuesta[cultivo].especies[especie].nombreVulgar));
		}*/
		}
		
		});
		
	});
	function funcionEspecie(nombreCultivo){
		
		var urlEspecie='http://localhost:8080/getEspecies/'+nombreCultivo+'/';
		alert(urlEspecie);
		$.getJSON(urlEspecie,function(respuesta) {
		$('#'+nombreCultivo+'boton').hide();
		lista2 = $('#'+nombreCultivo);
		lista2.append($('<ul/>').html("Especies:").attr("id","listaEspecies"+nombreCultivo));
		for(especie in respuesta){
			$('#listaEspecies'+nombreCultivo).append($('<li/>').html("Nombre cientifico especie:"));
			$('#listaEspecies'+nombreCultivo).append($('<li>').html(respuesta[especie].nombreCientifico).attr("id",respuesta[especie].nombreCientifico));
			$('#listaEspecies'+nombreCultivo).append($('<li/>').html("Nombre vulgar especie:"));
			$('#listaEspecies'+nombreCultivo).append($('<li>').html(respuesta[especie].nombreVulgar).attr("id",respuesta[especie].nombreVulgar));
			$('#listaEspecies'+nombreCultivo).append($('<button onClick="funcionPlaga(\''+respuesta[especie].nombreVulgar+'\')">').html("Plagas").attr("id",respuesta[especie].nombreVulgar+'boton'));
		}
		
		});
	}
	
	function funcionPlaga(nombreEspecie){
		
		var urlPlaga='http://localhost:8080/getPlagas/'+nombreEspecie+'/';
		alert(urlPlaga);
		$.getJSON(urlPlaga,function(respuesta) {
		$('#'+nombreEspecie+'boton').hide();
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
		}
		
		});
	}
	
	function funcionSustancia(nombrePlaga){
		
		var urlSustancia='http://localhost:8080/getSustancias/'+nombrePlaga+'/';
		alert(urlSustancia);
		$.getJSON(urlSustancia,function(respuesta) {
		$('#'+nombrePlaga+'boton').hide();
		lista4 = $('#'+nombrePlaga);
		lista4.append($('<ul/>').html("Sustancias:").attr("id","listaSustancias"+nombrePlaga));
		for(sustancia in respuesta){
			$('#listaSustancias'+nombrePlaga).append($('<li/>').html("Nombre sustancia:"));
			$('#listaSustancias'+nombrePlaga).append($('<li>').html(respuesta[sustancia].nombre).attr("id",respuesta[sustancia].nombre));
			$('#listaSustancias'+nombrePlaga).append($('<button onClick="funcionProducto(\''+respuesta[sustancia].nombre+'\')">').html("Productos").attr("id",respuesta[sustancia].nombre+'boton'));
		}
		
		});
	}
	
	function funcionProducto(nombreSustancia){
		
		var urlProducto='http://localhost:8080/getProductos/'+nombreSustancia+'/';
		alert(urlProducto);
		$.getJSON(urlProducto,function(respuesta) {
		$('#'+nombreSustancia+'boton').hide();
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