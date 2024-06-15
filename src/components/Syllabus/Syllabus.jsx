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
        <h2 style={styles.topic}>{topic}</h2>
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
    color:"black"
  },
  subtopicList: {
    marginTop: "10px",
    paddingLeft: "20px",
    listStyleType: "disc",
  },
  subtopicItem: {
    marginBottom: "5px",
  },
  topic:{
fontSize: "1.2rem",
fontWeight:"700"
  },
};

export default Syllabus;
// /* Extra Small Devices (Portrait Phones) */
// @media (max-width: 479px) {
// }

// /* Small Devices (Phones) */
// @media (min-width: 480px) and (max-width: 767px) {
// }

// /* Medium Devices (Tablets) */
// @media (min-width: 768px) and (max-width: 991px) {
// }

// /* Large Devices (Desktops) */
// @media (min-width: 992px) and (max-width: 1199px) {
// }

// /* Extra Large Devices (Large Desktops) */
// @media (min-width: 1200px) {
// }

if (window.matchMedia("(max-width: 479px)").matches) {
  styles.topicContainer.marginLeft = "10px";
  styles.topicContainer.marginRight = "10px";
  styles.topicContainer.padding = "0";
  styles.topic.marginLeft = "10px";
  styles.topic.fontSize = "0.85rem"
  styles.topic.marginBottom = "0"
  styles.subtopicItem.fontSize = "0.75rem"
}
if (window.matchMedia("(min-width: 480px) and (max-width: 767px)").matches) {
  styles.topicContainer.marginLeft = "15px";
  styles.topicContainer.marginRight = "15px";
  styles.topicContainer.padding = "0";
  styles.topic.fontSize = "1.1rem";
  styles.topic.marginLeft = "10px";
  styles.topic.marginBottom = "0"
  styles.subtopicItem.fontSize = "1.05rem"
}
