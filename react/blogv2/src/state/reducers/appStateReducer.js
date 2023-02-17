import { v4 as uuidv4 } from 'uuid';
import generateSlug from '../../util/generateSlug';

import Actions from '../Actions';


export default function appStateReducer(state, action) {
    switch (action.type) {
        case Actions.SetEntries:
            return {
                ...state,
                entries: action.payload.entries.map((e, i, entries) => {
                    let modifiedEntry = !e.id ? { ...e, id: uuidv4() } : e;
                    modifiedEntry = !modifiedEntry.slug ? { ...modifiedEntry, slug: generateSlug(entries, modifiedEntry.title) } : modifiedEntry;
                    return modifiedEntry;
                }
                ),
            };
        case Actions.AddEntries: {
            // Appends the entries from the payload to the appState.entries object. Generates a uuid for new entries from payload, if not already given.
            return {
                ...state,
                entries: [
                    ...state.entries,
                    ...action.payload.entries.map((e, i, entries) => {
                        let modifiedEntry = !e.id ? { ...e, id: uuidv4() } : e;
                        modifiedEntry = !modifiedEntry.slug ? { ...modifiedEntry, slug: generateSlug(entries, modifiedEntry.title) } : modifiedEntry;
                        return modifiedEntry;
                    }
                    ),
                ],
            };
        }
        case Actions.EditEntry:
            return {
                ...state,
                entries: [
                    ...state.entries.map((e, i, entries) =>
                        e.id === action.payload.entry.id ? { ...action.payload.entry, slug: generateSlug(entries, action.payload.entry.title) } : e
                    ),
                ],
            };
        case Actions.RemoveEntry:
            return;

        case Actions.SetPostEditing:
            return { ...state, postToEdit: action.payload.entry };

        case Actions.SetFilteredEntries:
            return { ...state, filteredEntries: action.payload.entries };

        case Actions.SetColorScheme:
            return { ...state, colorScheme: action.payload.colorScheme };

        case Actions.UserLogin:
            return { ...state, login: action.payload.login };
        default:
            throw Error('Unknown action: ' + action.type);
    }
}
