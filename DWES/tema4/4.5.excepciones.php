<?php

/** 4.5. Excepciones
 * 
 */

try {
    echo $x;
} catch (Error | ErrorException $e) {
    echo "He capturado una excepción que tiene";
    echo "el siguiente mensaje: ";
    echo $e->getMessage();
} finally {
    // código
}
