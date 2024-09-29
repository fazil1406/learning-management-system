import React from "react";
import Header from "../../components/Header";
import StudentSidebar from "./StudentSidebar";
const StudentDashboard = () => {
  return (
    <div>
      <Header user="Student Dashboard" />
      <StudentSidebar />
    </div>
  );
};

export default StudentDashboard;
