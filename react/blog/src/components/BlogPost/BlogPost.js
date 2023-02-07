import './BlogPost.css';

function BlogPost(props) {
    const { postStructure, post, editEntry } = props;

    const editPost = (e, i) => {
        e.type = 'form';
        editEntry(e, i);
    };

    return (
        <div className={[props.className, `${props.className}--Post`].join(' ')}>
            {postStructure.map((e, i) =>
                e.attrHidden ? (
                    ''
                ) : (
                    <span key={i} className={`Entry__${e.attrName}`}>
                        {post[e.attrName] || ''}
                    </span>
                )
            )}
            {props.canEdit ? (
                <button className="Entry__edit" onClick={(e) => editPost(post, post.index)}>
                    Edit
                </button>
            ) : (
                <></>
            )}
        </div>
    );
}

export default BlogPost;
