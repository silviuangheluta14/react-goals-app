import { useState, type PropsWithChildren } from "react";
import "./CourseGoal.css";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({ title, id, children, onDelete }: CourseGoalProps) {
  const [status, setStatus] = useState<"New" | "In Process" | "Done">("New");

  function handleStatusClick() {
    setStatus((prev) =>
      prev === "New" ? "In Process" :
      prev === "In Process" ? "Done" :
      "New"
    );
  }

  return (
    <article className="goal-item">
      <div className="goal-text">
        <h2>{title}</h2>
        {children}

        <button
          className={`status-btn ${status.replace(" ", "-").toLowerCase()}`}
          onClick={handleStatusClick}
        >
          {status}
        </button>
      </div>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </article>
  );
}
