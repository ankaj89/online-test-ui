import React from 'react';
import Option from './Option';
import './OptionList.css';

const OptionList = (props)=>{
	
	const optionList = props.options;
		
	const optionComponent = optionList.map((opt) => <Option key={opt.id} option={opt} questionId={props.questionId} />);
	
	return (
	<div className="option-container">
		<div className="group">
		  <div className="row">
			<div className="column">(A)</div>
			<div className="column">{optionComponent[0]}</div>
		  </div>
		 <div className="row">
			<div className="column">(B)</div>
			<div className="column">{optionComponent[1]}</div>
		  </div>
		 </div>
		 <div className="group">
		  <div className="row">
			<div className="column">(C)</div>
			<div className="column">{optionComponent[2]}</div>
		  </div>
		  <div className="row">
			<div className="column">(D)</div>
			<div className="column">{optionComponent[3]}</div>
		  </div>
		</div>
    </div>
	)
	
}
export default OptionList;