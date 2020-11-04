import React, { useState } from 'react';
import Task from './components/Task';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ input, setInput ] = useState("");
  const [ tasks, setTasks ] = useState([]);

  const handleAddTask = e => {
    e.preventDefault();
    let t = {
      title : input,
      isCompleted : false
    }
    setTasks([...tasks,t])
    setInput("")
  }

  const handleToggleCheck = (e, idx) => {
    let t = tasks[idx];
    t.isCompleted = !t.isCompleted;
    setTasks([...tasks.slice(0,idx),t,...tasks.slice(idx+1)]);
  }

  const handleDestroyTask = (e, idx) => {
    setTasks([...tasks.slice(0, idx),...tasks.slice(idx + 1)])
  }  

  return (
    <div className="App">
      <form onSubmit={ handleAddTask } className="mx-auto my-5 col-3">
        <h2 className="text-center">Add A Task:</h2>
        <div className="form-group d-flex">
          <input 
            type="text" 
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <input type="submit" className="btn btn-secondary btn-outline-dark" value="Add"/>
        </div>
        
      </form>
      <div className="">
        {
          tasks.map(( t, i ) => {
              return <Task
                        idx={i}
                        handleToggleCheck={handleToggleCheck}
                        task={t}
                        key={i}
                        handleDestroyTask={handleDestroyTask}
                    />
          })
        }
      </div>

    </div>
  );
}

export default App;
