import React,{useState,useEffect } from 'react';
import Axios from 'axios'; 

const SubjectList=(props)=>{
	
	const [subjectsList, setSubjectsList] = useState([]);
	const [subject, setSubject] = useState({});
	
	 useEffect(() => {
         Axios.get("http://localhost:8080/admin/getSubject")
          .then(response => {
            setSubjectsList(...subjectsList,response.data);
            })
           .catch(error => {
              console.log(error.response.data.error)
            })          
      },[]);
		
	const eventChangehandler=(e)=>{
		
	
		
        setSubject((prevState)=>({...subject,subjectId:e.target.value,name:e.target.options[e.target.selectedIndex].text}));
		if(props.itemHandler != undefined & e.target.value>0){
			const s= subjectsList.filter((subject)=>{
				return subject.subjectId ==e.target.value;
			});
			props.itemHandler(s);
		}
		
    }
	
	const optionList = subjectsList.map((subject)=><option key={subject.subjectId} value={subject.subjectId}>{subject.name}</option>);
	optionList.splice(0, 0, <option key="-1" value="-1">Select</option>);
	
	
	return (
	
	       <div>
			  <select value={subject.subjectId} onChange={eventChangehandler} >
			   {optionList}
			  </select>
           </div>   
	);
}
export default SubjectList;