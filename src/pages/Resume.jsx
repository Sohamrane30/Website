import Footer from '../components/Footer';
import '../css/Resume.css';

function Resume() {
  return (
    <>
    <div className="resume-wrapper">
      <div className="level-label">LEVEL 1 - RESUME</div>
      <div className="resume-content">
        <p>💼 Full-Stack Designer and Developer</p>
        <p>🎓 B.E in Electronics and Computer Science</p>
        <p>With Hons. in Data Science</p>
        <p>🏛️ University of Mumbai</p>
        <p>🛠️ React, Node, JavaScript, Python, C/C++, SQL and HTML/CSS</p>
        <br/>
        <div className='info'>For more information consider downloading my resume.</div>
        <a className="download-btn" href="/React Soham Rane Online.pdf" download>📄 Download PDF</a>
      </div>
      <div className='footer-container'>
        <Footer/>
      </div>
    </div>
    
    </>
  );
}

export default Resume
