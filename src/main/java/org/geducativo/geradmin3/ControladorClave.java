package org.geducativo.geradmin3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorClave {
@Autowired
RepositorioClave repositorioClave;


@CrossOrigin
    @RequestMapping(value = "/clave/{numero}", method = RequestMethod.GET, headers = {"Accept=application/json"})
    public Estatus getEstatus(@PathVariable Integer numero){
        Estatus e=new Estatus();
        System.out.println("LA CLAVE ES "+numero);
       Clave clave= repositorioClave.findOne(numero);
       // repositorioClave.findOne();
       if(clave!=null){
           if(!clave.isRegistrado()){
               e.setSuccess(true);
               e.setMensaje("Se puede registrar");
           }else{
               e.setSuccess(false);
               e.setMensaje("Esa clave ya ha sido registrada");
           }

       }
       if(clave==null){
           e.setSuccess(false);
           e.setMensaje("Esa clave de libro no existe");
       }

       return e;

    }
}
