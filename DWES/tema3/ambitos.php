<?php

/* Variables locales y globales */

$a = 1; /* ámbito global */

function prueba()
{
    global $a;

    echo "$a\n"; /* referencia a una variable del ámbito local */
    $a = 5;
}

prueba();

echo "$a\n";

/* Variables superglobales */

function prueba2()
{
    print_r($_ENV);
}

prueba2();

/* Declaraciones de tipos */

function suma(int $x, int $y): int
{
    return $x + $y;
}

echo suma(4, 3) . "\n";

echo suma("4", "3") . "\n";
// Si le pasas por argumentos cadenas INTENTA convertirlo al tipo int

function suma1(int $x, ?int $y): void
// Con ? delante de la declaración de tipo aceptamos NULL
{
    $suma = $x + $y;
    echo "$suma\n";
}

$ret = suma1("4", "3");
var_dump($ret);

/* Tipificación estricta */

declare(strict_types=1);
// Se hace al principio del fichero DONDE HACES LA
// LLAMADA A LA FUNCIÓN y no donde declaras la función

require './auxiliar.php';
// Llama a la funcion SUMATORIO alojada en AUXILIAR.PHP

echo sumatorio(4, 3) . "\n";

?>

<!-- Comentarios y documentación del código -->

<?php

/**
 * @author Alonso Fernández
 * @copyright Copyright (c) 2020 Alonso Fernández
 * @license https://www.gnu.org/licenses/gpl.txt
 */

/**
 * Este programa hace...
 */
