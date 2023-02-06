import { useState } from 'react';

import BlogPost from '../BlogPost/BlogPost';
import Form from '../Form/Form';

import './Blog.css';

function Blog(props) {
    const postStructure = [
        { attrName: 'title', attrType: 'text', attrPlaceholder: 'Title', attrHidden: false, attrRequired: true },
        { attrName: 'content', attrType: 'longText', attrPlaceholder: 'Content', attrHidden: false, attrRequired: true },
        { attrName: 'author', attrType: 'text', attrPlaceholder: 'Author', attrHidden: false, attrRequired: true },
        { attrName: 'date', attrType: 'date', attrHidden: false, attrRequired: false },
        { attrName: 'type', attrType: 'text', attrDefault: 'post', attrHidden: true },
    ];

    const [entries, setEntries] = useState([
        {
            title: 'My first blog post',
            content: 'This is the first post on my new blog. Hope you like it :)',
            author: 'Tim',
            date: '2023-02-02',
            type: 'post',
        },
        {
            title: 'SECOND BLOG POST',
            content:
                "There also is a second post on this blog. You're reading its contents right now!",
            author: 'Tim',
            date: '2023-02-03',
            type: 'post',
        },
    ]);

    const editEntry = (e, i) => {
        const newEntries = [...entries];
        newEntries[i] = e;
        setEntries(newEntries);
    }


    return (
        <div className="Blog">
            {[...entries, { type: 'form' }].map((e, i) =>
                e.type === 'post' ? (
                    <BlogPost className="BlogEntry" postStructure={postStructure} post={{ ...e, index: i }} editEntry={editEntry} key={i} />
                ) : e.type === 'form' ? (
                    <Form className="BlogEntry" postStructure={postStructure} post={{ ...e, index: i }} editEntry={editEntry} key={i} />
                ) : (
                    <></>
                )
            )}
        </div>
    );
}

export default Blog;
