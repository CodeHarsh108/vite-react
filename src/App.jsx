import './App.css';

function App() {
  const name = 'Harsh Patil';
  const profession = 'Full Stack Java Developer | Spring Boot Developer';
  const email = 'itsharshhh6@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/harshpatil28'; 
  const github = 'https://github.com/CodeHarsh108'; 
  const projects = [
    {
      title: 'Wealth Map',
      description:
      'A handcrafted digital shrine designed to reflect my projects, personality, and passion. Built with React for smooth navigation and modular structure, it showcases featured work, skills, and a bit of who I am behind the code. Responsive, clean, and intentional—this site is both a résumé and a reflection, blending tradition with tech to make a lasting first impression.',
      link: 'https://github.com/CodeHarsh108/Wealth-Map'
    },
    {
      title: 'Portfolio Website',
      description:
        'My personal digital shrine. Built to showcase my projects, personality, and passion.',
      link: 'https://github.com/CodeHarsh108/vite-react'
    },
    {
      title: 'E-commerce Platform',
      description: 
      'Developed a fully functional e-commerce platform with seamless integration between a Spring Boot backend and a responsive React frontend. Implemented user authentication and role-based authorization using JWT and Spring Security. Built dynamic product listings with advanced filtering, search, and pagination. Designed intuitive admin dashboards for managing products, orders, and users. Ensured a smooth shopping experience with cart management, order placement, and secure checkout flow. Focused on scalability, modular architecture, and clean code practices.',
      link: 'https://github.com/CodeHarsh108/Ecommerce_Application'
    },
    {
      title: 'Journal Application',
      description:
        'Designed and deployed a secure, full-stack journaling app with real-time caching via Redis to boost performance. Engineered robust authentication and role-based access using JWT and Spring Security. Enriched user experience by integrating a third-party weather API with smart caching for contextual insights. Maintained clean code practices with Swagger/OpenAPI for seamless API documentation and collaboration.',
      link: 'https://github.com/CodeHarsh108/Journal-App'
    }
  ];

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1 className="name">{name}</h1>
        <h2 className="profession">{profession}</h2>
        <nav>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I’m {name}, a backend-first developer who crafts robust, scalable solutions using Java, Spring Boot, and PostgreSQL.
          I love building clean APIs, optimizing database queries, and occasionally geeking out on frontend map integrations with Leaflet.
          Whether it's designing a microservice architecture or integrating third-party APIs, I'm always pushing for elegant solutions with old-school discipline and modern ambition.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Want to collab? Got an idea that needs a backend brain? Drop me a mail or connect professionally.
        </p>
        <a href={`mailto:${email}`} className="contact-link">Email Me</a>
        <br />
        <a href={linkedIn} className="contact-link" target="_blank" rel="noreferrer">LinkedIn</a>
        <br />
        <a href={github} className="contact-link" target="_blank" rel="noreferrer">GitHub</a>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {name}. Made with chai, code, and curiosity.</p>
      </footer>
    </div>
  );
}

export default App;
