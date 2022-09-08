import "./App.css";
import ComponenteA from "./components/container/ComponenteA";
// import TaskListComponent from "./components/container/task-list";
// import Greeting from "./components/pure/Greeting";

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        {/* <Greeting />
        <TaskListComponent/> */}
        <ComponenteA/>
      </header>
    </div>
  );
}

export default App;
