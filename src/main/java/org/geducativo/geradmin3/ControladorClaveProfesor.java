package org.geducativo.geradmin3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorClaveProfesor {
    @Autowired
    ReposositorioClaveProfesor reposositorioClaveProfesor;
    @Autowired
    RepositorioProfesor repositorioProfesor;
    @RequestMapping(value = "/clave-profesor/{numero}", method = RequestMethod.GET, headers = {"Accept=application/json"})

    public Estatus getEstatus(@PathVariable String numero){
        Estatus e=new Estatus();
        System.out.println("jajajajajasasas");
        ClaveProfesor clave= reposositorioClaveProfesor.findOne(numero);
        if(clave!=null&&repositorioProfesor.findOne(numero)==null){
            e.setSuccess(true);
            e.setMensaje("Se puede registrar");
        }
        else if(clave==null) {
            e.setSuccess(false);
            e.setMensaje("La clave ingresada no existe");
        }else if(repositorioProfesor.findOne(numero).getRegistrado()=='s'){
            e.setSuccess(false);
            e.setMensaje("Esa clave ya se registró");
        }

        return e;

    }
}
