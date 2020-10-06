<?php

echo get_include_path() . "\n";

echo "Soy el a.php\n";
include './b.php'; // Si no existe b.php produce un warning
echo "Soy el a.php después incluir a b.php\n";
$x = require 'b.php'; // Si no existe b.php produce un error fatal
echo "b.php devuelve $x\n";
require_once 'b.php'; // Si el archivo b.php ha sido incluido anteriormente no lo ejecuta

// include_path