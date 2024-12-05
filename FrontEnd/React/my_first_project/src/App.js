import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import DevaFuncComp from './task/DevaFuncComp';
import ClassComp from './components/ClassComponent';
import TaskComp from './task/TaskClassComp';
import EventHandler from './components/EventComponent';
import MyStateComp from './components/MyStateComp';
import Incrementer from './task/CounterTask';
import ConditionalComp from './components/ConditionalComp';
import CssComp from './components/CssComp';
import ParentComp from './task/ParentComp';
import CounterComp from './task/CounterComp';
import MyImageComp from './components/MyImageComp';
import UserComponent from './task/UserComponent';
import ErrorBoundaryComponent from './task/ErrorBoundaryComponent';
import VirtualDom from './components/VirtualDom';
import EmpDetails from './task/EmployeeComp';
import ToggleImageComp from './task/ToggleImageComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    {/* <h1>Welcome you all!</h1> */}
    {/* <FuncComp fname="deva" frname="sanjay"/>
    <DevaFuncComp fname="Deva" lname="Nathan" salary={997977} gender="male"  />
    <ClassComp fname="deva" frname="sanjay"/>
    <TaskComp fname="Deva" lname="Nathan" salary={997977} gender="male"/>
    <EventHandler/>
    <MyStateComp/> */}
    {/* <Incrementer/> */}
    {/* <ConditionalComp/> */}
    {/* <CssComp/> */}
    {/* <ParentComp empNameProps="Deva" empSalaryProps={20000}/> */}
    {/* <CounterComp/> */}
    {/* <MyImageComp/> */}
    {/* <ErrorBoundaryComponent>
    <UserComponent fname="sanjay"/>
    </ErrorBoundaryComponent>
    <ErrorBoundaryComponent>
    <UserComponent fname="deva"/>
    </ErrorBoundaryComponent>
    <ErrorBoundaryComponent>
    <UserComponent fname="kishore"/>
    </ErrorBoundaryComponent>
    <ErrorBoundaryComponent>
    <UserComponent fname="perumal"/>
    </ErrorBoundaryComponent>
    <ErrorBoundaryComponent>
    <UserComponent fname="tarun"/>
    </ErrorBoundaryComponent> */}
    {/* <VirtualDom/> */}
    {/* <EmpDetails/> */}
    {/* <ToggleImageComp/> */}
    </div>
  );
}

export default App;
