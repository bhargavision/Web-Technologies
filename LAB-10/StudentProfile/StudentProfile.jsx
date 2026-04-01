import React from 'react';
import './StudentProfile.css';

const StudentProfile = () => {
  // Student data stored as JavaScript variables (dynamic JSX binding)
  const student = {
    id: 'STU2024001',
    name: 'Priya Sharma',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    department: 'Computer Science & Engineering',
    year: 3,
    section: 'A',
    rollNumber: 25,
    cgpa: 8.76,
    email: 'priya.sharma@college.edu',
    phone: '+91 98765 43210'
  };

  return (
    <div className="student-profile">
      {/* Header */}
      <header className="profile-header">
        <h1 className="profile-title">Student Profile</h1>
        <div className="student-id">ID: {student.id}</div>
      </header>

      {/* Profile Card */}
      <div className="profile-card">
        {/* Profile Image */}
        <div className="profile-image-container">
          <img 
            src={student.photo} 
            alt={${student.name}'s profile photo}
            className="profile-image"
          />
        </div>

        {/* Basic Info */}
        <div className="profile-info">
          <h2 className="student-name">{student.name}</h2>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Department:</span>
              <span className="info-value">{student.department}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Year:</span>
              <span className="info-value">{student.year}rd Year</span>
</div>
            
            <div className="info-item">
              <span className="info-label">Section:</span>
              <span className="info-value">{student.section}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Roll No:</span>
              <span className="info-value">{student.rollNumber}</span>
            </div>
          </div>

          {/* Academic Stats */}
          <div className="academic-stats">
            <div className="stat-item">
              <span className="stat-label">CGPA</span>
              <span className="stat-value">{student.cgpa}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>{student.email}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>{student.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;