import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SchoolIcon from "@mui/icons-material/School";
import StairsIcon from "@mui/icons-material/Stairs";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import "./CourseHighlights.css";
import freelancephoto from "../../assets/photo_2024-06-11_22-04-39.jpg";
import freelancephoto2 from "../../assets/photo_2024-06-11_22-04-44.jpg";

function CourseHighlights() {
  return (
    <div>
      <section className="highlight-section">
        <div className="highlights-div">
          <div>
            <div className="highlights-child">
              <CardMembershipIcon
                style={{ fontSize: "45px", color: "#2575fc" }}
              />
              <div>
                <h3>Certificate of Completion</h3>
                <p>Receive professional certificate upon completion</p>
              </div>
            </div>
            <div className="highlights-child">
              <SchoolIcon style={{ fontSize: "45px", color: "#2575fc" }} />
              <div>
                <h3>Expert Instructors </h3>
                <p>Learn from experienced freelancers and industry experts</p>
              </div>
            </div>
            <div className="highlights-child">
              <StairsIcon style={{ fontSize: "45px", color: "#2575fc" }} />
              <div>
                <h3>Beginner Friendly </h3>
                <p>No prior freelancing experience required</p>
              </div>
            </div>
          </div>
          <div>
            <div className="highlights-child">
              <LibraryBooksIcon
                style={{ fontSize: "45px", color: "#2575fc" }}
              />
              <div>
                <h3>Comprehensive Resources </h3>
                <p>
                  Access to shared materials and tools for an enhanced learning
                  experience
                </p>
              </div>
            </div>
            <div className="highlights-child">
              <PeopleIcon style={{ fontSize: "45px", color: "#2575fc" }} />
              <div>
                <h3>Community Support</h3>
                <p> Join a network of like-minded freelancers</p>
              </div>
            </div>
            <div className="highlights-child">
              <ForumIcon style={{ fontSize: "45px", color: "#2575fc" }} />
              <div>
                <h3> Interactive Learning</h3>
                <p> Doubt clearing through Q&A forums</p>
              </div>
            </div>
          </div>
          {/* <div className="highlights-child">
            <AccessTimeFilledIcon
              style={{ fontSize: "45px", color: "#2575fc" }}
            />
            <div>
              <h3> 3 days duration</h3>
              <p> 2 hrs/day</p>
            </div>
          </div> */}
        </div>
      </section>
      <section>
        <h2>Who should attend this class</h2>

        <div className="subsection">
        <div>
            <img src={freelancephoto} alt="" />
          </div>
          <div>
            <p>This masterclass is ideal for</p>
            <p>
              <span>New Freelancers:</span> <br /> Individuals who are considering freelancing
              as a career and need guidance on how to start.
            </p>
            <p>
              <span>Professionals in Transition:</span> <br /> Those looking to leave traditional
              employment and transition into freelancing for more flexibility
              and autonomy.
            </p>
            <p>
              <span>Seasoned Freelancers:</span> <br />
               Experienced freelancers seeking to upscale
              their business, improve their skills, and expand their client
              base.
            </p>
            <p>
              <span>Entrepreneurs:</span>
               Small business owners and entrepreneurs who want to
              leverage freelancing as a viable income stream or business model.
            </p>
          </div>
        </div>

        <h2>Why attend this Masterclass</h2>
        <div className="subsection">
          <div className="item-1">
            <img  src={freelancephoto2} alt="" />
          </div>
          <div className="item-2">
            <p>
              <span>Expert Guidance:</span><br />
               Gain insights and practical advice from experts
              on starting and succeeding as a freelancer
            </p>
            <p>
              <span>Be in demand:</span> <br />With the increasing trend and demand for freelance
              work in the modern economy, it is one of the hottest career
              options with an average fresher salary of $48,890 per year or
              $23.50 per hour for freelancers according to Glassdoor.
            </p>
            <p>
              <span>Be your own Boss:</span> <br />Be in control. Decide when, where, and how you
              work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default CourseHighlights;
