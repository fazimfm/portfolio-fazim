import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-hero">
          <h2>About Me</h2>
          <p>Passionate Software Developer | AI/ML Enthusiast | Building Innovative Solutions That Make a Difference</p>
        </div>

        <div className="about-main">
          <div className="about-layout">
            <div className="about-content">
            <div className="content-section">
              <div className="section-header">
                <span className="section-number">01</span>
                <h3>My Journey</h3>
              </div>
              <div className="section-content">
                <p>I'm a dedicated software developer with a passion for creating innovative solutions that solve real-world problems. Currently pursuing my Bachelor of Engineering at VRS College of Engineering and Technology with a CGPA of 8.0, I've transformed my academic knowledge into practical applications through multiple internships and hands-on projects.</p>
                <p>My journey in technology began with a curiosity about how things work and evolved into a commitment to building accessible, intelligent systems. From developing AI-powered plant disease detection systems to creating assistive technology for visually impaired individuals, I believe in using technology as a force for positive change.</p>
                <p>What drives me is the intersection of artificial intelligence, web development, and user experience. I'm constantly exploring new technologies, frameworks, and methodologies to stay at the forefront of innovation.</p>
              </div>
            </div>

            <div className="content-section">
              <div className="section-header">
                <span className="section-number">02</span>
                <h3>Professional Experience</h3>
              </div>
              <div className="section-content">
                <div className="experience-timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>Web Development Intern</h4>
                      <p className="company">Muhalla Research Lab, Villupuram</p>
                      <p>Specialized in responsive web development using HTML5, CSS, and Bootstrap. Built mobile-first applications and mastered cross-device compatibility through advanced media queries and modern CSS techniques.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>UI/UX Design Intern</h4>
                      <p className="company">CODSOFT (Virtual)</p>
                      <p>Designed intuitive user interfaces with focus on accessibility and user experience. Created wireframes, prototypes, and implemented design systems that enhanced user engagement and satisfaction.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>Front-End Development Intern</h4>
                      <p className="company">Softtech Ashram, Velachery</p>
                      <p>Developed dynamic, interactive web applications using modern JavaScript frameworks. Implemented responsive designs, optimized performance, and collaborated with teams to deliver production-ready solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-header">
                <span className="section-number">03</span>
                <h3>Technical Expertise</h3>
              </div>
              <div className="section-content">
                <div className="skills-showcase">
                  <div className="skill-group">
                    <h4>Programming Languages</h4>
                    <div className="skill-items">
                      <div className="skill-item">
                        <span className="skill-name">Python</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">JavaScript</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '80%'}}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">Java</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '75%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-group">
                    <h4>Web Technologies</h4>
                    <div className="skill-items">
                      <div className="skill-item">
                        <span className="skill-name">HTML/CSS</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '90%'}}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">Bootstrap</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">SQL</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '70%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-header">
                <span className="section-number">04</span>
                <h3>Certifications & Learning</h3>
              </div>
              <div className="section-content">
                <div className="certifications-grid">
                  <div className="cert-card">
                    <div className="cert-icon">🐍</div>
                    <h4>Python Programming</h4>
                    <p>Pantech</p>
                  </div>
                  <div className="cert-card">
                    <div className="cert-icon">🎓</div>
                    <h4>Full Stack Development</h4>
                    <p>GUVI</p>
                  </div>
                  <div className="cert-card">
                    <div className="cert-icon">☁️</div>
                    <h4>Cloud Computing</h4>
                    <p>NASSCOM Foundation</p>
                  </div>
                  <div className="cert-card">
                    <div className="cert-icon">📊</div>
                    <h4>Big Data Computing</h4>
                    <p>NPTEL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-header">
                <span className="section-number">05</span>
                <h3>Personal Qualities</h3>
              </div>
              <div className="section-content">
                <div className="qualities-grid">
                  <div className="quality-card">
                    <div className="quality-icon">🎯</div>
                    <h4>Problem Solver</h4>
                    <p>Analytical thinker who breaks down complex challenges into actionable solutions</p>
                  </div>
                  <div className="quality-card">
                    <div className="quality-icon">🚀</div>
                    <h4>Innovation Driven</h4>
                    <p>Constantly exploring emerging technologies and implementing creative solutions</p>
                  </div>
                  <div className="quality-card">
                    <div className="quality-icon">🤝</div>
                    <h4>Team Player</h4>
                    <p>Collaborative mindset with excellent communication and interpersonal skills</p>
                  </div>
                  <div className="quality-card">
                    <div className="quality-icon">⚡</div>
                    <h4>Fast Learner</h4>
                    <p>Quick to adapt to new technologies, frameworks, and development methodologies</p>
                  </div>
                  <div className="quality-card">
                    <div className="quality-icon">💡</div>
                    <h4>Detail-Oriented</h4>
                    <p>Meticulous attention to code quality, performance optimization, and best practices</p>
                  </div>
                  <div className="quality-card">
                    <div className="quality-icon">🎨</div>
                    <h4>User-Focused</h4>
                    <p>Passionate about creating accessible, intuitive experiences for all users</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-header">
                <span className="section-number">06</span>
                <h3>Languages & Communication</h3>
              </div>
              <div className="section-content">
                <div className="languages-section">
                  <div className="language-item">
                    <div className="language-flag">🇬🇧</div>
                    <div className="language-info">
                      <h4>English</h4>
                      <p>Professional proficiency</p>
                    </div>
                  </div>
                  <div className="language-item">
                    <div className="language-flag">🇮🇳</div>
                    <div className="language-info">
                      <h4>Tamil</h4>
                      <p>Native speaker</p>
                    </div>
                  </div>
                </div>
                <div className="communication-note">
                  <p>Certified in TCSion Communication Skills, ensuring effective professional communication in diverse environments.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image-container">
            <img src="/img.png" alt="About" className="about-side-image" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;