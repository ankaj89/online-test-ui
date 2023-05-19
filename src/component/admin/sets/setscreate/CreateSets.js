import React,{useState} from 'react';
import Axios from 'axios';
import SetsList from '../setslist/SetsList';

const CreateSets =()=>{
	
	 const [sets , setSets] = useState({setId:3})
	 const inputsHandler = (e) =>{
        setSets( {...sets,[e.target.name]: e.target.value} );
	   }
	   
	    const submitButton = (e) =>{
	
			Axios.post("http://localhost:8080/admin/saveSets", sets).then((response) => {
             console.log(response.data);
	         alert("sucess");
           // Handle data
          })
        .catch((error) => {
            console.log(error);
	        alert(error);
        })
		 
		 alert(sets);
		 
	    }	 
  
	return (
	<div>
	       <SetsList/>
	       <form>
			  <label> Sets:- <input type="text" name="name" onChange={inputsHandler} /></label>
			    <button onClick={submitButton}>Save Now</button>
		  </form>
	</div>
	
	);

}
 export default CreateSets;