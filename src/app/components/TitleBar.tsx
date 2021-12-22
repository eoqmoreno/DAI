import * as React from 'react';
import '../styles/ui.css';

export default function TitleBar({text}) {
    return (
        <div>
            <h1 className="title">{text}</h1>
            <hr></hr>
        </div>
    );
}
