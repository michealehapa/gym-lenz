import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import storyImage from '../../images/about1.jpg';
import visionImage from '../../images/about2.jpg';
import missionImage from '../../images/about3.jpg';
import './about.css'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and 
    </Header>

    <section className="about-story">
      <div className="container about-story-container">
        <div className="about-section-image">
          <img src={storyImage} alt="Our Story Image" />
        </div>

        <div className="about-section-content">
          <h1>Our Story</h1>
          <p>
            Suspendisse blandit, elit eget suscipit volutpat, vel ultricies nisi consequat vitae. Praesent nisi lacus, interdum vel convallis eget, dapibus sed erat. Duis ex nibh, luctus at suscipit quis, lacinia ut ipsum.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus, mollitia animi, id est laborum et dolorum fuga. distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
          </p>
          <p>
            Donec ut scelerisque urna. Donec sed turpis pellentesque, Donec quam lorem, Donec et feugiat felis, id vestibulum quam.
          </p>
        </div>
        

      </div>
    </section>


    <section className="about-vision">
      <div className="container about-vision-container">

        <div className="about-section-content">
          <h1>Our Vision</h1>
          <p>
            blandit, libero eros tempus nisi, ac blandit nulla nulla id leo. Nunc porta turpis vitae quam pharetra sollicitudin. Sed nec lacus sed ex lobortis sagittis. Sed ultricies hendrerit odio, Duis ex nibh, luctus at suscipit quis, lacinia ut ipsum.
          </p>
          <p>
            odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt distinctio. cumque nihil impedit quo minus id quod maxime placeat facere possimus.
          </p>
          
        </div>


        <div className="about-section-image">
          <img src={visionImage} alt="Our Vision Image" />
        </div>
        

      </div>
    </section>


    <section className="about-mission">
      <div className="container about-mission-container">
        <div className="about-section-image">
          <img src={missionImage} alt="Our Mission Image" />
        </div>

        <div className="about-section-content">
          <h1>Our Mission</h1>
          <p>
            Nunc sollicitudin. Sed nec lacus sed ex lobortis sagittis. Sed ultricies hendrerit odio, Duis ex nibh, luctus at suscipit quis, lacinia ut ipsum.
          </p>
          <p>
            deserunt mollitia animi, id est laborum et dolorum fuga. soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
          </p>
          <p>
            Donec quam lorem, aliquam in, eleifend Curabitur orci elit, tincidunt sed congue nec, tincidunt nec metus.
          </p>
        </div>
        

      </div>
    </section>


    </>
  )
}

export default About;