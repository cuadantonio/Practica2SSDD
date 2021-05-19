$(function() {
	
	var urlPelicula='http://localhost:8080/getCultivos/'/*+ encodeURI('Las bicicletas son para el verano')*/;
	$.getJSON(urlPelicula,function(respuesta) {
		
		lista = $('#listaCultivos');
		for(cultivo in respuesta){
			var nombre = respuesta[cultivo].nombre
			lista.append($('<h1/>').html("Nombre cultivo:"));
			lista.append($('<p>').html(respuesta[cultivo].nombre).attr("id",respuesta[cultivo].nombre));
			lista.append($('<button onClick="funcionEspecie(\''+respuesta[cultivo].nombre+'\')">').html("Especies").attr("id",respuesta[cultivo].nombre+'boton'));
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
		for(especie in respuesta){
			lista2.append($('<h2/>').html("Nombre vulgar especie:"));
			lista2.append($('<p>').html(respuesta[especie].nombreVulgar).attr("id",respuesta[especie].nombreVulgar));
			lista2.append($('<h2/>').html("Nombre cientifico especie:"));
			lista2.append($('<p>').html(respuesta[especie].nombreCientifico).attr("id",respuesta[especie].nombreCientifico));
			lista2.append($('<button onClick="funcionPlaga(\''+respuesta[especie].nombreVulgar+'\')">').html("Plagas").attr("id",respuesta[especie].nombreVulgar+'boton'));
		}
		
		});
	}