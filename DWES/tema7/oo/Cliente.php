<?php

require './Persona.php';

class Cliente extends Persona
{
    public $id;

    public function __construct($nombre, $dni = null, $id = null)
    {
        parent::__construct($nombre, $dni);
        
        $this->id = $id;
    }

    public function holaCliente()
    {
        echo "Soy el cliente {$this->id} y me llamo {$this->nombre}.\n";
    }
}