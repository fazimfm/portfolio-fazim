import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'AI/ML Solutions',
      description: 'Custom artificial intelligence and machine learning solutions for business automation and data analysis.',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using React Native and Flutter for iOS and Android.',
      icon: '📱'
    },
    {
      id: 4,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions using AWS, Azure, and Google Cloud with DevOps best practices.',
      icon: '☁️'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Services</h2>
        <p>Comprehensive software development services to bring your ideas to life</p>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;