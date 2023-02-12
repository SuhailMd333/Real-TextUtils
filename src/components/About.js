import React,{useState} from "react";


export default function About(props) {
let myStyle = {
  color: props.mode === 'dark'?'#d1d1d1':'black',
  backgroundColor: props.mode === 'dark'?'#425c76':'white'
}
  

  


  return (
    <div>
      <div className="container" style={myStyle}>
        <h1 className="mx-3 my-3"> About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
               style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               Want to know our favorite part about his page? Why we created it?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body"  style={myStyle}>
                <strong> Text-Utils.com was born in 2014 as part of a learning exercise to practice our programming skills. In almost 10 years of existence, we continue to refactor, redesign, improve, and implement new features. And we could say that we learned a lot since we started, by including the experience here and in the overall development world. As long our spirit allows us to continue learning and coding, we will continue improving this website</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
               style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
          What does it do?
              </button>
            </h2>
            <div
             style={myStyle}
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={myStyle}>
                <strong>Text-Utils.com is described as a central repository of tools for helping with developer activities. It includes tools such as for formatting JSON, XML, HTML, CSS, JavaScript, multiple text tools such as to convert case, remove accents, line breaks, extra space, also regular expressions tools for extracting elements from text such as IPs and e-mail addresses. And this is actually only a subset of what we have.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button  style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Why is it different?
              </button>
            </h2>
            <div
             style={myStyle}
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={myStyle}>
                <strong>Fast, secure and easy. This is a summary of what Text-Utils.com is. All we design is intended to be fast, really fast. Other than that, all our utilities are client-side, meaning your data will not go through our servers to be processed. Your data is secure. Finally, Text-Utils.com is also quite easy. Everything can be found on the page very quickly, in just a few clicks.</strong>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
