import wrapPromise from "./wrapPromise";

export default function searchResultListResource(searchTerm) {
    if (!searchTerm) {
        return wrapPromise(() => new Promise((res) => res([])));
    }

    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&srlimit=15&origin=*&srsearch=${encodeURIComponent(searchTerm)}`;

    const searchResultListPromise = fetch(url)
        .then((result) => result.json())
        .then((jsonObj) => {
            try {
                return jsonObj.query.search;
            }
            catch {
                return Promise.reject(jsonObj);
            }
        })
        .catch((e) => { console.log('Error retrieving data'); console.log(e) });

    return wrapPromise(() => searchResultListPromise);
}
