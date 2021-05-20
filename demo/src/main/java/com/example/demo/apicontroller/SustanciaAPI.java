package com.example.demo.apicontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Sustancia;
import com.example.demo.repository.PlagaRepository;

@RestController
public class SustanciaAPI {

	@Autowired
	private PlagaRepository repPlagas;
	
	@RequestMapping(value = "/getSustancias/{nombrePlaga}", method = RequestMethod.GET)
	public List<Sustancia> getSustancias(@PathVariable String nombrePlaga) {
		return repPlagas.findBynombreVulgar(nombrePlaga).getSustancias();
	}
}
