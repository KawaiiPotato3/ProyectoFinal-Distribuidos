package com.sde.administrarusuarios.model;

import java.io.Serializable;
import java.text.DateFormat;
import java.time.LocalDate;

public class Cliente implements Serializable {
    private Long idCliente;
    private String nombreCliente;
    private String apellidoCliente;
    private LocalDate fechaNacimiento;
    private String celular;
    private Character genero;
    private String contrasenia;
    private String email;
    private String direccion;
}
