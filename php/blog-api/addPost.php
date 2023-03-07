<?php

function httpError(int $status, string $message, string $additionalHeaders = ''): void
{
    http_response_code($status);
    if (!empty($additionalHeaders)) {
        Header($additionalHeaders);
    }
    die($message);
}

function getDataFromRequest(...$keys): array
{
    $data = [];
    foreach ($keys as $key) {
        $data[$key] = $_REQUEST[$key] ?? '';
    }
    return $data;
}

function loadMetaData(string $filePath): array
{
    $metaData = [];
    if (!file_exists($filePath)) {
        try {
            file_put_contents($filePath, META_TEMPLATE);
        } catch (Exception $e) {
            httpError(500, 'Error while generating default meta data: ' . $e->getMessage());
        }
    }
    try {
        $metaData = json_decode(file_get_contents($filePath), true);
    } catch (Exception $e) {
        httpError(500, 'Error while loading meta data: ' . $e->getMessage());
    }

    if (!isset($metaData['lastId']) || !isset($metaData['posts'])) {
        httpError(500, 'Invalid meta data: ' . var_export($metaData, true));
    }
    return $metaData;
}

function saveMetaData(string $filePath, array $data): void
{
    try {
        file_put_contents($filePath, json_encode($data));
    } catch (Exception $e) {
        httpError(500, 'Error while saving default meta data: ' . $e->getMessage());
    }
}

function savePost(array $postData): void
{
    $globalMetaData = loadMetaData(STORAGE_PATH . META_FILE);

    $postFileName = '';

    if (isset($postData['id']) && array_key_exists($postData['id'], $globalMetaData['posts'])) {
        $postId = intval($postData['id']);
        $postFileName = STORAGE_PATH . $postId . '.json';
    } else {
        $postId = intval($globalMetaData['lastId']);
        do {
            $postId++;
            $postFileName = STORAGE_PATH . $postId . '.json';
        } while (file_exists($postFileName));
    }
    try {
        $dataWritten = file_put_contents($postFileName, json_encode(
            array_filter($postData,
                fn($key) => in_array($key, DATA_IN_POST_FILE),
                ARRAY_FILTER_USE_KEY
            )
        ));
        if (!$dataWritten) {
            throw new ErrorException('Could not write post data');
        }
    } catch (Exception $e) {
        httpError(500, 'Error while writing post to file: ' . $e->getMessage());
    }

    $postMeta = ['id' => $postId, 'title' => $postData['title'], 'creationTime' => time()];
    $globalMetaData['lastId'] = $postId;
    $globalMetaData['posts'][$postId] = [...$postMeta];
    saveMetaData(STORAGE_PATH . META_FILE, $globalMetaData);

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($postMeta);
}

function addPost(): void
{
    $postData = getDataFromRequest('title', 'content', 'id');

    if (empty($postData['title']) || empty($postData['content'])) {
        httpError(400, 'Disallowed empty data in request');
    }

    savePost($postData);
}


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    httpError(405, 'Please request by POST', 'Allow: POST');
}
const STORAGE_PATH = './storage/';
const FILE_EXTENSION = '.json';
const META_FILE = 'meta' . FILE_EXTENSION;
define('META_TEMPLATE', json_encode(['lastId' => 0, 'posts' => []]));

const DATA_IN_POST_FILE = ['title', 'content'];

addPost();