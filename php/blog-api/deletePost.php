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

function saveMetaData(string $filePath, array $data): void
{
    try {
        file_put_contents($filePath, json_encode($data));
    } catch (Exception $e) {
        httpError(500, 'Error while saving default meta data: ' . $e->getMessage());
    }
}

function deletePost(): void
{
    $metaData = loadMetaData(STORAGE_PATH . META_FILE);
    $posts = $metaData['posts'] ?? [];

    $requestData = getDataFromRequest('id');
    $requestPostId = intval($requestData['id']) ?? '';


    if ($requestPostId > 0 && array_key_exists($requestPostId, $posts)) {
        $postFileName = STORAGE_PATH . $requestPostId . '.json';

        try {
            unset($posts[$requestPostId]);
            unlink($postFileName);
        } catch (Exception $e) {
            httpError(500, 'Could not delete post: ' . $e->getMessage());
        }
        $metaData['posts'] = $posts;
        saveMetaData(STORAGE_PATH . META_FILE, $metaData);

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['status' => 'success', 'message' => sprintf('deleted post %d', $requestPostId)]);
    } else {
        httpError(404, 'Post not found');
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    httpError(405, 'Please request by DELETE', 'Allow: DELETE');
}
const STORAGE_PATH = './storage/';
const META_FILE = 'meta.json';

deletePost();