import Actions from "../Actions";


export default function wikiReaderStateReducer(state, action) {
    switch (action.type) {
        case Actions.SetSearchTerm:
            return { ...state, searchTerm: action.payload.searchTerm };

        case Actions.SetSearchResultList:
            return { ...state, searchResultList: Object.values(action.payload.searchResultList) };

        case Actions.DisplayArticle:
            return { ...state, articleToDisplay: action.payload.articleToDisplay, isModalShowing: !!(action.payload.articleToDisplay) };

        case Actions.AddArticleToCache:
            const newArticleCache = state.articleCache;
            newArticleCache[action.payload.article.pageid] = action.payload.article;
            return { ...state, articleCache: newArticleCache }

        default:
            console.error(`Unknown action: ${action.type}`);
            return state;
    }
}