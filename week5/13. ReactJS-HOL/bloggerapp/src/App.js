import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

// Sample data
const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin' }
];

const blogs = [
  { id: 1, title: 'Getting Started with React', author: 'Jane Doe' },
  { id: 2, title: 'Understanding Hooks', author: 'John Smith' }
];

const courses = [
  { id: 1, name: 'React Fundamentals', duration: '4 weeks' },
  { id: 2, name: 'Advanced JavaScript', duration: '6 weeks' }
];

// Conditional Rendering Technique: Lookup object / map of components
const componentMap = {
  book: <BookDetails books={books} />,
  blog: <BlogDetails blogs={blogs} />,
  course: <CourseDetails courses={courses} />
};

// Conditional Rendering Technique: Function using a switch statement
function renderBySwitch(tab) {
  switch (tab) {
    case 'book':
      return <BookDetails books={books} />;
    case 'blog':
      return <BlogDetails blogs={blogs} />;
    case 'course':
      return <CourseDetails courses={courses} />;
    default:
      return <p>Please select a tab.</p>;
  }
}

function App() {
  const [selectedTab, setSelectedTab] = useState('book');
  const [useSwitchTechnique, setUseSwitchTechnique] = useState(false);

  // Conditional Rendering Technique: if-else inside a function returning JSX
  function renderByIfElse() {
    if (selectedTab === 'book') {
      return <BookDetails books={books} />;
    } else if (selectedTab === 'blog') {
      return <BlogDetails blogs={blogs} />;
    } else if (selectedTab === 'course') {
      return <CourseDetails courses={courses} />;
    } else {
      return <p>No matching component found.</p>;
    }
  }

  return (
    <div className="App">
      <h1>Blogger Application</h1>

      <div>
        <button onClick={() => setSelectedTab('book')}>Book Details</button>
        <button onClick={() => setSelectedTab('blog')}>Blog Details</button>
        <button onClick={() => setSelectedTab('course')}>Course Details</button>
        <button onClick={() => setUseSwitchTechnique(prev => !prev)}>
          Toggle Rendering Technique (Switch vs If-Else)
        </button>
      </div>

      <hr />

      {/* Technique 1: if-else (via function call) */}
      <h3>Technique 1: If-Else Statement</h3>
      {renderByIfElse()}

      <hr />

      {/* Technique 2: Ternary operator */}
      <h3>Technique 2: Ternary Operator</h3>
      {selectedTab === 'book' ? (
        <BookDetails books={books} />
      ) : selectedTab === 'blog' ? (
        <BlogDetails blogs={blogs} />
      ) : (
        <CourseDetails courses={courses} />
      )}

      <hr />

      {/* Technique 3: Logical && operator (short-circuit rendering) */}
      <h3>Technique 3: Logical && Operator</h3>
      {selectedTab === 'book' && <BookDetails books={books} />}
      {selectedTab === 'blog' && <BlogDetails blogs={blogs} />}
      {selectedTab === 'course' && <CourseDetails courses={courses} />}

      <hr />

      {/* Technique 4: Switch statement (via function call) */}
      <h3>Technique 4: Switch Statement</h3>
      {renderBySwitch(selectedTab)}

      <hr />

      {/* Technique 5: Lookup object / map */}
      <h3>Technique 5: Lookup Object (Component Map)</h3>
      {componentMap[selectedTab]}

      <hr />

      {/* Technique 6: IIFE combined with toggle state */}
      <h3>Technique 6: IIFE with Toggle</h3>
      {(() => {
        if (useSwitchTechnique) {
          return <p><em>Currently using Switch-based rendering above.</em></p>;
        }
        return <p><em>Currently using If-Else-based rendering above.</em></p>;
      })()}
    </div>
  );
}

export default App;