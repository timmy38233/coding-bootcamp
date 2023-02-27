import { useEffect, useReducer } from 'react';
import Actions from '../../state/Actions';
import initialWikiReaderState from '../../state/models/initialWikiReaderState';
import wikiReaderStateReducer from '../../state/reducers/wikiReaderStateReducer';
import ArticleList from '../components/ArticleList/ArticleList';
import Header from '../components/Header/Header';
import SearchBar from './SearchBar/SearchBar';
import './App.scss';
import useSearch from '../../hooks/useSearch';
import ArticleModal from '../components/ArticleModal/ArticleModal';
import useArticleCache from '../../hooks/useArticleCache';

function App() {
    const [wikiReaderState, dispatchWikiReaderState] = useReducer(wikiReaderStateReducer, initialWikiReaderState);

    const [article, setPageId] = useArticleCache(wikiReaderState, dispatchWikiReaderState);

    useEffect(() => {
        dispatchWikiReaderState({ type: Actions.DisplayArticle, payload: { articleToDisplay: article } })
    }, [article]);

    const fetchSearchResults = useSearch(dispatchWikiReaderState);

    useEffect(() => {
        fetchSearchResults(wikiReaderState.searchTerm);
    }, [wikiReaderState.searchTerm, fetchSearchResults]);

    return (
        <div className="App">
            <Header />
            <SearchBar setSearchTerm={(searchTerm) => dispatchWikiReaderState({ type: Actions.SetSearchTerm, payload: { searchTerm } })} />
            <ArticleList searchResultList={wikiReaderState.searchResultList} displayArticle={setPageId} />
            {wikiReaderState.isModalShowing ? <ArticleModal article={wikiReaderState.articleToDisplay} displayArticle={setPageId} /> : ''}
        </div>
    );
}

export default App;
