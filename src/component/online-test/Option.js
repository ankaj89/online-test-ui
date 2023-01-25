import React from 'react';

const Option = (props)=>{
	
	return (
	   <span><input type="radio" name={props.questionId} value={props.option.id}/> <label>{props.option.name}</label></span>
	  
	)
	
}
export default Option;