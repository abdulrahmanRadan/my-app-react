import { useState, useEffect } from "react";
import "./App.css";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import TemporaryComponent from "./components/TemporaryComponent/TemporaryComponent";

function App() {
  const [showOriginal, setShowOriginal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOriginal(true);
    }, 5000); // 5000 milliseconds = 5 seconds
    return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء تحميل المكون
  }, []);
  const [CourseGoals, setCourseGoal] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&amp;A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoal(CourseGoals.concat(newGoal));
    setCourseGoal((prevCourseGoal) => prevCourseGoal.concat(newGoal));
  };
  return (
    <div>
      {showOriginal ? (
        <div className="course-goals">
          <h2> Course Goals</h2>
          <NewGoal onAddGoal={addNewGoalHandler} />
          <GoalList goals={CourseGoals} />
        </div>
      ) : (
        <TemporaryComponent />
      )}
    </div>
  );
}

export default App;
