package org.geducativo.geradmin3;


import org.springframework.data.annotation.Id;

public class Plantel {
    @Id
    Integer numero;
    String ubicacion;

    public Plantel(Integer numero) {
        this.numero = numero;
    }

    public Plantel() {
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
}
