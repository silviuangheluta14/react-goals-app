import CourseGoal from "./CourseGoal.tsx";
import {type CourseGoal as CGoal} from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";

type GoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};

export default function GoalList({goals, onDeleteGoal}: GoalListProps) {
    if (goals.length === 0) {
        return (
        <InfoBox mode="hint">
            You have no goals yet !
        </InfoBox>
        );
    }

let warningBox: ReactNode;

if (goals.length >=10) {
    warningBox = (
    <InfoBox mode="warning" severity="high">
              You're collecting too many goals
    </InfoBox>
  );
}


    return (
        <>
        {warningBox}
        <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
      </ul>
      </>
    );
}
