import { Link } from "../router";

const About = () => {
  return (
    <div>
      About
      <Link to="/">go main</Link>
      <button onClick={() => window.history.go(-1)}>뒤로가기</button>
    </div>
  );
};

export default About;
