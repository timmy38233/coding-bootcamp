import { useEffect, useState } from "react";

import './Form.scss';

function Form(props) {
    const { postToEdit, setPostEditing, savePost, theme } = props;
    const [formData, setFormData] = useState({ title: '', content: '', author: '', date: '' });

    useEffect(() => {
        setFormData(!!postToEdit ? { ...postToEdit } : { title: '', content: '', author: '', date: '' });
    }, [postToEdit]);

    const saveValue = (e) => {
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    }

    const submitForm = (e) => {
        e.preventDefault();
        savePost(formData);
        setPostEditing({ title: '', content: '', author: '', date: '' });
    }

    return (
        <div className={`Form Form--${theme}`}>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Title..." name="title" value={formData.title} onChange={saveValue} required />
                <textarea type="text" placeholder="Content..." name="content" value={formData.content} onChange={saveValue} required />
                <input type="text" placeholder="Author..." name="author" value={formData.author} onChange={saveValue} required />
                <input type="date" name="date" value={formData.date} onChange={saveValue} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default Form