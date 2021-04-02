<?php
$unit_result = json_decode($_GET["unit_result"]);
$data_unit = $_GET["data_unit"];
?>

<table class='table table-bordered border-primary'>
    <thead>
        <tr>
            <th scope='col'>UNIDAD DE MEDIDA</th>
            <th scope='col'>RESULTADO</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($unit_result as $unit => $result) { ?>
            <tr>
                <td><?php echo "$data_unit <i class='fas fa-arrow-right'></i> $unit" ?></td>

                <td>
                    <?php if (is_int($result)) {
                        echo number_format($result);
                    } else {
                        echo $result;
                    }
                    ?>
                </td>
            </tr>
        <?php
        }
        ?>
    </tbody>
</table>