import React,{useState} from 'react';
import './CreateQuestion.css';

const CreateQuestion =(props)=>{
	
	 const [inputField , setInputField] = useState({
        question: '',
        option1: '',
		option2: '',
		option3: '',
        option4: '',
		result:''
    })
	const inputsHandler = (e) =>{
        setInputField( {...inputField,[e.target.name]: e.target.value} );
	   }

    const submitButton = (e) =>{
		
		 
		 alert(inputField.result);
		  e.preventDefault();
		 
    }
	return (
	
	/*<div className="test"> {inputField.question} </div>  */
	  <div> 
	           <div className="test"> {inputField.question} </div> 
	         <form>
			  <label> Question:- <textarea name="question" onChange={inputsHandler} /></label>
			  <br/>
			  <label> Option1:- <input name="option1" type="text" onChange={inputsHandler} /></label>
			  <label> Option2:- <input name="option2" type="text" onChange={inputsHandler} /></label>
			  <br/>
			  <label> Option3:- <input name="option3" type="text" onChange={inputsHandler} /></label>
			  <label> Option4:- <input name="option4" type="text" onChange={inputsHandler} /></label>
			  <br/>

            <button onClick={submitButton}>Submit Now</button>
		  </form>
	  </div>
	)
}

export default CreateQuestion;