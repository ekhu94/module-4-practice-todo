import React from 'react';

class TaskForm extends React.Component {

    onFormSubmit = e => {
        e.preventDefault();
        const newTask = {
            text: e.target.task.value,
            category: e.target.category.value
        };
        this.props.onNewTask(newTask);
    }

    render() {
        const {categories} = this.props;
        const options = categories.map(c => 
            c !== "All" ? <option key={c} value={c}>{c}</option> : null
        )
        return (
            <form
                className="new-task-form"
                onSubmit={this.onFormSubmit}
            >
                <input type="text" name="task" placeholder="New task details" />
                <select name="category">
                    {options}
                </select>
                <input type="submit" />
            </form>
        );
    }
}

export default TaskForm;