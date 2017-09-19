package org.geducativo.geradmin3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorProfesor {
    @Autowired
    RepositorioProfesor repositorioProfesor;
    @RequestMapping(value="/profesor", method = RequestMethod.GET, headers = {"Accept=application/json"})
    public Profesor getProfesor(){
        System.out.println("SI LLEGO");

        return repositorioProfesor.findOne("BINF2001");
    }
}
