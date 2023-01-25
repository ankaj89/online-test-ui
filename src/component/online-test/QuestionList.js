import React,{useState, useEffect} from 'react';
import Question from './Question';
import QuestionsData from './QuestionsData';

const QuestionList = (props)=>{
	
	const [questionList, setQuestionList] = useState([]);
	
	useEffect(() => {setQuestionList(QuestionsData)},[questionList]);
	
	const questionComponents = questionList.map((q) => <Question key={q.id}  question={q} />);
	
	return (
	  <div>
	   {questionComponents}
	  </div>
	)
	
}
export default QuestionList;