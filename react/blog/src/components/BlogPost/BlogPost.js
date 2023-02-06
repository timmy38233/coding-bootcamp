import './BlogPost.css';

function BlogPost(props) {
    const { postStructure, post, editEntry } = props;

    const editPost = (e, i) => {
        e.type = 'form';
        editEntry(e, i);
    };

    return (
        <div className={props.className}>
            {postStructure.map((e, i) =>
                e.attrHidden ? (
                    ''
                ) : (
                    <span key={i} className={`Post__${e.attrName}`} >{post[e.attrName] || ''}</span>
                )
            )}
            <span className="Post__edit" onClick={e => editPost(post, post.index)}>Edit</span>
        </div>
    );
}

export default BlogPost;