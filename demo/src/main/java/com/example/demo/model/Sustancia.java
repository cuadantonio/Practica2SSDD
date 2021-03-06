package com.example.demo.model;

import java.util.List;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Sustancia {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String nombre;
	@ManyToMany
	private List<Producto> productos;
	
	public Sustancia(String nombre, List<Producto> productos) {
		super();
		this.nombre = nombre;
		this.productos = productos;
	}
	
	public Sustancia() {}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Producto> getProductos() {
		return productos;
	}

	public void setProductos(List<Producto> productos) {
		this.productos = productos;
	}
}
