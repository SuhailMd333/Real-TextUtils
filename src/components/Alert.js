import React from 'react'

export default function Alert(props) {
    // This Function Capitalize the first letter upperCase


const Capitalize  = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}


  return (
   
    
    <div style={{height:'50px'}}>
                  {  props.alert &&
                 <div className={`alert alert-${props.alert.type}`}role="alert">

                 <strong>  { Capitalize(props.alert.type)} : {props.alert.msg} </strong> 
                 </div>
                 }
    </div>
            
  )
}
