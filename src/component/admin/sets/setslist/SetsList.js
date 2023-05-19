import React,{useState,useEffect } from 'react';
import Axios from 'axios'; 

const SetsList=(props)=>{
	
	const [setsList, setSetsList] = useState([]);
	const [sets, setSets] = useState({});
	
	 useEffect(() => {
         Axios.get("http://localhost:8080/admin/getSets")
          .then(response => {
            setSetsList(...setsList,response.data);
            })
           .catch(error => {
              console.log(error.response.data.error)
            })          
      },[]);
		
	const eventChangeHandler=(e)=>{
		
        setSets({...sets,setId:e.target.value,name:e.target.options[e.target.selectedIndex].text});
		
		if(props.itemHandler != undefined){
			const s= setsList.filter((s)=>{
				return s.setId ==e.target.value;
			});
			props.itemHandler(s);
		}
		
    }
	const optionList = setsList.map((sets)=><option key={sets.setId} value={sets.setId}>{sets.name}</option>);
	
	return (
	
	       <div>
			  <select value={sets.setId} onChange={eventChangeHandler} >
			   {optionList}
			  </select>
           </div>   
	);
}
export default SetsList;