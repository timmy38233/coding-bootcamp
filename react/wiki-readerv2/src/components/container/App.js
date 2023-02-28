import { Suspense, useState, useMemo } from 'react';
import articleDetailResource from '../../Api/articleDetailResource';
import searchResultListResource from '../../Api/searchResultListResource';
import ArticleDetail from '../components/ArticleDetail/ArticleDetail';
import ArticleList from '../components/ArticleList/ArticleList';
import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';
import SearchBar from './SearchBar/SearchBar';
import './App.scss';


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [modalPageId, setModalPageId] = useState(null);

    const searchResultListResourceMemo = useMemo(() => searchResultListResource(searchTerm), [searchTerm]);
    const articleDetailResourceMemo = useMemo(() => articleDetailResource(modalPageId), [modalPageId]);

    return (
        <div className="App">
            <Header />
            <SearchBar setSearchTerm={setSearchTerm} />

            {!!searchTerm ?
                <Suspense fallback={<Loader />}>
                    <ArticleList searchResultListResource={searchResultListResourceMemo} setModalPageId={setModalPageId} />
                </Suspense>
            : ''}

            {!!modalPageId ?
                <Modal setModalPageId={setModalPageId}>
                    <Suspense fallback={<Loader />}>
                        <ArticleDetail articleDetailResource={articleDetailResourceMemo} />
                    </Suspense>
                </Modal>
            : ''}
        </div>
    );
}

export default App;
