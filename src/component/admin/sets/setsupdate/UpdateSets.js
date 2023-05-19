import React,{useState} from 'react';
import Axios from 'axios';
import SetsList from '../setslist/SetsList';

const UpdateSets =()=>{
	
	 const [sets , setSets] = useState({})
	
	const inputsHandler = (e) =>{
        setSets( {...sets,[e.target.name]: e.target.value} );
	   }
	   
	    const submitButton = (e) =>{
	
			Axios.put("http://localhost:8080/admin/updateSets", sets).then((response) => {
             console.log(response.data);
	         alert("success");
        })
        .catch((error) => {
            console.log(error);
	        alert(error);
        })
		 
		 alert(sets);
		 
	    }
        
        const setsHandler =(s)=>{
		 setSets( s[0] );
        }
  
	return (
	<div>
	       <SetsList itemHandler={setsHandler}/>
	       <form>
			  <label> Sets:- <input type="text" name="name" value={sets.name} onChange={inputsHandler} /></label>
			    <button onClick={submitButton}>Update Now</button>
		  </form>
	</div>
	
	);

}
 export default UpdateSets;