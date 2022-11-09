import Image from 'next/image'

const ContactUs = () => {
  const ContactCards = () => (
    <div className="contact-card">
      <Image src="/hero.svg" width="230" height="250" alt="Chairperson Photo" />
      <h4>lorem ipsum</h4>
      <p>
        Faculty-In-Charge
        <br></br>
        Training And Placement Cell
        <br></br>
        DCSA-PU
      </p>
    </div>
  )
  return (
    <div className="contact">
      <div className="past-recruit-banner">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-card-container">
        <ContactCards />
        <ContactCards />
        <ContactCards />
      </div>

      <div className="footer">
        <h2 align="center">Placement Cell, DCSA Panjab University</h2>
        <div className="footer-container-down">
          <div className="footer-address flex-footer">
            <span className="footer-subsection-heading">ADDRESS</span>
            <div className="footer-subsection-text">
              Department of Computer Science and Application - PU <br />
              Chandigarh, India. PIN - 160014.
            </div>
          </div>
          <div className="footer-quick-links">
            <span className="footer-subsection-heading">QUICK LINKS</span>
            <div className="footer-subsection-text">
              <a href="" target="_blank">
                Placement brochure
              </a>
              <br />
              <a href="" target="_blank">
                Faculty Members
              </a>
              <br />
              <a href="" target="_blank">
                Administrative body
              </a>
              <br />
            </div>
          </div>
          <div className="footer-explore flex-footer">
            <span className="footer-subsection-heading">EXPLORE</span>
            <div className="footer-subsection-text">
              <a href="" target="_blank">
                Facilities
              </a>
              <br />
              <a href="" target="_blank">
                Students Achievements
              </a>
              <br />
              <a href="" target="_blank">
                Academic Calendar
              </a>
              <br />
              <a href="" target="_blank">
                Sponsored Projects
              </a>
              <br />
              <a href="" target="_blank">
                How to reach DCSA,PU
              </a>
              <br />
            </div>
          </div>
          <div className="footer-contact-us flex-footer">
            <span className="footer-subsection-heading">CONTACT US</span>
            <div className="footer-subsection-text">
              <a href="">Placement Cell - EMAIL</a>
              <br />
              Contact no.:+91 8168824544
              <br />
            </div>
            <div className="footer-icons">
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fas fa-at"></i>
            </div>
          </div>
        </div>

        <div className="footer-credits" align="center">
        Copyright © 2022 DCSA-Panjab University. Developed by <a href="https://linkedin.com/in/chiragbairwa">Chirag</a>.
        </div>
      </div>
    </div>
  )
}

export default ContactUs
