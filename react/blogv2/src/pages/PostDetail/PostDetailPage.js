import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { AppStateContext } from "../../state/context";

function PostDetailPage() {
    const [post, setPost] = useState()
    const { slug } = useParams();
    const { appState } = useContext(AppStateContext);

    useEffect(() => {
        setPost(appState.entries.find(e => e.slug === slug));
    }, [slug, appState.entries])


    return (
        <div className="PostDetail">
            {post ?
                <div className="PostDetail__post">
                    <div className="PostDetail__title">{post.title}</div>
                    <div className="PostDetail__content">{post.content}</div>
                    <div className="PostDetail__author">{post.author}</div>
                    <div className="PostDetail__date">{post.date}</div>
                </div>
                :
                <div className="PostDetail__error">Post not found</div>
            }
            <div className="PostDetail__HomeLink">
                <Link to='/'>Back to home</Link>
            </div>
        </div>
    )
}

export default PostDetailPage