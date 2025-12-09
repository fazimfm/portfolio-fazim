import React from 'react';

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <h2>Resume</h2>
        
        <div className="resume-section">
          <h3>Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Engineering</h4>
            <p className="institution">VRS College of Engineering and Technology • CGPA: 8.0</p>
          </div>
          <div className="resume-item">
            <h4>Higher Secondary (12th)</h4>
            <p className="institution">John Dewey Matriculation Higher Secondary School • 61%</p>
          </div>
          <div className="resume-item">
            <h4>Secondary (10th)</h4>
            <p className="institution">John Dewey Matriculation Higher Secondary School • 64%</p>
          </div>
        </div>

        <div className="resume-section">
          <h3>Professional Experience</h3>
          <div className="resume-item">
            <h4>Web Development Intern</h4>
            <p className="institution">Muhalla Research Lab, Villupuram</p>
            <ul>
              <li>Developed responsive web applications using HTML5, CSS & Bootstrap</li>
              <li>Implemented responsive design using Media Queries for cross-device compatibility</li>
              <li>Created adaptive layouts based on different screen sizes</li>
            </ul>
          </div>
          
          <div className="resume-item">
            <h4>UI/UX Design Intern</h4>
            <p className="institution">CODSOFT (Virtual Internship)</p>
            <ul>
              <li>Designed user interfaces focusing on visual and interactive elements</li>
              <li>Enhanced user experience through intuitive design principles</li>
              <li>Created wireframes and prototypes for web applications</li>
            </ul>
          </div>
          
          <div className="resume-item">
            <h4>Front-End Intern</h4>
            <p className="institution">Softtech Ashram, Velachery</p>
            <ul>
              <li>Developed front-end applications using HTML, CSS and JavaScript</li>
              <li>Implemented interactive user interfaces and responsive designs</li>
              <li>Collaborated on web development projects using modern frameworks</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h3>Technical Skills</h3>
          <div className="skills-categories">
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <p>Python, Java, JavaScript, HTML/CSS, SQL</p>
            </div>
            <div className="skill-category">
              <h4>Tools & Technologies</h4>
              <p>Git, Bootstrap, Media Queries, Responsive Design</p>
            </div>
            <div className="skill-category">
              <h4>Languages</h4>
              <p>English, Tamil</p>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3>Certifications</h3>
          <div className="resume-item">
            <h4>Python Programming</h4>
            <p className="institution">Pantech</p>
          </div>
          <div className="resume-item">
            <h4>GUVI Full Stack With Python Programming</h4>
            <p className="institution">GUVI</p>
          </div>
          <div className="resume-item">
            <h4>TCSion Communication Skills</h4>
            <p className="institution">TCS</p>
          </div>
          <div className="resume-item">
            <h4>Cloud Computing Basics</h4>
            <p className="institution">NASSCOM Foundation</p>
          </div>
          <div className="resume-item">
            <h4>Big Data Computing</h4>
            <p className="institution">NPTEL</p>
          </div>
        </div>
        
        <div className="resume-section">
          <h3>Strengths & Qualities</h3>
          <div className="resume-item">
            <ul>
              <li>Dedicated and self-motivated professional</li>
              <li>Excellent time management skills</li>
              <li>Strong problem-solving abilities</li>
              <li>Adaptable to new technologies and environments</li>
            </ul>
          </div>
        </div>

        <div className="resume-download">
          <a href="/Fazim resume lat.pdf" download="Fazim_Resume.pdf" className="btn btn-primary">Download PDF Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Resume;