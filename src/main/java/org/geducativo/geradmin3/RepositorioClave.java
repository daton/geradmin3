package org.geducativo.geradmin3;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

public interface RepositorioClave extends MongoRepository<Clave, Integer> {
}
