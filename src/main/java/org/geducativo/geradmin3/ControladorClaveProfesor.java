package org.geducativo.geradmin3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorClaveProfesor {
    @Autowired
    ReposositorioClaveProfesor reposositorioClaveProfesor;
    @RequestMapping(value = "/clave-profesor/{numero}", method = RequestMethod.GET, headers = {"Accept=application/json"})

    public Estatus getEstatus(@PathVariable String numero){
        Estatus e=new Estatus();
        System.out.println("jajajajajasasas");
        ClaveProfesor clave= reposositorioClaveProfesor.findOne(numero);
        if(clave!=null)e.setSuccess(true);
        else e.setSuccess(false);

        return e;

    }
}
