import { useContext, useEffect } from 'react';
import Actions from '../../../state/Actions';
import { AppStateContext } from '../../../state/context';
import staticDefaultPosts from '../../../state/models/staticDefaultPosts';

import Searchbar from '../Searchbar/Searchbar';
import Post from '../../components/Post/Post';
import PostForm from '../PostForm/PostForm';

import './Blog.scss';

function Blog() {
    const { appState, dispatchAppState } = useContext(AppStateContext);

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

    return (
        <div className={`Blog Blog--${appState.colorScheme.name}`}>
            <div className="Blog__Search">
                <Searchbar />
            </div>
            <div className="Blog__List">
                {appState.filteredEntries.map((entry, i) => (
                    <Post
                        entry={entry}
                        isLoggedIn={appState.login.isLoggedIn}
                        setPostEditing={(post) => dispatchAppState({ type: Actions.SetPostEditing, payload: { entry: post }, })}
                        theme={appState.colorScheme.name}
                        key={entry.id}
                    />
                ))}

            </div>
            {appState.login.isLoggedIn ? (
                <PostForm
                    postToEdit={appState.postToEdit}
                    setPostEditing={(e) => dispatchAppState({ type: Actions.SetPostEditing, payload: { entry: e } })}
                    savePost={(e) =>
                        e.id
                            ? dispatchAppState({ type: Actions.EditEntry, payload: { entry: e } })
                            : dispatchAppState({ type: Actions.AddEntries, payload: { entries: [e] }, })
                    }
                    theme={appState.colorScheme.name}
                />
            ) : (
                ''
            )}
        </div>
    );
}

export default Blog;
