import React from 'react';
import Link from 'gatsby-link';
import SectionHero from '../components/SectionHero';
import SectionAbout from '../components/SectionAbout';
import SectionTechnologies from '../components/SectionTechnologies';

const IndexPage = () => {
  return (
  <div>
    <SectionHero />
    <SectionAbout />
    <SectionTechnologies />
  </div>
  )
 }

//  document.getElementById("video").playbackRate = 0.5;




export default IndexPage
