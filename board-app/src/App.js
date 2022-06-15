import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ReadBoardComponent from './components/ReadBoardComponent';
import JoinMemberComponent from './components/member/JoinMemberComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ReadStudentComponent from './components/ReadStudentComponent';
import ListStudentComponent from './components/ListStudentComponent';
import Home from './Home';

function App() {
  return (
    <div> 
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path="/" exact component = {Home}></Route>
              <Route path = "/board" component = {ListBoardComponent}></Route>
              <Route path = "/create-board/:comId" component = {CreateBoardComponent}></Route>
              <Route path = "/read-board/:comId" component = {ReadBoardComponent}></Route>
              <Route path = "/member-join" component = {JoinMemberComponent}></Route>
              <Route path = "/createstu-board/:studentId" component = {CreateStudentComponent}></Route>
              <Route path = "/readstu-board/:studentId" component = {ReadStudentComponent}></Route>
              <Route path = "/student" component = {ListStudentComponent}></Route>
            </Switch>
          </div>

          
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
