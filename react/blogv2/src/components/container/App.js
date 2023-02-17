import { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Err404Page from '../pages/404/Err404Page';
import HomePage from '../pages/Home/HomePage';
import LayoutPage from '../pages/Layout/LayoutPage';
import LoginPage from '../pages/Login/LoginPage';
import PostDetailPage from '../pages/PostDetail/PostDetailPage';
import Actions from '../../state/Actions';
import { AppStateContext } from '../../state/context';
import initialAppState from '../../state/models/initialAppState';
import staticDefaultPosts from '../../state/models/staticDefaultPosts';
import appStateReducer from '../../state/reducers/appStateReducer';
import './App.scss';

function App() {

    const [appState, dispatchAppState] = useReducer(appStateReducer, initialAppState);

    useEffect(() => {
        let entries;
        try {
            entries = JSON.parse(localStorage.getItem('entries'));
        } catch (e) {
            console.log(e);
        }

        if (!entries || !entries.length) {
            entries = staticDefaultPosts;
        }

        dispatchAppState({ type: Actions.SetEntries, payload: { entries: entries } });
    }, []);

    useEffect(() => {
        localStorage.setItem('entries', JSON.stringify(appState.entries));
    }, [appState.entries]);

    return (<AppStateContext.Provider value={{ appState, dispatchAppState }}>
        <Routes>
            <Route path='/' element={<LayoutPage />}>
                <Route index element={<HomePage />} />
                <Route path='post/:slug' element={<PostDetailPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='*' element={<Err404Page />} />
            </Route>
        </Routes>
    </AppStateContext.Provider>);
}

export default App;