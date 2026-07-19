import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      <h2>Course Details</h2>

      {/* Conditional Rendering Technique: Immediately Invoked Function Expression (IIFE) */}
      {(() => {
        if (courses.length === 0) {
          return <p>No courses available right now.</p>;
        }
        return (
          <ul>
            {courses.map(course => (
              <li key={course.id}>{course.name} ({course.duration})</li>
            ))}
          </ul>
        );
      })()}
    </div>
  );
}

export default CourseDetails;