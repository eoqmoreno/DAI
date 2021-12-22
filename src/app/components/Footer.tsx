import * as React from 'react';
import BackButton from './BackButton';
import SucessButton from './SucessButton';

export default function Footer(info) {
    return (
        <div className="footer">
            <BackButton></BackButton>
            {info.complete && <SucessButton click={info.click}></SucessButton>}
        </div>
    );
}
