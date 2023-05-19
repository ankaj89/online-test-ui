import React,{useState} from 'react';
import Axios from 'axios';
import SubjectList from '../subjectlist/SubjectList';

const UpdateSubject =()=>{
	
	 const [subject , setSubject] = useState({})
	 const inputsHandler = (e) =>{
        setSubject( {...subject,[e.target.name]: e.target.value} );
	   }
	   
	    const submitButton = (e) =>{
	
			Axios.put("http://localhost:8080/admin/updateSubject", subject).then((response) => {
             console.log(response.data);
	         alert("success");
        })
        .catch((error) => {
            console.log(error);
	        alert(error);
        })
		 
		 alert(subject);
		 
	    }
        const subjectHandler =(s)=>{
		 setSubject( s[0] );
        }
  
	return (
	<div>
	       <SubjectList itemHandler={subjectHandler}/>
	       <form>
			  <label> Subject:- <input type="text" name="name" value={subject.name} onChange={inputsHandler} /></label>
			    <button onClick={submitButton}>Update Now</button>
		  </form>
	</div>
	
	);

}
 export default UpdateSubject;