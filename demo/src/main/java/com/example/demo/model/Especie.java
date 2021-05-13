package com.example.demo.model;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Especie {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String nombreVulgar;
	private String nombreCientifico;
	@ManyToMany
	@ElementCollection
	private List<Plaga> plagas;
	
	public Especie(String nombreVulgar, String nombreCientifico, List<Plaga> plagas) {
		super();
		this.nombreVulgar = nombreVulgar;
		this.nombreCientifico = nombreCientifico;
		this.plagas = plagas;
	}
	
	public Especie() {}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombreVulgar() {
		return nombreVulgar;
	}

	public void setNombreVulgar(String nombreVulgar) {
		this.nombreVulgar = nombreVulgar;
	}

	public String getNombreCientifico() {
		return nombreCientifico;
	}

	public void setNombreCientifico(String nombreCientifico) {
		this.nombreCientifico = nombreCientifico;
	}

	public List<Plaga> getPlagas() {
		return plagas;
	}

	public void setPlagas(List<Plaga> plagas) {
		this.plagas = plagas;
	}
}
