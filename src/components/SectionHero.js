import React from 'react';
import videoMp4 from '../videos/me4z.mp4';

class SectionHero extends React.Component {

  componentDidMount()  {
    document.querySelector('#video1').playbackRate = .38; 
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
      <section className="section-hero">
        <div className="hero">
          <div className="hero__video">
              <video id="video1" className="hero__video__content" autoPlay muted loop>
                <source  src={videoMp4} type="video/mp4" className="video"/>
                  Your browser is not supported!
              </video>
          </div>
          <div className="hero__heading">
            <h1>Miguel Ponte</h1>
            <hr />
            <h1>Aerospace Engineer & Front End Developer</h1>
          </div>
          <div className="hero__scroll">
            <div className="chevron" />
          </div>
        </div>
      </section>
    );
  }
}


export default SectionHero;
