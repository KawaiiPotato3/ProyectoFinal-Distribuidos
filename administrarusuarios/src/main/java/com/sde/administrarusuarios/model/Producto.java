package com.sde.administrarusuarios.model;

import java.io.Serializable;

public class Producto implements Serializable {
    private Long idProducto;
    private String nombreProducto;
    private String descripcion;
    private Integer stock;
    private Float precioVenta;
}
