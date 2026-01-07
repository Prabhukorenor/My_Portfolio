
import { HashLink as Link } from "react-router-hash-link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-name">Prabhu Korenor</h3>

      <ul className="footer-links">
        <li><Link to="#about">About</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#experience">Experience</Link></li>
        <li><Link to="#projects">Projects</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>

      <div className="footer-socials">
         <a
          href="https://www.linkedin.com/in/prabhu-korenor/"
          target="_blank"
          rel="noreferrer" >
          <FaLinkedinIn />
        </a>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noreferrer" >
          <FaTwitter />
        </a>

        <a
          href="https://github.com/Prabhukorenor"
          target="_blank"
          rel="noreferrer">
          <FaGithub />
        </a>

        <a href="mailto:prabhukorenor@gmail.com">
          <FaEnvelope />
        </a>
      </div>

    </footer>
  );
}
