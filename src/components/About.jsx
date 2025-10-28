import React from "react";
import aboutImg1 from "../assets/aboutImg1.jpg";
import aboutImg2 from "../assets/aboutImg2.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet risus pharetra ante luctuelit. Phasellus imperdiet risus
          pharetra ante luctu orem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus imperdiet risus pharetra ante luctuelit.
          Phasellus imperdiet risus pharetra ante luctu
        </p>
      </div>
      <div className="about-img">
        <img src={aboutImg2} alt="About Little Lemon 1" />
        <img src={aboutImg1} alt="About Little Lemon 2" />
      </div>
    </section>
  );
};

export default About;