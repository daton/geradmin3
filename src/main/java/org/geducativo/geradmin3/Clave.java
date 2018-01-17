package org.geducativo.geradmin3;


import org.springframework.data.annotation.Id;

public class Clave {
    @Id
    Integer clave;

    String materia;

    boolean registrado;

    public Clave(Integer clave, boolean registrado) {
        this.clave = clave;
        this.registrado = registrado;
    }

    @Override
    public String toString() {
        return "Clave{" +
                "clave=" + clave +
                ", materia='" + materia + '\'' +
                ", registrado=" + registrado +
                '}';
    }

    public Clave(Integer clave, String materia, boolean registrado) {
        this.clave = clave;
        this.materia = materia;
        this.registrado = registrado;
    }

    public boolean isRegistrado() {
        return registrado;
    }

    public void setRegistrado(boolean registrado) {
        this.registrado = registrado;
    }

    public Clave() {
    }

    public Clave(Integer clave, String materia) {
        this.clave = clave;
        this.materia = materia;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public Clave(Integer clave) {
        this.clave = clave;
    }

    public Integer getClave() {
        return clave;
    }

    public void setClave(Integer clave) {
        this.clave = clave;
    }
}
