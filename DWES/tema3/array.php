<?php

/* 3.3. Arrays */ 

$a = [6, 9, 25, 37,];
// Otra manera de definir un array
array(6, 9, 25, 37);
// Otra manera
$b = [0 => 6, 1 => 7, 2 => 8, 3 => 9]; // CLAVE => VALOR
//Otra manera
$c = [5 => 6, 7, 8, 9]

// Acceder a un elemento del array a través de su índice
$a[3];
// Cambiar elementos de un array
$a[1] = 99;

$b = [5, "hola", 5.3, false, [2, 3, 4], null];
// Eliminar elementos de un array
unset($b[5]);

/*
Los arrays en PHP son como los diccionarios en Python
*/

/* 3.3.1. Operadores para arrays
    • Acceso, modificación y agregación */

$x = [5, 6, 7];
$y = [12, 13, 14, 15];

$x + $y = [5, 6, 7, 15]

/* 3.3.2. Funciones de manejo de arrays
    • Ordenación de arrays
    • print_r()
    • ’+’ vs. array_merge()
    • isset() vs. array_key_exists() */

array_reverse($a);
// Invierte el array a partir de los VALORES

array_shift($a);
// Quita el primer valor del array, y recolola los valores a los índices

array_pop($a);
// Extrae y devuelve el último elemento del array, eliminándolo

array_push($a, 1);
// Inserta uno o más elementos al final del array

array_flip($a);
// Intercambia las CLAVES por sus respectivos VALORES

array_fill(0, 6, 'banana');
// Llena un array con 6 entradas de valor 'banana' desde la CLAVE 0

array_merge($x, $y);
// Combina los elementos de uno o más arrays juntándolos de modo que los valores de uno se anexan al final del anterior

array_search(7, $x);
// Busca la PRIMERA CLAVE donde aparece el VALOR dado

in_array(7, $x);
// Funciona como el array_search pero no devuelve el VALOR, devuelve TRUE o FALSE si existe dicho valor en el array dado

array_slice($x, 0, 2);
// Extrae un subarray
//  Primer parámetro -> array
//  Segundo parámetro -> posición de inicio
//  Tercer parámetro -> número de valores

array_keys($x);
// Construye un array con las CLAVES extraidas

array_values($x);
// Construye un array con los VALORES extraidos

array_combine(array_keys($x), array_values($x));
array_combine(['a', 'b', 'c'], [5, 6, 7]);

sort($x);
// Ordena en base a los VALORES sin conservar los ÍNDICES

asort($x);
// Ordena en base a los VALORES manteniendo los ÍNDICES

krsort($x);
// Ordena según los ÍNDICES

range(0, 10, 2);
// Crea un array iniciando en 0, acabando en 10 y cada 2

isset($y['perro']);
// Busca la CLAVE 'perro' en el array $y

array_key_exists('perro', $y);
// Devuelve un bool dependiendo si existe 'perro' o no dentrod el array $y

print_r($y);
// Muestra información sobre una variable en una forma que es legible por humanos
//  var_dump() y var_export() muestra más información siendo más recomendable

/* 3.3.3. foreach */

foreach ($a as $key => $value) {
    echo "El valor correspondiente a la clave $key es $value\n";
}

foreach ($variable as $value) {
    echo "El valor es $value\n";
}
// Recorre el array de forma iterativa devolviendo los argumentos dados después de AS

foreach ($a as $k => $v) {
    $a[$k]++;
}
// Suma +1 a cada VALOR del array

foreach ($a as &$v) {
    $v++;
}
// También suma +1 a cada VALOR del array al utilizar &
