<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo</title>
</head>

<body>
    <?php if (isset($_GET['nombre'])): ?>
        <?php $nombre = trim($_GET['nombre']) ?>
        <?php if ($nombre != ''): ?>
            <h3>¡Hola, <?= $nombre ?>!</h3>
        <?php else: ?>
            <h2>Error: el nombre no puede ser vacío.</h2>
        <?php endif ?>
    <?php endif ?>
    <?php if (isset($_GET['anyo'])): ?>
        <?php $anyo = trim($_GET['anyo']) ?>
        <?php if ($anyo != ''): ?>
            <?php if (ctype_digit($anyo) && $anyo <= 9999): ?>
                <p>Naciste en <?= $anyo ?> y tienes <?= date('Y') - $anyo ?> años.</p>
            <?php else: ?>
                <h2>Error: el año no tiene el formato adecuado.</h2>
            <?php endif ?>
        <?php endif ?>
    <?php endif ?>

    <!-- <?php echo "Hola, mundo" ?><br>
    <?= "Hola, mundo" ?><br>
    <?= php_sapi_name() ?><br>
    <?= phpinfo() ?> -->

    <form action="index.php" method="get">
        <label for="">Escribe tu nombre:*</label>
        <input type="text" name="nombre" id="nom">
        <label for="">Escribe tu año de nacimiento:</label>
        <input type="text" name="anyo" id="anyo" size="10">
        <button type="submit">Saludar</button>
    </form>

</body>

</html>