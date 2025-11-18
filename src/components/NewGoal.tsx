import { useRef, type FormEvent, useState } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current?.value.trim() ?? "";
    const enteredSummary = summary.current?.value.trim() ?? "";


    if (enteredGoal.length === 0) {
      setError("Please enter a goal before adding!");
      goal.current?.focus();
      return;
    }

  
    onAddGoal(enteredGoal, enteredSummary);

   
    event.currentTarget.reset();
    setError(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">My goal</label>
        <input id="goal" type="text" name="goal" ref={goal} />
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>

      {/* afișează mesajul de eroare */}
      {error && <p className="error-message">{error}</p>}
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
