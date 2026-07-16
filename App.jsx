import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./style.css";

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleStudentAdded = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <StudentForm onStudentAdded={handleStudentAdded} />
        <StudentList refreshTrigger={refreshTrigger} />
      </main>
      <Footer />
    </div>
  );
}

export default App;