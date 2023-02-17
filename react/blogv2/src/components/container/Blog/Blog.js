import { useContext } from 'react';
import Actions from '../../../state/Actions';
import { AppStateContext } from '../../../state/context';
import Post from '../../components/Post/Post';
import PostForm from '../PostForm/PostForm';
import Searchbar from '../Searchbar/Searchbar';
import './Blog.scss';

function Blog() {
    const { appState, dispatchAppState } = useContext(AppStateContext);

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
