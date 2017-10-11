package org.geducativo.geradmin3;


import org.springframework.data.annotation.Id;

import java.util.ArrayList;

public class Profesor {



    @Id
    String clave;


    String nombre;
    String paterno;
    String materno;

    Sistema sistema;

    public Sistema getSistema() {
        return sistema;
    }

    public void setSistema(Sistema sistema) {
        this.sistema = sistema;
    }

    String turno;

    String email;
    String password;                                                                                              

    String celular;

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    char registrado;

    ArrayList<Materia> materias;

    public ArrayList<Materia> getMaterias() {
        return materias;
    }

    public void setMaterias(ArrayList<Materia> materias) {
        this.materias = materias;
    }

    public char getRegistrado() {
        return registrado;
    }

    public void setRegistrado(char registrado) {
        this.registrado = registrado;
    }

    public Profesor(String clave) {
        this.clave = clave;
    }



    public Profesor() {
    }
    public String getMaterno() {
        return materno;
    }

    public void setMaterno(String materno) {
        this.materno = materno;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPaterno() {
        return paterno;
    }

    public void setPaterno(String paterno) {
        this.paterno = paterno;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



    public String getTurno() {
        return turno;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }


}
