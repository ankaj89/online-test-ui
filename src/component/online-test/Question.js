import React from 'react';
import OptionList from './OptionList';
import './Question.css';

const Question = (props)=>{
	
	return (
	  <div className="container">
	  <span className="question"> {props.question.name}</span>
	     <OptionList options={props.question.options} questionId={props.question.id}/>
	  </div>
	)
	
}
export default Question;