<?php

require 'vendor/autoload.php';

$mpdf = new Mpdf\Mpdf();
$mpdf->writeHTML('<h1>!Hola, mundo!</h1>');
$mpdf->Output('salida.pdf');