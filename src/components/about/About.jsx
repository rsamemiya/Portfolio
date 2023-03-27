import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          {/* It is a long established fact that a reader will be distracted by the
          readable content. */}
        </p>
        <p className="a-desc">
        After spending ten years as a scientist in the pharmaceutical industry,
        I have honed my analytical skills, developed a talent for problem-solving,
        and gained valuable experience in research and development. However, my interest
        in coding and software engineering began during my final year in university and
        has continued to grow ever since.  I'm excited to have made the transition into becoming a software engineer, where I can apply my analytical skills and
        problem-solving abilities in a fresh and exciting way. The rapidly evolving nature of
        the field also provides me with the opportunity to stay up-to-date with the latest technological
        advancements and contribute to a dynamic and innovative industry. I am eager to embrace
        this new challenge and broaden my horizons as I continue to learn and grow as a software engineer.
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            {/* <h4 className="a-award-title">International Design Awards 2021</h4> */}
            <p className="a-award-desc">
              {/* Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
