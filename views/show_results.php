<?php
$unit_result = json_decode($_GET["unit_result"]);
$data_unit = $_GET["data_unit"];
?>

<table class="table-result centered col">
    <thead>
        <tr>
            <th>UNIDAD DE MEDIDA</th>
            <th></th>
            <th>RESULTADO</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($unit_result as $unit => $result) { ?>
            <tr>
                <td><?php echo "<b class='unit-result'>$data_unit</b> <i class='fas fa-arrow-right'></i> <b class='unit-result'>$unit</b>" ?></td>

                <th><i class="fas fa-equals"></i></th>

                <td>
                    <?php if (is_int($result)) {
                        $result_format = number_format($result);
                        echo "<b class='result'>$result_format</b>";
                    } else {
                        echo "<b class='result'>$result</b>";
                    }
                    ?>
                </td>
            </tr>
        <?php
        }
        ?>
    </tbody>
</table>

<br>