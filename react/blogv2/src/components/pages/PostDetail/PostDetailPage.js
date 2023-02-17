import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppStateContext } from '../../../state/context';
import './PostDetailPage.scss';

function PostDetailPage() {
    const [post, setPost] = useState();
    const { slug } = useParams();
    const { appState } = useContext(AppStateContext);

    useEffect(() => {
        setPost(appState.entries.find((e) => e.slug === slug));
    }, [slug, appState.entries]);

    return (
        <div className={`PostDetail PostDetail--${appState.colorScheme.name}`}>
            {post ? (
                <div className="PostDetail__Post">
                    <div className="PostDetail__Title">{post.title}</div>
                    <div className="PostDetail__Content">{post.content}</div>
                    <div className="PostDetail__Meta">
                        <span className="PostDetail__Meta__Author">{post.author}</span> on{' '}
                        <span className="PostDetail__Meta__Date">{post.date}</span>
                    </div>
                </div>
            ) : (
                <div className="PostDetail__error">Post not found</div>
            )}
            <div className="PostDetail__HomeLink">
                <Link to="/">Back to home</Link>
            </div>
        </div>
    );
}

export default PostDetailPage;
