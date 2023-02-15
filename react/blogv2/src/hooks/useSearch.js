import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { AppStateContext } from '../state/context';
import Actions from '../state/Actions';


function useSearch(keys = ['title', 'content']) {
    const { appState, dispatchAppState } = useContext(AppStateContext);
    const [searchText, setSearchText] = useState('');

    // TODO: Use arguments to access state
    useEffect(() => {
        dispatchAppState({
            type: Actions.SetFilteredEntries,
            payload: {
                entries: appState.entries ? appState.entries.filter((e, i) => {
                    let found = false;
                    for (let j = 0; j < keys.length && !found; j++) {
                        // First check if element has the property for the current key defined, to eliminate .includes() call errors
                        found = e[keys[j]] ? e[keys[j]].includes(searchText) : false;
                    }
                    return found;
                }) : []
            }
        });
    }, [searchText, appState.entries, dispatchAppState]);

    return [setSearchText];
}

export default useSearch;