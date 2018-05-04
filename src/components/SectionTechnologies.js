import React from 'react';

const skillsIcons= ["fab fa-html5", "fab fa-css3-alt", "fab fa-js", "icon-bootstrap", "fab fa-sass", "fab fa-react", "fab fa-node", "icon-mongodb", "icon-git"]

let skillsGalleries = [];
let gallery = [];

skillsIcons.map((el, i, arr) => {
  gallery.push(el);
  
  if((i+1) % 4 == 0) {
   skillsGalleries.push(gallery);
   gallery = [];
  }

  if(i == arr.length - 1) {
    skillsGalleries.push(gallery);
  }
});

console.log(skillsGalleries);

const SectionTechnologies= () => (
    <section className="section-technologies" id="section-technologies">
      <div className="row">
      
        <div className="col-2">
            <h2 className="header-secondary header-secondary--white">
                <span className="header-secondary__text">Technologies</span>
            </h2>
        </div>
        <div className="col-5">
{/* <div className="paragraph text-light">
            On my path to learn web development, I've worked with: <br/> 
</div>*/}
            <div className="skills">
              {
                skillsGalleries.map((el, i) => {
                  return <div className="skills__gallery">
                          {el.map((el, i) => {

                            return <div className="skills__box">
                                    <div className="skills__box__icon">
                                    <i className={el}></i>
                                    </div>
                                  </div>
                            })}
                        </div>
                })
              }
            </div>
        </div>
      </div>
      
    </section>
)

export default SectionTechnologies;