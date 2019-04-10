import React from 'react';

const validator = (props) => {

    let outputText = null;

    if (props.inputTextValue.length >= 5 ) {
        outputText = "Text long enough"
    }else{
        outputText = "Text too short"
    }

    return (
        <div>
            <p>{outputText}</p>
        </div>
    );
};

export default validator;