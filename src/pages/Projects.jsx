import '../css/Projects.css';
import Footer from '../components/Footer';

function Projects(){

    const projects = [
    {
      title: "Pathfinding Visualiser",
      description: "Web-app allowed the user to visualize pathfinding algorithms such as A* algorithm on a 120x40 grid.",
      image: "https://png.pngtree.com/png-vector/20220703/ourmid/pngtree-colorful-maze-background-wallpaper-geometric-shape-vector-png-image_32335452.jpg",
      tech: ["React", "CSS", "JavaScript", "Bootstrap"],
      link: "https://sohamrane30.github.io/Pathfinding-Visualiser/",
    },
    {
      title: "Jobsy - AI Platform",
      description: "A full-stack campus recruitment platform integrated with SpaCy NLP for smart job matching.",
      image: "/public/66a5401731cbd7a5d0c8c14354bdbc8b.jpg",
      tech: ["TypeScript", "PostgreSQL", "FastAPI", "Digital Ocean", "Spacey"],
      link: "https://jobsyapp.netlify.app/",
    },
    {
      title: "Selenium Automation Bot",
      description: "An automated hotel search bot made using Python and Selenium to filter and scrape data from Booking.com.",
      image: "/src/assets/f140481c0e939e17e78deb3074fb76dd.jpg",
      tech: ["Python", "Selenium", "HTML"],
      link: "https://github.com/Sohamrane30/Selenium-Booking-Bot",
    },
  ];


    return(
        <>
        <div className="projects-container">
            <h1 className="level-label">LEVEL 2 - PROJECTS</h1>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                <div key={idx} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h2 className="project-name">{project.title}</h2>
                    <p className="project-desc">{project.description}</p>
                    <p className="project-tech"> {project.tech.join(', ')}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Project
                    </a>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Projects