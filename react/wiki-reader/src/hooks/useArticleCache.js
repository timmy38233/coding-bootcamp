import { useEffect, useState } from "react";
import Actions from "../state/Actions";

export default function useArticleCache(state, dispatchWikiReaderState) {
    const [article, setArticle] = useState(null);
    const [pageId, setPageId] = useState(null);

    useEffect(() => {
        const addArticleToCache = (article) => {
            dispatchWikiReaderState({ type: Actions.AddArticleToCache, payload: { article } })
        };

        if (!pageId) {
            setArticle(null);
            return;
        }

        if (state.articleCache[pageId]) {
            setArticle(state.articleCache[pageId]);
            return;
        }

        let url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages|info&pithumbsize=800&inprop=url&redirects=&format=json&origin=*&pageids=${pageId}`;

        fetch(url)
            .then((result) => result.json())
            .then((jsonObj) => {
                try {
                    addArticleToCache(jsonObj.query.pages[pageId]);
                    setArticle(jsonObj.query.pages[pageId])
                }
                catch {
                    console.log(`PageID ${pageId} not found.`);
                    console.log(jsonObj);
                    setArticle(null);
                }
            })
            .catch((e) => console.log(e));
    }, [pageId]);

    return [article, setPageId];
}