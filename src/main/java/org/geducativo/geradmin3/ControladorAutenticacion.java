package org.geducativo.geradmin3;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorAutenticacion {


    @Autowired
    RepositorioAlumno repositorioAlumno;
    @Autowired
    RepositorioProfesor repositorioProfesor;


    @CrossOrigin
    @RequestMapping(value="/autenticar/profesor")
    public Estatus autenticarProfesor(@RequestBody String json)throws Exception{
        Estatus e=new Estatus();
        ObjectMapper maper=new ObjectMapper();

        Profesor profesor=maper.readValue(json, Profesor.class);
        e.setMensaje("Ah llegado  ese profe");
        System.out.println("Ha llegado el profesor " +json);

        return e;
    }

    @CrossOrigin
    @RequestMapping(value="/autenticar/alumno")
    public Estatus autenticarAlumno(@RequestBody String json)throws Exception{
        Estatus e=new Estatus();
        ObjectMapper maper=new ObjectMapper();

        Profesor profesor=maper.readValue(json, Profesor.class);
        e.setMensaje("Ah llegado alumno burro");
        System.out.println("Ha llegado el alumno "+json);

        return e;
    }

}
