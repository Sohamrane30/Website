// src/pages/Contact.jsx
import Footer from '../components/Footer';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="level-label"> Level 3 - Contact Me</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <img src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="Email" className="contact-icon" />
          <h2>Email</h2>
          <a href="mailto:sohamrane30@gmail.com">sohamrane30@gmail.com</a>
        </div>

        <div className="contact-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" className="contact-icon" />
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/soham-p-rane/" target="_blank" rel="noopener noreferrer">
            soham-p-rane
          </a>
        </div>

        <div className="contact-card">
          <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="GitHub" className="contact-icon" />
          <h2>GitHub</h2>
          <a href="https://github.com/Sohamrane30" target="_blank" rel="noopener noreferrer">
            Sohamrane30
          </a>
        </div>
      </div>
      <h1> Game Over!</h1>
      <div className='thanks'> Thank you for playing!</div>
      <div className='thanks'>You are awesome!</div>
      <br/>
      <Footer/>
    </div>
  );
}

export default Contact;
