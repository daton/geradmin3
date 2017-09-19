package org.geducativo.geradmin3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorClave {
@Autowired
RepositorioClave repositorioClave;
    @RequestMapping(value = "/clave/{numero}", method = RequestMethod.GET, headers = {"Accept=application/json"})

    public Estatus getEstatus(@PathVariable Integer numero){
        Estatus e=new Estatus();
        System.out.println("jajajajajasasas");
       Clave clave= repositorioClave.findOne(new Long(numero));
       // repositorioClave.findOne();
       if(clave!=null)e.setSuccess(true);
       else e.setSuccess(false);

       return e;

    }
}
