import { useEffect, useState } from 'react';

import BlogPost from '../BlogPost/BlogPost';
import Form from '../Form/Form';

import './Blog.css';

function Blog(props) {
    const postStructure = [
        {
            attrName: 'title',
            attrType: 'text',
            attrPlaceholder: 'Title',
            attrHidden: false,
            attrRequired: true,
        },
        {
            attrName: 'content',
            attrType: 'longText',
            attrPlaceholder: 'Content',
            attrHidden: false,
            attrRequired: true,
        },
        {
            attrName: 'author',
            attrType: 'text',
            attrPlaceholder: 'Author',
            attrHidden: false,
            attrRequired: true,
        },
        { attrName: 'date', attrType: 'date', attrHidden: false, attrRequired: false },
        { attrName: 'type', attrType: 'text', attrHidden: true },
    ];

    const [entries, setEntries] = useState(() => {
        const entries = JSON.parse(localStorage.getItem('entries'));
        if (!entries) {
            return [
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
            ];
        }
        if (entries.length) {
            return entries;
        }
    });

    useEffect(() => {
        localStorage.setItem('entries', JSON.stringify(entries));
    }, [entries]);

    const editEntry = (e, i) => {
        if (!props.loginState.isLoggedIn) return
        
        const newEntries = [...entries];
        newEntries[i] = e;
        setEntries(newEntries);
    };

    return (
        <div className="Blog">
            {[...entries, { type: 'form' }].map((e, i) =>
                e.type === 'post' ? (
                    <BlogPost
                        className="BlogEntry"
                        postStructure={postStructure}
                        post={{ ...e, index: i }}
                        editEntry={editEntry}
                        key={i}
                        canEdit={props.loginState.isLoggedIn}
                    />
                ) : e.type === 'form' && props.loginState.isLoggedIn ? (
                    <Form
                        className="BlogEntry"
                        postStructure={postStructure}
                        post={{ ...e, index: i }}
                        editEntry={editEntry}
                        key={i}
                        defaultAuthor={props.loginState.username || ''}
                    />
                ) : (
                    ''
                )
            )}
        </div>
    );
}

export default Blog;
