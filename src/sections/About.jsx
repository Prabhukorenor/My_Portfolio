import { FaGraduationCap, FaLaptopCode, FaAws, FaBookOpen, FaRocket } from "react-icons/fa";
export default function About() {
  return (
  <section id="about">
    <h2>About Me</h2>
        <div className="content-container">
          <div className="about-item">
           <FaGraduationCap className="about-icon" />
            <p>
             I have completed my Bachelor’s degree in Computer Science & Engineering,with a CGPA of 8.23, which
              provided me with a strong foundation in programming, data structures, and
              software development concepts.
            </p>
          </div>

          <div className="about-item">
            <FaLaptopCode className="about-icon" />
            <p>
              I have completed a Full Stack Web Development program at DLithe, where I
              gained hands-on experience in building web applications and understanding
              real-world development workflows. Additionally, I completed AWS Cloud
              training at Honeywell, where I learned cloud fundamentals, deployment
              concepts, and core AWS services.
            </p>
          </div>

          <div className="about-item">
              <FaLaptopCode className="about-icon" />
            <p>
              I also completed an AWS and DevOps internship at MicroDegree, where I was
              introduced to DevOps practices, cloud infrastructure basics, and automation
              concepts. Currently, I am upgrading my skills through a Java Full Stack Web
              Development program at Itvedant, focusing on backend development, databases,
              and building scalable full-stack applications.
            </p>
          </div>

          <div className="about-item">
           <FaRocket className="about-icon" />
            <p>
              I am passionate about continuous learning and enjoy working on projects that
              help me improve my technical skills and problem-solving abilities.
            </p>
            </div>
        </div>
    </section>
  );
}
