package org.geducativo.geradmin3;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReposositorioClaveProfesor extends MongoRepository<ClaveProfesor, String> {
}
