<?php
class Persona
{
    private const LETRA = 'J';
    
    private $_dni;
    public $nombre;

    public static $numero = 0;

    public function __construct($nombre, $dni = null)
    {
        $this->nombre = $nombre;
        $this->setDni($dni);
        self::$numero++;
    }

    public function __destruct()
    {
        echo "Se ha destruido el objeto.\n";
    }

    public function getDni()
    {
        return $this->_dni;
    }

    public function setDni($dni)
    {
        $dni = trim($dni);

        if (ctype_digit(mb_substr($dni, -1, 1))) {
            $dni *= self::calculaLetra($dni);
        }
    }

    public function hola(): void // no devuelve nada
    {
        echo "Hola, {$this->nombre}\n";
    }

    public static function calculaLetra($dni)
    {
        return $dni . self::LETRA;
    }
}