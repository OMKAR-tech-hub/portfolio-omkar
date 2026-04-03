import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* CURRENT */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML & Full Stack Developer</h4>
                <h5>Self Projects & Innovation</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building real-world AI systems like Brain Tumor Detection,
              Lung Cancer Detection, and intelligent automation solutions.
              Developing scalable full-stack applications using React,
              Node.js, and modern technologies.
            </p>
          </div>

          {/* HACKATHON WIN */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>1st Place Winner</h4>
                <h5>Avirat Hackathon 2025</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Secured 1st place by building an innovative AI-based solution
              under real-time constraints. Demonstrated strong problem-solving,
              teamwork, and rapid prototyping skills.
            </p>
          </div>

          {/* TOP 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Top 3 Finalist</h4>
                <h5>HAL & PES University Hackathon</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Ranked among top 3 teams in a competitive national-level hackathon.
              Built impactful solutions using AI/ML and modern development tools.
            </p>
          </div>

          {/* PROJECT EXPERIENCE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Project Developer</h4>
                <h5>Suraksha Netra System</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Developed advanced AI surveillance system using YOLOv8 for detecting
              fire, drones, and intrusions. Deployed models on edge devices like
              NVIDIA Jetson for real-time performance.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Sharnbasva University</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
              Pursuing Computer Science Engineering with a CGPA of 9.39.
              Focused on AI/ML, full-stack development, and building
              real-world impactful projects.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;