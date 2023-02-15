function generateSlug(posts, title) {
    let slugCandidate = title.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    let counter = 0;
    let slug = `${slugCandidate}-${counter}`
    while (posts.find(e => e.slug === slug)) {
        slug = `${slugCandidate}-${++counter}`
    }
    return slug;
}

export default generateSlug; 