import * as React from 'react';

export default function Input(info) {
    let title = '';
    if (info.title) {
        title = info.title;
    }
    return (
        <input
            type="text"
            placeholder={info.placeholder}
            required={info.required}
            title={title}
            name={info.name}
            onChange={(a) => {
                info.change(a.target.value);
            }}
        ></input>
    );
}
