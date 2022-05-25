<?php
if (isset($_POST["X"]) && isset($_POST["Y"])&& isset($_POST["H"])&& isset($_POST["C"])) {

    // Формируем массив для JSON ответа
    $result = array(
        'X' => $_POST["X"],
        'Y' => $_POST["Y"],
        'H' => $_POST["H"],
        'C' => $_POST["C"],
    );

    // Переводим массив в JSON
    echo json_encode($result);
}

