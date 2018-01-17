package org.geducativo.geradmin3;

import java.util.ArrayList;

public class Materia {
    String campo;
    String nombre;
    ArrayList<Examen> examen;

    @Override
    public String toString() {
        return "Materia{" +
                "campo='" + campo + '\'' +
                ", nombre='" + nombre + '\'' +
                ", examen=" + examen +
                '}';
    }

    public Materia(String nombre) {
        this.nombre = nombre;
    }

    public Materia() {
    }

    public ArrayList<Examen> getExamen() {
        return examen;
    }

    public void setExamen(ArrayList<Examen> examen) {
        this.examen = examen;
    }

    public String getCampo() {
        return campo;
    }

    public void setCampo(String campo) {
        this.campo = campo;
    }


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
