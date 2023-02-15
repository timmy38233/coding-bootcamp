import { useReducer } from 'react';
import appStateReducer from '../../state/reducers/appStateReducer';
import initialAppState from '../../state/models/initialAppState';
import { AppStateContext } from '../../state/context';

import Header from './Header/Header';
import Blog from './Blog/Blog';
import Footer from '../components/Footer/Footer';

import './App.scss';

function App() {

    const [appState, dispatchAppState] = useReducer(appStateReducer, initialAppState);

    return (
        <div className="App">
            <AppStateContext.Provider value={{ appState, dispatchAppState }}>
                <Header theme={appState.colorScheme.name} />
                <Blog />
                <Footer theme={appState.colorScheme.name} />
            </AppStateContext.Provider>
        </div>
    );
}

export default App;