import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const countWordLen = (text) => {
        let wordsArr = text.split(" ");
        let wordCount = wordsArr.length;

        if (wordsArr[wordsArr.length-1] === "") {
            wordCount--;
        }
        return wordCount;
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to UpperCase!","success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to LowerCase!", "success")
    }

    const handleClrTxt = () => {
        setText("");
        props.showAlert("Text has been cleared!","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode=='dark'? 'white':'black'}}>
            <h1>{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode=='dark'? 'grey':'white', color: props.mode=='dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="11"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-success mx-2" onClick={handleClrTxt}>Clear Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode=='dark'? 'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{countWordLen(text)} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : 'enter something in the textbox above to preview it here...'}</p>
        </div>
        </>
    )
}
