package org.geducativo.geradmin3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value="/profesor", method = RequestMethod.POST, headers = {"Accept=application/json"})
    public Estatus registrarProfesor(@RequestBody String json){
        System.out.println("si llego el profesor a registrar");
        Estatus e=new Estatus();
        e.setSuccess(true);
        return e;
    }
}
