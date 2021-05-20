package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Especie;

public interface EspecieRepository extends JpaRepository<Especie,Long> {
	Especie findBynombreVulgar(String nombreVulgar);
}
