<?php

/**
 * Prueba de Composer.
 *
 * @author Alonso Fernández <alonso.fernandez@iesdonana.org>
 *
 */

require 'vendor/autoload.php';

use Ramsey\Uuid\Uuid;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

// $mpdf = new Mpdf\Mpdf();
// $mpdf->writeHTML('<h1>!Hola, mundo!</h1>');
// $mpdf->Output('salida.pdf');

// $uuid = Uuid::uuid4();
// echo $uuid;

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();
$sheet->setCellValue('A1', 'Hello World !');

$writer = new Xlsx($spreadsheet);
$writer->save('hello world.xlsx');

// Entornos (contextos de ejecución)
// Desarrollo --> Pruebas --> Staging --> Producción
// Programador -- Cliente

// Workflow

// php_codesniffer ==> comprueba el estilo
// php-cs-fixer ==> corrige el estilo