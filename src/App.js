import logo from './logo.svg';
import './App.css';
import OnlineTestComponent from './component/online-test/OnlineTestComponent';
import CreateQuestion from './component/admin/question/CreateQuestion';
import SubjectList from './component/admin/subjects/subjectlist/SubjectList';
import CreateSubject from './component/admin/subjects/subjectcreate/CreateSubject';
import UpdateSubject from './component/admin/subjects/subjectupdate/UpdateSubject';
import SetsList from './component/admin/sets/setslist/SetsList';
import UpdateSets from './component/admin/sets/setsupdate/UpdateSets';
import CreateSets from './component/admin/sets/setscreate/CreateSets';

function App() {
  return (
    <div className="App">
     <CreateQuestion/>
    </div>
  );
}

export default App;
