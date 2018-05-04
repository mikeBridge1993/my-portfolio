import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {

  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });
  }

  render() {
    return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">Miguel<span>Ponte</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" href="#">Home<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about/">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-technologies">Technologies</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Contact</Link>
              </li>
            </ul>
          </div>
      </nav>
    </header>
    );
  }
}

export default Header;
