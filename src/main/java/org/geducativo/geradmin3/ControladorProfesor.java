package org.geducativo.geradmin3;


import com.fasterxml.jackson.databind.ObjectMapper;
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
    public Estatus registrarProfesor(@RequestBody String json)throws Exception{
        System.out.println("si llego el profesor a registrar");
        System.out.println(json);
        ObjectMapper maper=new ObjectMapper();
        Estatus e=new Estatus();
       Profesor profesor=maper.readValue(json, Profesor.class);
       if(profesor.getRegistrado()!='s'){
           //Aqui registrar
           profesor.setRegistrado('s');
           System.out.println("Se va a llevar a cabo el registro!!");
           //Registro, donde se actualiza el registro a 's'
         //  repositorioProfesor.save(profesor);
           System.out.println("Ya esta registrado");
           e.setSuccess(true);
           e.setMensaje("registrado con exito");
       }else{
           System.out.println("NO se va a llevar a cabo el registro, ya esta registrado!!");
           e.setSuccess(false);
           e.setMensaje("NO se puede registra, ya esta registrado");
       }


        return e;
    }
}
