package org.geducativo.geradmin3;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorAlumno {
    @Autowired
    RepositorioAlumno repositorioAlumno;

    @RequestMapping(value = "/alumno", method = RequestMethod.POST, headers = {"Accept=application/json"})
    public Estatus registrarProfesor(@RequestBody String json) throws Exception {
        System.out.println("si llego el alumno a registrar");
        System.out.println(json);
        Estatus e = new Estatus();
        ObjectMapper maper = new ObjectMapper();
        Alumno alumno = maper.readValue(json, Alumno.class);
        if (alumno.getRegistrado() != 's') {
            //Aqui registrar  para el caso del alumno las materias vienen dadas por la clave del libro
            //para informaqtica 1 y para informatica 3 ya con la clave puedes darte cuenta la materia
            // y asi asignarla, en el caso del registro del alumno aqui se asigna la materia
            //no lo hagas  a traves de angular, no va en el formulario
            alumno.setRegistrado('s');
            System.out.println("Se va a llevar a cabo el registro!!");
            //Registro, donde se actualiza el registro a 's'
            // repositorioAlumno.save(alumno);
            System.out.println("se registro con datos " + alumno);
            System.out.println("Ya esta registrado");
            e.setSuccess(true);
            e.setMensaje("Buenos  ya quedo semi registrado");
        } else {
            System.out.println("NO se va a llevar a cabo el registro, ya esta registrado!!");
            //   e.setSuccess(false);
            // }



        }
        return e;
    }
}
