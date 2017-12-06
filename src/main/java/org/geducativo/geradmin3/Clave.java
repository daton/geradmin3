package org.geducativo.geradmin3;


import org.springframework.data.annotation.Id;

public class Clave {
    @Id
    Integer clave;

    String materia;

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
