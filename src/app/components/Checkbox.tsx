import * as React from 'react';

export default function Checkbox(info) {
    let title = '';
    if (info.title) {
        title = info.title;
    }

    let check = (e) => {
        if (e.target.checked) {
            info.change('Verdadeiro');
        } else {
            info.change('Falso');
        }
    };

    return (
        <label className="checkbox">
            <input
                type="checkbox"
                name="info.name"
                title={title}
                onChange={(e) => {
                    check(e);
                }}
            ></input>
            {info.label}
        </label>
    );
}
