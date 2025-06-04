import './App.css';

function App() {
  const name = 'Harsh Patil';
  const profession = 'Full Stack Java Developer | Spring Boot Developer';
  const email = 'itsharshhh6@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/harsh-patil'; 
  const github = 'https://github.com/harshpatil06'; 
  const projects = [
    {
      title: 'Wealth Map',
      description:
        'A property mapping platform built with Spring Boot, PostgreSQL + PostGIS, and Leaflet. Includes geo queries, clustering, and admin features.',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description:
        'My personal digital shrine. Built to showcase my projects, personality, and passion.',
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description:
        'End-to-end e-commerce web app with authentication, product filtering, and admin dashboards using Spring Boot and React.',
      link: '#'
    },
    {
      title: 'Blog Application',
      description:
        'A blogging platform with CRUD posts, comment section, and user roles. Built using Spring Boot and Thymeleaf.',
      link: '#'
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
