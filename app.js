import React from 'react';
import './styles.css'; // Import your CSS file

const App = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div id="branding">
            <h1>Roger Williams University Cybersecurity and Intel</h1>
          </div>
          <nav>
            <ul>
              <li className="current"><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="showcase">
        <div className="container">
          <h1>Cybersecurity & Intel</h1>
          <p>The Cybersecurity and Intel Club [CIC] will provide support for student learning by creating a community for those interested in cybersecurity and information security. Club activities range from student gatherings to professional speakers, as well as trips to professional development conferences (Defcon, Bsides, Hackfest, etc).</p>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe To Our Newsletter</h1>
          <form>
            <input type="email" placeholder="Enter Email..." />
            <button type="submit" className="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="boxes">
        <div className="container">
          <div className="box">
            <img src="./img/cic_Logo.jpg" alt="CIC Logo" />
            <h3>Members</h3>
            <p>Vivamus maximus ante sem, quis sodales massa fermentum vitae. Etiam condimentum metus aliquet, tincidunt metus a, pharetra dui.</p>
          </div>
          <div className="box">
            <img src="./img/gitthublogo.png" alt="GitHub Logo" />
            <h3>Projects</h3>
            <p>Vivamus maximus ante sem, quis sodales massa fermentum vitae. Etiam condimentum metus aliquet, tincidunt metus a, pharetra dui.</p>
          </div>
          <div className="box">
            <img src="./img/neccdc2024logo.png" alt="NECCDC 2024 Logo" />
            <h3>Competitions</h3>
            <p>Vivamus maximus ante sem, quis sodales massa fermentum vitae. Etiam condimentum metus aliquet, tincidunt metus a, pharetra dui.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Roger Williams Comsc210, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default App;