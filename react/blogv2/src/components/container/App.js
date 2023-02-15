import { useReducer } from 'react';
import appStateReducer from '../../state/reducers/appStateReducer';
import initialAppState from '../../state/models/initialAppState';
import { AppStateContext } from '../../state/context';
import LayoutPage from '../../pages/Layout/LayoutPage';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import PostDetailPage from '../../pages/PostDetail/PostDetailPage';
import LoginPage from '../../pages/Login/LoginPage';

function App() {

    const [appState, dispatchAppState] = useReducer(appStateReducer, initialAppState);

    return (<AppStateContext.Provider value={{ appState, dispatchAppState }}>
        <Routes>
            <Route path='/' element={<LayoutPage />}>
                <Route index element={<HomePage />} />
                <Route path='post/:slug' element={<PostDetailPage />} />
                <Route path='login' element={<LoginPage />} />
            </Route>
        </Routes>
    </AppStateContext.Provider>);
}

export default App;