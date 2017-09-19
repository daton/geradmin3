package org.geducativo.geradmin3;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioPrueba extends CrudRepository<Prueba, Long> {
}
