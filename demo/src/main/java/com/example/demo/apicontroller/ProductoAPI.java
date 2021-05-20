package com.example.demo.apicontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Producto;
import com.example.demo.model.Sustancia;
import com.example.demo.repository.SustanciaRepository;

@RestController
public class ProductoAPI {

	@Autowired
	private SustanciaRepository repSustancias;
	
	@RequestMapping(value = "/getProductos/{nombreSustancia}", method = RequestMethod.GET)
	public List<Producto> getSustancias(@PathVariable String nombreSustancia) {
		return repSustancias.findBynombre(nombreSustancia).getProductos();
	}
}
