
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap ,
  FaReact,
  FaJava,
  FaLeaf,
  FaDatabase,
  FaServer,
  FaAws,
  FaLinux,
  FaDocker,
  FaTools,
  FaProjectDiagram,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";
export default function Skills() {
  return (
    <>
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">

        {/*<----FRONTEND --------->*/}
        <div className="skills-card">
          <h3>Frontend</h3>
          <div className="skills-pills">
            <div className="skill-pill html"><FaHtml5 /> HTML</div>
            <div className="skill-pill css"><FaCss3Alt /> CSS</div>
            <div className="skill-pill js"><FaJs /> JavaScript</div>
            <div className="skill-pill bootstrap"><FaBootstrap /> BootStrap</div>
             <div className="skill-pill react"><FaReact /> React</div>
          </div>
        </div>

        {/*<----BACKEND------------> */}
        <div className="skills-card">
          <h3>Backend</h3>
          <div className="skills-pills">
            <div className="skill-pill java"><FaJava /> Java</div>
            <div className="skill-pill springboot"><FaLeaf/> Spring Boot</div>
            <div className="skill-pill mysql"><FaDatabase/> MySQL</div>
             <div className="skill-pill mongodb"> <FaServer/> MongoDB</div>
          </div>
        </div>

        {/*<-----CLOUD & DEVOPS------> */}
        <div className="skills-card">
          <h3>Cloud & DevOps</h3>
          <div className="skills-pills">
            <div className="skill-pill aws"><FaAws /> AWS Cloud</div>
            <div className="skill-pill linux"><FaLinux/>Linux</div>
            <div className="skill-pill docker"> <FaDocker/>Docker</div>
            <div className="skill-pill jenkins"><FaTools/>Jenkins</div>
             <div className="skill-pill iac"> <FaProjectDiagram/>Infrastructure as code</div>
          </div>
        </div>

        {/*<-----TOOLS-------->*/}
        <div className="skills-card">
          <h3>Tools</h3>
          <div className="skills-pills">
            <div className="skill-pill git"><FaGitAlt /> Git</div>
            <div className="skill-pill github"><FaGithub /> GitHub</div>
            <div className="skill-pill vscode"><FaCode/>VS Code</div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
