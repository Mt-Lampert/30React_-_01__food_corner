import "./About.scss"

function About(props) {
  return (
    <div className="about-page" data-testid="about">
      <div className="top hero is-medium is-info" data-testid="top">
        <div className="hero-body">
        </div>
      </div>
      <div className="bottom" data-testid="bottom">
        {/* <h1 className="title">About Us</h1> */}
        <h1 className="title">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptas officia nam numquam porro rem! Voluptate dolorem repellendus
          porro, quaerat aperiam minima neque totam, eum sapiente rem soluta,
          quo obcaecati.
        </p>
      </div>
    </div>
  );
}

export default About;
