import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
export default function Projects() {
return (
<section id="projects">
<h2 className="section-title">Projects</h2>
  
<div className="projects-grid">
 {/* <--PROJECT 1---> */}
  <div className="project-card">
    <div className="project-image">
      <img src={project1} alt="project1"/>
    </div>
      <h3>Medical Appointment Booking System</h3>
      <p>
        The project focuses on a medical appointment booking interface that allows patients to 
        easily view healthcare services, explore available doctors.
      </p>
    <div className="project-tech">
      <span>HTML</span>
      <span>CSS</span>
      <span>BootStrap</span>
      <span>JavaScript</span>
    </div>

    <div className="project-links">
      <a href="https://prabhukorenor.github.io/Medical-Appointment-Website/" target="_blank" rel="noreferrer">Live</a>
      <a href="https://github.com/Prabhukorenor" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </div>

  {/*<-----PROJECT 2----> */}
  <div className="project-card">
    <div className="project-image">
      <img src={project2} alt="project2"/>
    </div>
      <h3>Portfolio Website</h3>
      <p>
       A personal portfolio website built using React to showcase my
       skills, experience, and projects with a modern UI.
      </p>
    <div className="project-tech">
      <span>React</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>
    <div className="project-links">
      <a href="#/home" target="_blank" rel="noreferrer">Live</a>
      <a href="https://github.com/Prabhukorenor" target="_blank" rel="noreferrer">GitHub</a>
    </div>
        </div>

 {/*< ----PROJECT 3----> */}
  <div className="project-card">
    <div className="project-image">
       <img src={project2} alt="project2"/>
    </div>
    <h3>Expense Tracker</h3>
    <p>
      An expense tracking application that allows users to add,
      categorize, and visualize expenses for better financial planning.
    </p>
          
    <div className="project-tech">
      <span>React</span>
      <span>Context API</span>
      <span>Chart</span>
    </div>

    <div className="project-links">
      <a href="#" target="_blank" rel="noreferrer">Live</a>
      <a href="#" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </div>


</div>
</section>
  );
}
