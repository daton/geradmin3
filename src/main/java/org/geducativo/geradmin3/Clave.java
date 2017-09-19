package org.geducativo.geradmin3;


import org.springframework.data.annotation.Id;

public class Clave {
    @Id
    Integer clave;

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
