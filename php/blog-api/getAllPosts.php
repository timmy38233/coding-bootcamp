<?php

function httpError(int $status, string $message, string $additionalHeaders = ''): void
{
    http_response_code($status);
    if (!empty($additionalHeaders)) {
        Header($additionalHeaders);
    }
    die($message);
}

function loadMetaData(string $filePath): array
{
    $metaData = [];
    if (!file_exists($filePath)) {
        return [];
    }
    try {
        $metaData = json_decode(file_get_contents($filePath), true);
    } catch (Exception $e) {
        httpError(500, 'Error while loading meta data: ' . $e->getMessage());
    }

    if (!isset($metaData['posts'])) {
        httpError(500, 'Invalid meta data: ' . var_export($metaData, true));
    }
    return $metaData;
}

function getPostContent(int $postId): string
{
    $filePath = STORAGE_PATH . $postId . '.json';

    if (!file_exists($filePath)) {
        return '';
    }
    try {
        return json_decode(file_get_contents($filePath), true)['content'];
    } catch (Exception $e) {
        echo "test";
        return '';
    }
}

function getAllPosts(): void
{
    $metaData = loadMetaData(STORAGE_PATH . META_FILE);
    $posts = $metaData['posts'] ?? [];

    foreach ($posts as $postId => $post) {
        $posts[$postId] = [...$post,
            'content' => getPostContent($post['id']),
            'creationTimeHumanReadable' => date('Y-m-d, H:i',$post['creationTime'])];
    }

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($posts);
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    httpError(405, 'Please request by GET', 'Allow: GET');
}
const STORAGE_PATH = './storage/';
const META_FILE = 'meta.json';

getAllPosts();