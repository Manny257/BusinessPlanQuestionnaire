import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <div className="textArea">
        <h2>You don't have to fit to the plan</h2>
        <h1>The plan will fit to you</h1>
      </div>
      <Link to="/questionnaire">
        <button className="btn btn-outline-warning btn-lg">
          Generate Business Plan
        </button>
      </Link>
    </div>
  );
}

export default Landing;
