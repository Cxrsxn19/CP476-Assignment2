import { useState, useEffect } from "react";

function StudentList({ refreshTrigger }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = () => {
    setLoading(true);
    fetch("http://localhost/assignment2/students.php")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, [refreshTrigger]);

  if (loading) return <p>Loading students...</p>;

  return (
    <div className="card">
      <h2>Student Directory</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Program</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.studentID}>
              <td>{s.studentID}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;