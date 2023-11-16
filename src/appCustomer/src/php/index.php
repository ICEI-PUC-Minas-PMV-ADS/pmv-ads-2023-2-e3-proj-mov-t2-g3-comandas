<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Comandas UpLoad Photos php">
        <meta name="author" content="Comandas">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head> 

    <body>
        <h1>Comandas Image Upload</h1>
        <?php
        $scan = scandir('uploads');
        foreach($scan as $file)
        {
            if (!is_dir($file))
            {
                echo '<h3>'.$file.'<h3>';
                echo '<img src="uploads/'.$file.'" style="width: 500px;"/><br />';
            }
        }
        ?>
    </body>
</html>

