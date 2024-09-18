import React from 'react';

export default function Footer() {
  let presentDate = new Date();
  let year = presentDate.getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Location: Lagos, Nigeria</p>
          <p>Phone: +234 7019681052</p>
          <p>Mobile: +234 8033134026</p>
          <p>Email: <a href="mailto:theophiluspep@gmail.com">theophiluspep@gmail.com</a></p>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/theophilus-hemba-34121b194" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="copy">
        <p>Theophilus Hemba &copy; {year}</p>
      </div>
    </footer>
  );
}
