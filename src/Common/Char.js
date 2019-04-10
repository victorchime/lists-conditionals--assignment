import React from 'react';

const charComponent = (props) => {
    const charComponentStyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }

    return (
        <div onClick={props.onClick} style={charComponentStyle}>
            <p>{props.initialInputFieldChar}</p>
        </div>
    );
};

export default charComponent;