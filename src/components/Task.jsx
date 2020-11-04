const Task = props => {

    const { task, handleToggleCheck, handleDestroyTask, idx } = props;

    return (
        <div className="display">
            <div className="col-4 mx-auto d-flex justify-content-between">
                <input 
                    type="checkbox" 
                    className="form-control col-1" 
                    checked={ task.isCompleted }
                    onChange={(e) => handleToggleCheck( e, idx )}
                />
                <h2 className="col-2" style={ task.isCompleted ? { textDecoration:"line-through"} : {} }>{ task.title }</h2>

                {
                task.isCompleted ? <button className="btn btn-danger" onClick={(e) => handleDestroyTask(e, idx)}>Delete</button> : null
                }
            </div>
        </div>
    )
}

export default Task