<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog Form</title>
    <style>
        form {
            display: flex;
            flex-direction: column;
            padding: 20px;
            max-width: 600px;
            margin: auto;
        }
    </style>
</head>

<body>
    <form action="validate.php" method="POST">
        <h1>Blog Form</h1>
        <input type="text" name="title" placeholder="Title…" />
        <textarea name="content" placeholder="Content…"></textarea>
        <input type="text" name="author__name" placeholder="Author…" />
        <input type="text" name="author__email" placeholder="E-Mail…" />
        <span>
            <?php
            $categories = ['General', 'Food', 'Travel', 'Personal'];
            foreach ($categories as $category) {
                printf('<input type="checkbox" name="categories[]" value="%1$s" id="category_%1$s"/><label for="category_%1$s">%1$s</label>', $category);
            }
            ?>
        </span>
        <input type="submit" value="Submit" />
    </form>
</body>

</html>