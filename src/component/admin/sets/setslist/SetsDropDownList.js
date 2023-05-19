import React from 'react';

const SubjectDropDownList=(props)=>{
	
	const optionList =props.subjectsList.map((subject)=><option key={subject.subjectId} value={subject.subjectId}>{subject.name}</option>);
	
	return (
	       <div>
			  <select>
			    {optionList}
			  </select>
           </div>   
	);
}

export default SubjectDropDownList;