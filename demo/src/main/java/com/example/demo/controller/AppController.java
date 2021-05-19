package com.example.demo.controller;

import java.util.LinkedList;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.example.demo.model.Cultivo;
import com.example.demo.model.Especie;
import com.example.demo.model.Plaga;
import com.example.demo.model.Producto;
import com.example.demo.model.Sustancia;
import com.example.demo.repository.CultivoRepository;
import com.example.demo.repository.EspecieRepository;
import com.example.demo.repository.PlagaRepository;
import com.example.demo.repository.ProductoRepository;
import com.example.demo.repository.SustanciaRepository;

@Controller
public class AppController {
	private LinkedList<Cultivo> listacultivos = new LinkedList<Cultivo>();
	private LinkedList<Especie> listaespecies = new LinkedList<Especie>();
	private LinkedList<Especie> listaespecies2 = new LinkedList<Especie>();
	private LinkedList<Plaga> listaplagas = new LinkedList<Plaga>();
	private LinkedList<Producto> listaproductos = new LinkedList<Producto>();
	private LinkedList<Sustancia> listasustancias = new LinkedList<Sustancia>();
	@Autowired
	private CultivoRepository repCultivos;
	@Autowired
	private EspecieRepository repEspecies;
	@Autowired
	private PlagaRepository repPlagas;
	@Autowired
	private ProductoRepository repProductos;
	@Autowired
	private SustanciaRepository repSustancias;
	
	@PostConstruct
	public void init() {
		Cultivo c = new Cultivo("a",listaespecies);
		repCultivos.save(c);
		Especie e = new Especie("nombreV","nombreC",listaplagas);
		repEspecies.save(e);
		Plaga p = new Plaga("nombreV","nombreC","url",listasustancias);
		repPlagas.save(p);
		Sustancia s = new Sustancia("nombre",listaproductos);
		repSustancias.save(s);
		Producto p2 = new Producto("nombre","url");
		repProductos.save(p2);
		s.getProductos().add(p2);
		repSustancias.save(s);
		p.getSustancias().add(s);
		repPlagas.save(p);
		e.getPlagas().add(p);
		repEspecies.save(e);
		c.getEspecies().add(e);
		repCultivos.save(c);
		Cultivo c2 = new Cultivo("cultivo",listaespecies2);
		repCultivos.save(c2);
	}

}
