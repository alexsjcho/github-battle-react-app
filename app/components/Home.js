var React = require("react");
var Link = require("react-router-dom").Link;

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Github Battle</h1>
        <h2>Battle Your Developer Friends</h2>
        <p>
          Have a friendly comparison with some of your developers in your
          community based on your GitHub contributions
        </p>
        <Link className="button" to="/battle">
          Let's Battle!
        </Link>
      </div>
    );
  }
}

module.exports = Home;
