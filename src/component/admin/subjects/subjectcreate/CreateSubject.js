import React,{useState} from 'react';
import Axios from 'axios';
import SubjectList from '../subjectlist/SubjectList';

const CreateSubject =()=>{
	
	 const [subject , setSubject] = useState({subjectId:3})
	 const inputsHandler = (e) =>{
        setSubject( {...subject,[e.target.name]: e.target.value} );
	   }
	   
	    const submitButton = (e) =>{
	
			Axios.post("http://localhost:8080/admin/saveSubject", subject).then((response) => {
             console.log(response.data);
	         alert("sucess");
           // Handle data
          })
        .catch((error) => {
            console.log(error);
	        alert(error);
        })
		 
		 alert(subject);
		 
	    }	 
  
	return (
	<div>
	       <SubjectList/>
	       <form>
			  <label> Subject:- <input type="text" name="name" onChange={inputsHandler} /></label>
			    <button onClick={submitButton}>Submit Now</button>
		  </form>
	</div>
	
	);

}
 export default CreateSubject;