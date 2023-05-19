import React,{useState,useEffect } from 'react';
import Axios from 'axios'; 

const Sets=(props)=>{
	
	
	const [subjectSets, setSubjectSets] = useState([]);
	const [set, setSet] = useState({});
	
	
		
	 useEffect(() => {
		
		if(props.subject.subjectId >0){
			
          Axios.get("http://localhost:8080/admin/getSetsBySubjectId/"+props.subject.subjectId)
          .then(response => {
			  
             setSubjectSets(response.data);
						 
		   })
           .catch(error => {
			  
              console.log(error.response.data.error)
            })
		} 	
      },[props.subject]);
	  

		
	const optionList = subjectSets.map((subjectAndSets)=><option key={subjectAndSets.set.setId} value={subjectAndSets.set.setId}>{subjectAndSets.set.name}</option>);
	optionList.splice(0, 0, <option key="-1" value="-1">Select</option>);
	
	 useEffect(() => {
		    init();
	   },[]);
		
	const eventChangeHandler=(e)=>{
		
        //setSet({...set,setId:e.target.value,name:e.target.options[e.target.selectedIndex].text});
		if(props.itemHandler != undefined & e.target.value>0){
			const s= subjectSets.filter((s)=>{
				return s.set.setId ==e.target.value;
			});
			props.itemHandler(s[0]);
		}
		
    }
	
	function init(){
		
        		
		if(props.itemHandler != undefined){
			props.itemHandler(subjectSets[0]);
		}
		
    }
	


	
	return (
	
	       <div>
			  <select value={set.setId} onChange={eventChangeHandler} >
			   {optionList}
			  </select>
           </div>   
	);
}
export default Sets;