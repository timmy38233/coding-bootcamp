import { Link } from 'react-router-dom';
import './Post.scss';

function Post(props) {
    const { entry, isLoggedIn, setPostEditing, theme } = props;

    return (
        <div className={`Post Post--${theme}`}>
            <Link to={`post/${entry.slug}`} className="Post__title">{entry.title}</Link>
            <div className="Post__content">{entry.content.length > 300 ? entry.content.substring(0, 300) + '...' : entry.content}</div>
            <div className="Post__author">{entry.author}</div>
            <div className="Post__date">{entry.date}</div>
            {isLoggedIn ? (
                <button className="Post__edit" onClick={(e) => setPostEditing(entry)}>Edit</button>
            ) : (
                ''
            )}
        </div>
    );
}

export default Post;
