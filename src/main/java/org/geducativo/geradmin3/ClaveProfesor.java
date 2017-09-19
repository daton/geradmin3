package org.geducativo.geradmin3;

import org.springframework.data.annotation.Id;

public class ClaveProfesor {

    @Id
    String claveProfesor;

    public String getClaveProfesor() {
        return claveProfesor;
    }

    public void setClaveProfesor(String claveProfesor) {
        this.claveProfesor = claveProfesor;
    }

    public ClaveProfesor(String claveProfesor) {
        this.claveProfesor = claveProfesor;
    }
}
