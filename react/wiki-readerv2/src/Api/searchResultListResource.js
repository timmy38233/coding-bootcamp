import wrapPromise from "./wrapPromise";

async function searchResultList(searchTerm) {
    if (!searchTerm) {
        return [];
    }

    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&srlimit=15&origin=*&srsearch=${encodeURIComponent(searchTerm)}`;

    const searchResultList = await fetch(url).then((result) => result.json());
    try {
        return searchResultList.query.search;
    }
    catch {
        return [];
    }
}

export default function searchResultListResource(searchTerm) {
    return wrapPromise(() => searchResultList(searchTerm));
}