import React from 'react';

const TaskItem = ({ task, on, onDeleteClick }) => {

    const onBtnClick = e => {
        const text = e.target.previousSibling.innerText;
        onDeleteClick(text);
    }

    return (
        <div className="task">
            <div className="label">{task.category}</div>
            <div className="text">{task.text}</div>
            {
                on ? <button
                        className="delete"
                        onClick={onBtnClick}
                     >
                        X
                     </button>
                : null
            }
        </div>
    );
};

export default TaskItem;