//import Greeting from "./components/pure/Greeting";
//import GreetingStyled from "./components/pure/GreetingStyled";
//import { ComponenteConContexto } from "./hooks/Ejemplo3";
//import Ejemplo1 from "./hooks/Ejemplo1";
//import Ejemplo2 from "./hooks/Ejemplo2";
//import ComponenteA from "./components/container/ComponenteA";
//import Father from "./components/container/Father";
import TaskListComponent from "./components/container/task-list";
// import Greeting from "./components/pure/Greeting";
import './App.css';
//import LoginFormFormik from './components/pure/forms/LoginFormFormik';
//import RegisterFormFormik from './components/pure/forms/RegisterFormFormik';
//import Square from './components/pure/Square';
//import OptionalRender from './components/pure/OptionalRender';
//import ContactList from "./components/container/ContactList";

function App() {
  
  return (
    <div>  
        <TaskListComponent/> 
        {/* <RegisterFormFormik></RegisterFormFormik>  */}
    </div>
  );
}

export default App;
