package com.example.demo.apicontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Especie;
import com.example.demo.repository.CultivoRepository;
@RestController
public class EspecieAPI {
	
	@Autowired
	private CultivoRepository repCultivos;
	
	@RequestMapping(value = "/getEspecies/{nombreCultivo}", method = RequestMethod.GET)
	public List<Especie> getEspecies(@PathVariable String nombreCultivo) {
		return repCultivos.findBynombre(nombreCultivo).getEspecies();
	}
}
