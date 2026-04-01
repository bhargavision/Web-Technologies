import React from 'react';
import './StudentCard.css';
const StudentCard = ({ 
  name, 
  department, 
  marks, 
  rollNumber,
  photo 
}) => {
  // Calculate grade based on marks
  const getGrade = (marks) => {
    if (marks >= 90) return 'A+';
    if (marks >= 80) return 'A';
    if (marks >= 70) return 'B';
    if (marks >= 60) return 'C';
    return 'D';
  };

  // Color based on performance
  const getPerformanceColor = (marks) => {
    if (marks >= 80) return '#27ae60';
    if (marks >= 60) return '#f39c12';
    return '#e74c3c';
  };

  return (
    <div className="student-card" style={{ borderTop: 5px solid ${getPerformanceColor(marks)} }}>
      {/* Student Photo */}
      <div className="student-photo">
        <img 
          src={photo} 
          alt={name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/120x120/667eea/ffffff?text=?';
          }}
        />
      </div>

      {/* Student Details */}
      <div className="student-details">
        <h3 className="student-name">{name}</h3>
        <div className="info-row">
          <span className="info-label">Roll No:</span>
          <span className="info-value">{rollNumber}</span>
        </div>
        
        <div className="info-row">
          <span className="info-label">Department:</span>
          <span className="info-value">{department}</span>
        </div>
      </div>

      {/* Marks Section */}
      <div className="marks-section">
        <div className="marks-circle">
          <span className="marks-number">{marks}%</span>
          <span className="grade">{getGrade(marks)}</span>
        </div>
        <div className="marks-text">
          <span>Final Marks</span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;