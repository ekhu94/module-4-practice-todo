import React from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

class TasksList extends React.Component {

    renderTasks = tasks => {
        return tasks.map(t => {
            return (
                <TaskItem key={t.text} task={t} />
            );
        });
    };

    render() {
        const {tasks, categories, selected, on, onNewTask} = this.props;
        let showTasks = [];
        if (selected !== "All") {
            const filteredTasks = tasks.filter(t => {
                return t.category === selected;
            });
            showTasks = this.renderTasks(filteredTasks)
        } else {
            showTasks = this.renderTasks(tasks);
        }
        
        return (
            <div className="tasks">
                <h5>Tasks</h5>
                {on ? <TaskForm
                        categories={categories}
                        onNewTask={onNewTask}
                    />
                : null}
                {showTasks}
            </div>
        );
    }
}

export default TasksList;