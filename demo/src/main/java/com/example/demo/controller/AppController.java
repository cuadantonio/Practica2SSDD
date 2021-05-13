package com.example.demo.controller;

import java.util.LinkedList;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Controller;

import com.example.demo.model.Cultivo;
import com.example.demo.model.Especie;

@Controller
public class AppController {
	private LinkedList<Cultivo> lista = new LinkedList();
	private LinkedList<Especie> lista2 = new LinkedList();
	
	@PostConstruct
	public void init() {
		Cultivo c = new Cultivo("a",lista2);
		lista.add(c);
	}
	
	public LinkedList <Cultivo> cultivos(){
		return lista;
	}
}
