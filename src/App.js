import "./App.css";
import { ComponenteConContexto } from "./hooks/Ejemplo3";
//import Ejemplo1 from "./hooks/Ejemplo1";
//import Ejemplo2 from "./hooks/Ejemplo2";
//import ComponenteA from "./components/container/ComponenteA";
// import TaskListComponent from "./components/container/task-list";
// import Greeting from "./components/pure/Greeting";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">  
        <ComponenteConContexto/>
      </header>
    </div>
  );
}

export default App;
