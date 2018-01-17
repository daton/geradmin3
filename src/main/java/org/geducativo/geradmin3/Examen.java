package org.geducativo.geradmin3;

public class Examen {


    String nombre;
    float calificacion;

    @Override
    public String toString() {
        return "Examen{" +
                "nombre='" + nombre + '\'' +
                ", calificacion=" + calificacion +
                '}';
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(float calificacion) {
        this.calificacion = calificacion;
    }

    public Examen() {
    }
}
