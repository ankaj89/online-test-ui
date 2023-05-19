import React,{useState} from 'react';
import './CreateQuestion.css';
import Axios from 'axios';
import questiondata from './questiondata';
import SubjectList from '../subjects/subjectlist/SubjectList';
import Sets from '../sets/setslist/Sets';

const CreateQuestion =(props)=>{
	
	const [subject , setSubject] = useState({});
	const [options , setOptions] = useState([]);
	const [subjectSet , setSubjectSet] = useState();
	const [question , setQuestion] = useState({})
	const [answer , setAnswer] = useState({})
	const [answerOpts , setAnswerOpts] = useState({})
	const inputHandler = (e) =>{
		
		console.log(e);
		if(e.target.name =='option'){
			console.log(e.target.id);
		 setOptions([...options,{name:e.target.value,optionNumber:e.target.id}]);
		 setQuestion( {...question,options} );
		 console.log(options);
		}else{
		 setQuestion( {...question,name: e.target.value} );
		}
        
	   }

    const submitButton = (e) =>{
	console.log(JSON.stringify(question));
	Axios.post("http://localhost:8080/admin/saveQuestion", question).then((response) => {
    console.log(response.data);
	 alert("sucess");
      // Handle data
  })
  .catch((error) => {
    console.log(error);
	 alert(error);
  })
		 
		 alert(questiondata);
		 
		 
    }
	
	 const subjectHandler =(subject)=>{
		 setSubject(...subject,subject[0]);
    }
	 
	 const setsHandler =(s)=>{
		 setSubjectSet(s);
		 setQuestion( {...question,"subjectSet":s} );
		    
	 }
	 	const answerEventChangehandler=(e)=>{
			  
			  setAnswerOpts({...answerOpts,optionNumber:e.target.value});
			  
			const opt= options.filter((op)=>{
				
				return op.optionNumber === e.target.value;
			});
		
			 setQuestion({...question,answer:{option:opt[0]}});
		}
	 
	 const answerList = options.map((opt)=><option key={opt.optionNumber} value={opt.optionNumber}>{opt.optionNumber}</option>);
	 answerList.splice(0, 0, <option key="-1" value="-1">Select</option>);
	return (
	 
	
	
	  <div> 
	         
	          <SubjectList itemHandler={subjectHandler}/>
	          <Sets subject={subject} itemHandler={setsHandler}/>
				  
			  
	         <form>
			  <label> Question:- <textarea name="name" onChange={inputHandler} /></label>
			  <br/>
			  <label> Option1:- <input id="option1" name="option" type="text" onBlur ={inputHandler} /></label>
			  <label> Option2:- <input id="option2" name="option" type="text" onBlur ={inputHandler} /></label>
			  <br/>
			  <label> Option3:- <input id="option3" name="option" type="text" onBlur ={inputHandler} /></label>
			  <label> Option4:- <input id="option4" name="option" type="text" onBlur ={inputHandler} /></label>
			  <br/>
             <div>
			  <select value={answerOpts.optionNumber} onChange={answerEventChangehandler} >
			   {answerList}
			  </select>
           </div>   
            <button onClick={submitButton}>Submit Now</button>
		  </form>
	  </div>
	)
}

export default CreateQuestion;