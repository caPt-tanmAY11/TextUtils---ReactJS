import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        let capWord = lower.charAt(0).toUpperCase() + lower.slice(1);
        return capWord;
    }

    return (
        props.alert && <div>
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}
