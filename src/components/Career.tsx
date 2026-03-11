import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer – Team Lead</h4>
                <h5>Venturecube</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading a team building scalable products. Driving technical
              decisions, code reviews, and mentoring junior engineers. Actively
              involved in system design and cross-functional collaboration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Funding Societies – TechiTalents</h5>
              </div>
              <h3>2019–2025</h3>
            </div>
            <p>
              Built and maintained fintech platforms for Funding Societies.
              Developed REST APIs, React frontends, and contributed to CI/CD
              pipelines and test coverage improvements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web App Developer</h4>
                <h5>ZYPHER</h5>
              </div>
              <h3>2018–2019</h3>
            </div>
            <p>
              Developed and maintained web applications, optimised performance,
              and improved UI/UX for client-facing products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web App Developer</h4>
                <h5>Omegaon Internet Pvt. Ltd.</h5>
              </div>
              <h3>2017–2018</h3>
            </div>
            <p>
              Worked on building responsive web applications and integrating
              third-party APIs for digital marketing clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web App Developer</h4>
                <h5>Info Network Management</h5>
              </div>
              <h3>2016–2017</h3>
            </div>
            <p>
              Started career building web-based management tools. Handled
              frontend development, content updates, and UI redesigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
