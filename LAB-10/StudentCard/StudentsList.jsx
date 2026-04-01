import React from "react";
import StudentCard from "./StudentCard";
import "./StudentsList.css";

// Sample student data
const studentsData = [
  {
    id: 1,
    name: "Priya Sharma",
    department: "Computer Science",
    marks: 92,
    rollNumber: "CS21A001",
    photo:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    department: "Electronics Engineering",
    marks: 78,
    rollNumber: "EE21B045",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Anita Patel",
    department: "Mechanical Engineering",
    marks: 65,
    rollNumber: "ME21C012",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Vikram Singh",
    department: "Civil Engineering",
    marks: 88,
    rollNumber: "CE21D033",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Sneha Gupta",
    department: "Information Technology",
    marks: 71,
    rollNumber: "IT21E007",
    photo:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=120&h=120&fit=crop&crop=face",
  },
];

const StudentsList = () => {
  return (
    <div className="students-container">
      <header className="students-header">
        <h1>Student Performance Dashboard</h1>
        <p>Academic Session 2023-24 | Total Students: {studentsData.length}</p>
      </header>

      <div className="students-grid">
        {/* Reusable StudentCard components with different props */}
        {studentsData.map((student) => (
          <StudentCard
            key={student.id} // Unique key for React list reconciliation
            name={student.name}
            department={student.department}
            marks={student.marks}
            rollNumber={student.rollNumber}
            photo={student.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
