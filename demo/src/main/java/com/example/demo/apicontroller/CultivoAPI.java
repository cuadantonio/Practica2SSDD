package com.example.demo.apicontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controller.AppController;
import com.example.demo.model.Cultivo;
import com.example.demo.repository.CultivoRepository;

@RestController
public class CultivoAPI {

	@Autowired
	private CultivoRepository repCultivos;
	
	@RequestMapping(value = "/getCultivos", method = RequestMethod.GET)
	public List<Cultivo> getCultivos() {
		return repCultivos.findAll();
	}
	
	@RequestMapping(value = "/getCultivo", method = RequestMethod.GET)
	public Cultivo getCultivo() {
		return repCultivos.findAll().get(0);
	}
}
