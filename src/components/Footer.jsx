import React from 'react'


export default function Footer() {

  let presentDate = new Date();
  let year = presentDate.getFullYear();
    
  return (
  <footer>
  <div class="footer-container">
    <div class="footer-section">
      <h4>Contact Us</h4>
      <p>Location: Lagos, Nigeria</p>
      <p>Phone: (234) 701-968-1052</p>
      <p>Mobile: (234) 803-313-4026</p>
      <p>Email: theophiluspep@gmail.com</p>
    </div>
    <div class="footer-section">
      <h4>Socials</h4>
      <div class="social-icons">
        <a href="https://www.facebook.com/lucas.hemba" target="_blank">Facebook</a>
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
        <a href="https://www.linkedin.com/in/theophilus-hemba-34121b194" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>

  <div>
        <div className='line'></div>
          <p className="copy">
            Theophilus Hemba &copy;{year}.
          </p>
        </div>
  </footer>

  )
}
