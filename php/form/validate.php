<?php
function getDataFromRequest(string $method, array $keys): array
{
    $data = [];
    foreach ($keys as $key) {
        $data[$key] = ($method === 'GET') ? $_GET[$key] ?? '' : $_POST[$key] ?? '';
    }
    return $data;
}

function createErrorMessage(string $message, ...$params): string
{
    return sprintf('<div class="Error">%s</div>', sprintf($message, ...array_map(fn($param) => htmlspecialchars($param), $params)));
}

function validateInputs(string ...$keys): ?string
{
    $content = '';
    $data = getDataFromRequest('POST', $keys);

    $contentMinWords = 5;

    foreach ($data as $key => $value) {
        if (empty($value)) {
            $content .= createErrorMessage('Input for %s should not be empty', $key);
        }
        switch ($key) {
            case 'content':
                $content .= !(count(preg_split('/\W/', $value)) > $contentMinWords)
                    ? createErrorMessage('Content should contain more than %d words', $contentMinWords)
                    : '';
                break;
            case 'author__email':
                $content .= !(str_contains($value, '@'))
                    ? createErrorMessage('Email %s not valid', htmlspecialchars($value))
                    : '';
                break;
            default:
                break;
        }
    }
    return !empty($content) ? $content : null;
}


$content = '';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $content = '<h2>Please call this document via <a href="./">this form</a></h2>';
} else {
    $content = validateInputs('title', 'content', 'author__name', 'author__email', 'categories') ??
        sprintf('<h2>Looks good!</h2><pre>%s</pre>', var_export($_POST, true));
}
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP Form Validate</title>
    <style>
        .Validator {
            max-width: 600px;
            margin: auto;
        }

        .Error {
            color: red;
        }
    </style>
</head>

<body>
<div class="Validator">
    <h1>Form validator</h1>
    <?= $content ?>
    <a href="javascript:history.back()">Back to form</a>
</div>
</body>

</html>