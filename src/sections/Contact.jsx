export default function Contact() {
return (
<>
<section id="contact">
<h2 className="section-title">Contact</h2>
<div className="contact-container">
        <div className="contact-form">
          <h3>Connect with Me</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="form-group">
              <textarea placeholder="Message" rows="5"></textarea>
            </div>
    <button type="submit" className="contact-btn">Send Message</button>
    </form>
  </div>
  </div>
</section>
</>
);
}
