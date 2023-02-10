import React ,{useState}from 'react'

export default function Textform(props) {

    

// This function convert to Upper case
    const handleUpclick = () => {
        // console.log("it was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('success','Converted to UpperCase')
    }
     
     // This Function convert to Lower case
    const handleLoClick = () => {
   let   newText = text.toLowerCase();
      setText(newText)
      props.showAlert('success','Converted to LowerCase')

    }

    // This Function is used to Clear the Text 
const handleClearClick = () =>{

  setText("")
  props.showAlert('success','Text Was Cleared')

}
// This Function is to copy the Text
const handleCopyText = () => {
let text = document.getElementById('myBox');
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert('success','Text Was Copied')

}

//  This Function works to Remove Extra spaces 

const handleRemoveSpace  = () => {

let newText = text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert('success','Extra Spaces Was Removed')
}
// This function is to change the event in the textbox 

function handleOnChange(event){
        // console.log("it was changed") 
        setText(event.target.value)
      }
      const [text,setText] = useState("Enter Text Here")

  return (
    <>
     <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
    <h3 className="heading my-3 mx-4"> Enter Text To Change Dynamically </h3>

<div className="mb-3 my-3 mx-5">
  
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#858687':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text}id="myBox" rows="10" cols="10"></textarea>
</div>
<div className="container">
   {/* container of buttons  */}
<button type="button" onClick={handleUpclick}  className={`btn btn-${props.mode==='light'?'dark':'primary' }`}>Change to Upper</button>

<button type="button" onClick={handleLoClick} className={`mx-2 btn btn-${props.mode==='light'?'dark':'primary' }`}>Change To Lower</button>

<button type="button" className={`mx-2 btn btn-${props.mode==='light'?'dark':'primary' }`} onClick={handleClearClick}>Clear Text</button>

<button type="button" className={`mx-2 btn btn-${props.mode==='light'?'dark':'primary' }`} onClick={handleCopyText} >Copy Text </button>

<button type="button" className={`mx-2 btn btn-${props.mode==='light'?'dark':'primary' }`} onClick={handleRemoveSpace}>Remove Extra Space</button>


</div>
{/* container of  summarry  */}
<div className="container">
  <h3 className="summary my-3"> Your text summary</h3>
  <p className="sum"> you typed {text.split(" ").length-1} Words and {text.length} Charaters</p>
  <p> {0.008 * text.split(" ").length} Minutes to read</p>
  <h3> Preview </h3>
  <p> { text.length>0 ? text :'Please Enter The Text To Preveiw '}</p>
</div>
    </div>

    </>
  )
  }
