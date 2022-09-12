import React from 'react';
import './App.css';

import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal'

const App = () => {
  const courseGoals = [
    {id : 'cg1', text :'Finish the course' },
    {id : 'cg2', text :'Learn all about the course Main topic'},
    {id : 'cg3', text :'Help other students in the Q&A'}
];
  const addNewGoalHandler = newGoal =>{
    courseGoals.push(newGoal);
    console.log(courseGoals);
  }
  return (
  <div className = "course-goals">
    <h2>Course goal</h2>
      <NewGoal onAddGoal = {addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
