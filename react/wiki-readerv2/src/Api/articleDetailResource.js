import wrapPromise from "./wrapPromise";

export default function articleDetailResource(pageId) {
    if (!pageId) {
        return wrapPromise(() => new Promise((res) => res({})));
    }

    let url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages|info&pithumbsize=800&inprop=url&redirects=&format=json&origin=*&pageids=${pageId}`;

    const articleDetailPromise = fetch(url)
        .then((result) => result.json())
        .then((jsonObj) => jsonObj.query.pages[pageId])
        .catch((e) => console.log(e));

    return wrapPromise(() => articleDetailPromise);
}
