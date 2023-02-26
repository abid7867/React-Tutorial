import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase to be convert ");
    setText("this is update text" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);

  };
const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
}
const handleClearClick = () => {
    let newText ="";
    setText(newText);
}



const handleOnChange = (event) => {
    console.log("uppercase to be convert ");
    setText(event.target.value);
  };

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const [text, setText] = useState("");

  // text = " enter the new text " wrong way to change  the state
  // setText(" this is right way to change the state");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control my-4"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>

        convert to upperCase
      </button>

      
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>

convert to LowerCase
</button>

<button className="btn btn-primary mx-2" onClick={handleClearClick}>
All Clear Text

</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
handleExtraSpace

</button>
    </div>
    <div className="container">
        <h2>Your text Summary</h2>
        <p>{text.split("").length}Word And {text.length}Character</p>
        <p>{0.008 * text.split("").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
