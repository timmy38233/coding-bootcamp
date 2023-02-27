import { useEffect, useState } from "react";
import Actions from "../state/Actions";

export default function useSearch(dispatchWikiReaderState) {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const setSearchResultList = (searchResultList) => {
            dispatchWikiReaderState({ type: Actions.SetSearchResultList, payload: { searchResultList } })
        };

        if (!searchTerm) {
            setSearchResultList({});
            return;
        }
        let url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&exintro=&prop=pageimages&format=json&origin=*&gsrsearch=${searchTerm}`;

        fetch(url)
            .then((result) => result.json())
            .then((jsonObj) => {
                try {
                    setSearchResultList(jsonObj.query.pages)
                }
                catch {
                    setSearchResultList({})
                }
            })
            .catch((e) => console.log(e));
    }, [searchTerm]);

    return setSearchTerm;
}
