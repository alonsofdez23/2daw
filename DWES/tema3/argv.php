<?php

echo "¡Hola, {$argv[1]}!\n";
echo "¡Hola, " . $argv[1] . "!\n";
// Recoge el segundo argumento pasado al ejecutar y lo inserta en el echo

if (!isset($argv[1])) {
    echo "Falta el nombre del usuario\n";
} else {
    echo "¡Hola, {$argv[1]}!\n";
}
// Solventa el problema en caso de que no introduzcas el segundo argumento

if (!isset($argv[1])) {
    echo "Falta el nombre del usuario\n";
    exit(1);
}

echo "¡Hola, {$argv[1]}!\n";
// En caso de que falte el argumento dos te devuelve por terminal el codigo de error 1

if (!isset($argv[1])) {
    echo "Falta el nombre del usuario\n";
    die(1);
}

echo "¡Hola, {$argv[1]}!\n";
// die() es equivalente a exit()

if ($argc < 2) {
    echo "Falta el nombre del usuario\n";
    exit(1);
}

echo "¡Hola, {$argv[1]}!\n";
// Otra manera de hacerlo con otra condición

if ($argc < 2) {
    echo "Falta el nombre del usuario\n";
    exit(1);
} elseif ($argc > 2) {
    echo "Hay demasiados argumentos\n";
    exit(2);
}

$nombre = trim($argv[1]);
echo "¡Hola, $nombre!\n";
// Sanear la cadena recibida quitando los espacios de los extremos con trim()