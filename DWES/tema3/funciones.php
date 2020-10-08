<?php

function suma($n1, $n2)
{
    $suma = $n1 + $n2;

    return $suma;
}

function doble($n)
{
    $doble = 2 * $n;

    return $doble;
}

echo suma(4, 3) . "\n";
echo doble(4);
// Funciones puras

function double(&$n)
{
    $n = $n * 2;
}

$num = 4;
double($num);
echo $num;
// Función impura al utilizar & y referenciar

function hola($nombre, $apellidos = 'A secas')
{
    return "¡Hola, $nombre $apellidos!\n";
}

echo hola("Alonso", "Fernández Vidal");
echo hola("Alonso");
// Los parámetros por defecto siempre siempre van al final

function hola2($args)
{
    extract($args);

    if (!isset($nombre)) {
        // error
    }

    if (!isset($apellidos)) {
        $apellidos = '';
    }

    if (!isset($dni)) {
        $dni = '5233';
    }

    $ret = $nombre;

    if ($apellidos != '') {
        $ret .= " $apellidos";
    }

    if ($dni != '') {
        $ret .= " $dni";
    }

    return "¡Hola, $ret!\n";
}

echo hola ([
    'nombre' => 'Alonso',
    'apellidos' => 'Fernández Vidal',
    'dni' => '5233'
]);


extract();
// crea variables a partir de un array
compact("alonso", "fernandez");
// crea un array a partir de los valores pasados
