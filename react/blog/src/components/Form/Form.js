import { useState } from 'react';

import './Form.css';

function Form(props) {
    const { postStructure, post, editEntry } = props;

    const [formData, setFormData] = useState(post);

    const saveValue = (e) => {
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    };
    const saveEntry = (e) => {
        e.preventDefault();
        formData.type = 'post';
        editEntry(formData, post.index);
    };

    return (
        <div className={props.className}>
            <form onSubmit={saveEntry}>
                {postStructure.map((e, i) =>
                    e.attrHidden ? (
                        ''
                    ) : e.attrType == 'longText' ? (
                        <textarea
                            key={i}
                            className={`Form__${e.attrName}`}
                            name={e.attrName}
                            placeholder={e.attrPlaceholder || ''}
                            defaultValue={post[e.attrName] || ''}
                            onChange={saveValue}
                            required={e.attrRequired || false}
                        />
                    ) : (
                        <input
                            key={i}
                            className={`Form__${e.attrName}`}
                            name={e.attrName}
                            type={e.attrType}
                            placeholder={e.attrPlaceholder || ''}
                            defaultValue={post[e.attrName] || ''}
                            onChange={saveValue}
                            required={e.attrRequired || false}
                        />
                    )
                )}
                <input type="submit" className="Form__save" value="Save" />
            </form>
        </div>
    );
}

export default Form;
