import { useState } from 'react';
import GoalList from './components/GoalList.tsx';
import Header from './components/Header.tsx';
import goalsImg from './images/logo.jpg';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  
  function handleAddGoal(goal: string, summary: string) {
     setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals,newGoal]
     });
  }

  function handleDeleteGoal(id: number) {
      setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>My Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <hr></hr>
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}

