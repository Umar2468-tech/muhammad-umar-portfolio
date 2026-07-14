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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Vention</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              As a Frontend Developer, I built responsive and high-performance web applications using modern frontend technologies. I developed reusable UI components, integrated REST APIs, and converted Figma designs into pixel-perfect, user-friendly interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Rex Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              At Rex Technologies, I contributed to the development of scalable web solutions by implementing modern frontend architectures and reusable components. I worked extensively with React.js, Next.js, and REST APIs to deliver fast, reliable, and user-centric applications.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>The Visamtion Private Limited</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I am currently working at The Visamtion Private Limited as a Frontend Developer, where I am responsible for building and maintaining high-quality web applications. I work closely with cross-functional teams to deliver seamless and user-centric solutions while continuously improving my skills and knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
