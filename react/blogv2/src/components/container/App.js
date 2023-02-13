import { useReducer, createContext } from 'react';
import appStateReducer from '../../state/reducers/appStateReducer';
import initialAppState from '../../state/initialAppState';
import { AppStateContext } from '../../state/context';

import Header from './Header/Header';
import Blog from './Blog/Blog';

function App() {

    const [appState, dispatchAppState] = useReducer(appStateReducer, initialAppState);

    return (
        <AppStateContext.Provider value={{ appState, dispatchAppState }}>
            <div className="App">
                <Header />
                <Blog />
            </div>
        </AppStateContext.Provider>
    );
}

export default App;