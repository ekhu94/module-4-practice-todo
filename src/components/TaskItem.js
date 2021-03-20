import React from 'react';

const TaskItem = ({ task }) => {
    return (
        <div className="task">
            <div className="label">{task.category}</div>
            <div className="text">{task.text}</div>
        </div>
    );
};

export default TaskItem;