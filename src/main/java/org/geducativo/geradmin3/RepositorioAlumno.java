package org.geducativo.geradmin3;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RepositorioAlumno extends MongoRepository<Alumno, String> {
}
