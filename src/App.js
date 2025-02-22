import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoryFilter from './components/CategoryFilter';
import TasksList from './components/TasksList';
import StretchFeatureToggle from './components/StretchFeatureToggle';

class App extends React.Component {

  state = {
    on: false,
    selected: CATEGORIES[0],
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  onCategoryClick = filter => {
    this.setState({ selected: filter });
  }

  onToggleClick = prev => {
    this.setState({ on: !prev })
  }

  onNewTask = newTask => {
    this.setState({ tasks: [...this.state.tasks, newTask] });
  }

  onDeleteClick = text => {
    const {tasks} = this.state;
    const deleteText = tasks.find(t => t.text === text);
    const updatedTasks = [...tasks]
    updatedTasks.splice(tasks.indexOf(deleteText), 1);
    this.setState({ tasks: updatedTasks });
  }

  render() {
    const {selected, tasks, on} = this.state;
    return (
      <div className="App">
        <StretchFeatureToggle
          on={on}
          onToggleClick={this.onToggleClick}
        />
        <h2>My tasks</h2>
        <CategoryFilter
          selected={selected}
          categories={CATEGORIES}
          onCategoryClick={this.onCategoryClick}
        />
        <TasksList
          tasks={tasks}
          categories={CATEGORIES}
          onNewTask={this.onNewTask}
          onDeleteClick={this.onDeleteClick}
          selected={selected}
          on={on}
        />
      </div>
    );
  }
}

export default App;
