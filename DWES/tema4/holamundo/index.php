<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo</title>
</head>

<body>
    <!-- <?php echo "Hola, mundo" ?><br>
    <?= "Hola, mundo" ?><br>
    <?= php_sapi_name() ?><br>
    <?= phpinfo() ?> -->

    <form action="saluda.php" method="get">
        <label for="">Escribe tu nombre</label>
        <input type="text" name="nombre" id="nom">
        <button type="submit">Saludar</button>
    </form>

</body>

</html>