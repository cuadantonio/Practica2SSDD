package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Plaga;

public interface PlagaRepository extends JpaRepository<Plaga,Long> {
	Plaga findBynombreVulgar(String nombreVulgar);
}
