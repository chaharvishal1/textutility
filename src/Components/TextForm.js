import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upper case", "success");
  }  

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lower case", "success");
  }  

  const handleUpChange = (event)=>{
    setText(event.target.value);
  }  
  
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Clear all text", "warning");
  }  

  const handleCopyClick = ()=>{
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Convert to lower case", "primary");
  }  

  const handleRemoveClick = ()=>{
    let newText = text.replace(/  +/g, ' ');
    setText(newText);
  } 

  const [text, setText] = useState('');
    
  return (
    <section>
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h2 className="mt-4">{props.headtitle}</h2>
        <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
            <br/>
            <div className='d-flex justify-content-around'>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary" onClick={handleRemoveClick}>Remove Extra Space</button>
            </div>
        </div>
        <div className='mt-4'>
          <h3>Summery</h3>
          <p>No of words is : {text.length < 1 ? "0" : (text.trim().split(/\s+/).length)} and No. of character is : {text.length}</p>
          <h2>Preview is :</h2>
          <p>{text.length > 0 ? text : 'Enter some text in input field'}</p>
        </div>
      </div>
    </section>
  )
}
