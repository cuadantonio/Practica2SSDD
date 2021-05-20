package com.example.demo.apicontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Plaga;
import com.example.demo.repository.EspecieRepository;

@RestController
public class PlagaAPI {

	@Autowired
	private EspecieRepository repEspecies;
	
	@RequestMapping(value = "/getPlagas/{nombreEspecie}", method = RequestMethod.GET)
	public List<Plaga> getPlagas(@PathVariable String nombreEspecie) {
		return repEspecies.findBynombreVulgar(nombreEspecie).getPlagas();
	}
}
