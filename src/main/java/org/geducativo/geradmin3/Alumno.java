package org.geducativo.geradmin3;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;

public class Alumno {

    @Id
    String clave;

    String nombre;
    String paterno;
    String materno;

    Plantel plantel;
    String turno;
    String celular;
    String email;
    String password;
    String claveProfesor;

    @Override
    public String toString() {
        return "Alumno{" +
                "clave='" + clave + '\'' +
                ", nombre='" + nombre + '\'' +
                ", paterno='" + paterno + '\'' +
                ", materno='" + materno + '\'' +
                ", plantel=" + plantel +
                ", turno='" + turno + '\'' +
                ", celular='" + celular + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", claveProfesor='" + claveProfesor + '\'' +
                ", registrado=" + registrado +
                ", materias=" + materias +
                '}';
    }

    public String getClaveProfesor() {
        return claveProfesor;
    }

    public void setClaveProfesor(String claveProfesor) {
        this.claveProfesor = claveProfesor;
    }

    char registrado;

    ArrayList<Materia> materias;

    public Alumno(String nombre, String paterno, String materno) {
        this.nombre = nombre;
        this.paterno = paterno;
        this.materno = materno;
    }

    public Alumno() {
    }

    public Alumno(String clave, String nombre, String paterno, String materno, Plantel plantel, String turno, String celular, String email, String password, char registrado, ArrayList<Materia> materias) {
        this.clave = clave;
        this.nombre = nombre;
        this.paterno = paterno;
        this.materno = materno;
        this.plantel = plantel;
        this.turno = turno;
        this.celular = celular;
        this.email = email;
        this.password = password;
        this.registrado = registrado;
        this.materias = materias;
    }

    public Plantel getPlantel() {
        return plantel;
    }

    public void setPlantel(Plantel plantel) {
        this.plantel = plantel;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }



    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
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

    public String getMaterno() {
        return materno;
    }

    public void setMaterno(String materno) {
        this.materno = materno;
    }

    public Plantel getSistema() {
        return plantel;
    }

    public void setSistema(Plantel sistema) {
        this.plantel = sistema;
    }

    public String getTurno() {
        return turno;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public char getRegistrado() {
        return registrado;
    }

    public void setRegistrado(char registrado) {
        this.registrado = registrado;
    }

    public ArrayList<Materia> getMaterias() {
        return materias;
    }

    public void setMaterias(ArrayList<Materia> materias) {
        this.materias = materias;
    }
}
