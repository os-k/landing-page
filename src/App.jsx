import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CourseHighlights from "./components/CourseHighlights/CourseHighlights";
import Testimonials from "./components/Testimonials/Testimonials";
import Syllabus from "./components/Syllabus/Syllabus";
import InstructorProfile from "./components/InstructorProfile/InstructorProfile";
import Footer from "./components/Footer/Footer";
import NDZPhoto from "./assets/NDZ.png";
import FranciscaPhoto from "./assets/FRANCISCA.jpg";

const instructors = [
  {
    name: "NDZ ANTHONY",
    photo: NDZPhoto,
    biography:
      "Founder of LWN and a 7X certified and a top-rated Plus Freelance Analytics Professional",
  },
  {
    name: "FRANCISCA APPIAH-AGYEI",
    photo: FranciscaPhoto,
    biography:
      "Multi-module HR Solutions Architect, SF Consultant, and six-figure earner",
  },
];
const courseData = [
  {
    topic: "Introduction to Freelancing",
    subtopics: [
      "Definition and overviewof freelancing",
      "Benefits and challenges of freelancing",
      "Different types of freelancing jobs and industries",
    ],
  },
  {
    topic: "Setting Up as a Freelancer",
    subtopics: [
      "UnderstLegal and tax considerations",
      "Choosing a niche or specialty",
      "Building a personal brand",
    ],
  },
  {
    topic: "Creating a Freelance Business Plan",
    subtopics: [
      "Setting goals and objectives",
      "Identifying target markets",
      "Creating a business model",
    ],
  },
  {
    topic: "Building an Online Presence",
    subtopics: [
      "Creating a professional website",
      "Optimizing social media profiles",
      "Utilizing freelancing platforms (Upwork, Fiverr, etc.)",
    ],
  },
  {
    topic: "Finding Freelance Work",
    subtopics: [
      "Networking strategies",
      "Job search techniques",
      "Writing effective proposals and pitches",
    ],
  },
  {
    topic: "Managing Freelance Projects",
    subtopics: [
      "Time management and productivity tools",
      "Project management techniques",
      "Communication with clients",
    ],
  },
  {
    topic: "Financial Management for Freelancers",
    subtopics: [
      "Pricing strategies and setting rates",
      "Invoicing and payment methods",
      "Budgeting and financial planning",
    ],
  },
  {
    topic: "Growing Your Freelance Business",
    subtopics: [
      "Upskilling and continuous learning",
      "Building long-term client relationships",
      "Scaling and expanding services",
    ],
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Header />
    <h2 className="highlights-header">Course Highlights</h2>
      <CourseHighlights/>
      <h2 id="testimonials" className="testimonial-header">Testimonials</h2>
      <Testimonials />
      <h2 id="course-overview" className="syllabus-header">MASTER CLASS SESSION AGENDA</h2>
      <p className="syllabus-paragraph">
        After completing the training, you can also request training materials
        for future reference
      </p>
      <Syllabus courseData={courseData}/>
      <h2 id="instructors" className="instructor-header">About Our Instructors</h2>
      {instructors.map((instructor, index) => (
        <InstructorProfile
          key={index}
          name={instructor.name}
          photo={instructor.photo}
          biography={instructor.biography}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
