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
      "Ndz is a Top-rated Plus freelance professional on Upwork, specializing in providing high-quality analytics solutions. He is also the founder of LWN, a thriving tech solutions firm. As a holder of multiple analytics certifications, Ndz has been recognized repeatedly for his extensive expertise and innovative approaches that have helped numerous clients achieve their data-driven goals. Ndz brings a wealth of knowledge and practical insights to help participants elevate their analytics skills to succeed in the freelance market.",
    link: "https://www.linkedin.com/in/ndz-anthony-66a23a107"
    },
  {
    name: "FRANCISCA APPIAH-AGYEI",
    photo: FranciscaPhoto,
    biography:
      "Francisca is a six-figure earner with over a decade of experience in SuccessFactor Consulting and HR Solutions implementation and design. She has successfully led projects that streamline HR processes and enhance organizational efficiency. Her expertise in customizing SF applications has made her a sought-after expert. Francisca offers valuable insights and practical solutions honed from over a decade of experience to help participants advance their careers and achieve financial success.",
    link: "https://www.linkedin.com/in/francisca-appiah-agyei/"
    },
];
const courseData = [
  {
    topic: "Introduction to Freelancing",
    subtopics: [
      "Definition and overview of freelancing",
      "Benefits and challenges of freelancing",
      "Different types of freelancing jobs and industries",
    ],
  },
  {
    topic: "Setting Up as a Freelancer",
    subtopics: [
      "Understand Legal and tax considerations",
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
          link = {instructor.link}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
