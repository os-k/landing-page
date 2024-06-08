import React, { useState } from "react";
import "./Syllabus.css"
function Syllabus({ courseData }) {
  return (
    <div>
      {courseData.map((item, index) => (
        <Topic key={index} topic={item.topic} subtopics={item.subtopics} />
      ))}
    </div>
  );
}

function Topic({ topic, subtopics }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.topicContainer}>
      <div style={styles.topicHeader} onClick={toggleDropdown}>
        <h2>{topic}</h2>
        <button style={styles.button}>{isOpen ? "▲" : "▼"}</button>
      </div>
      {isOpen && (
        <ul style={styles.subtopicList}>
          {subtopics.map((subtopic, index) => (
            <li key={index} style={styles.subtopicItem}>
              {subtopic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  topicContainer: {
    border: "1px solid #ddd",
    marginBottom: "10px",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    marginLeft: "30px",
    marginRight: "30px",
  },
  topicHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",

  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  subtopicList: {
    marginTop: "10px",
    paddingLeft: "20px",
    listStyleType: "disc",
  },
  subtopicItem: {
    marginBottom: "5px",
  },
};

export default Syllabus;
