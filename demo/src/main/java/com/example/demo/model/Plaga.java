package com.example.demo.model;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Plaga {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String nombreVulgar;
	private String nombreCientifico;
	private String url;
	@ManyToMany
	private List<Sustancia> sustancias;
	
	public Plaga(String nombreVulgar, String nombreCientifico, String url, List<Sustancia> sustancias) {
		super();
		this.nombreVulgar = nombreVulgar;
		this.nombreCientifico = nombreCientifico;
		this.url = url;
		this.sustancias = sustancias;
	}
	
	public Plaga() {}

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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public List<Sustancia> getSustancias() {
		return sustancias;
	}

	public void setSustancias(List<Sustancia> sustancias) {
		this.sustancias = sustancias;
	}
}
