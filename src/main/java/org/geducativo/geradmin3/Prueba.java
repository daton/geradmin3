package org.geducativo.geradmin3;


import org.springframework.data.annotation.Id;


public class Prueba {


    @Id
    Long id;
    String nombre;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Prueba(String nombre) {
        this.nombre = nombre;
    }

    public Prueba() {
    }
}




