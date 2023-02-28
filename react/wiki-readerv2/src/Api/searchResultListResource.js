import wrapPromise from "./wrapPromise";

export default function searchResultListResource(searchTerm) {
    if (!searchTerm) {
        return wrapPromise(() => new Promise((res) => res([])));
    }

    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&srlimit=10&origin=*&srsearch=${encodeURIComponent(searchTerm)}`;

    const searchResultListPromise = fetch(url)
        .then((result) => result.json())
        .then((jsonObj) => jsonObj.query.search)
        .catch((e) => console.log(e));

    return wrapPromise(() => searchResultListPromise);
}
