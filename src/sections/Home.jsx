import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profileImg from "../assets/professional1.png"; 

export default function Home() {
  return (
<section id="home">
      <div className="hero">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h1>Hi, I'm Prabhu korenor</h1>

<h2 className="typewriter">
            I am {""}
      <span>
      <Typewriter
      words={["Java Full Stack Web Developer" ]}
      loop={0}         
      cursor
      cursorStyle=""
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500} />
</span>
</h2>

          <p>
             a Java Full Stack Web Developer with experience in building scalable,
            responsive, and user-friendly web applications. I work with modern frontend
            technologies like React and backend technologies such as Java and Spring Boot,
            focusing on clean code, performance, and continuous learning.
          </p>

          <a href="/PRABHU.K(Resume).pdf" download>
            <button>Download Resume</button>
          </a>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
        
          <img
            src={profileImg}
            alt="Profile"
            className="profile-circle"
          />
        </motion.div>

      </div>
    </section>
  );
}
