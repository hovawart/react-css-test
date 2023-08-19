import "./App.css";
import reactLogo from "./img/react-logo.png";
import charlie from "./img/charlie.png";

function App() {
  return (
    <>
      <nav className="nav">
        <span className="nav-header">Charlie!</span>
      </nav>
      <div className="jumbotron">
        <h1 className="display-heading">
          <img src={reactLogo} alt="react logo" className="logo" />
          <br />
          Charlie
        </h1>
      </div>
      <div className="container">
        <div class="col=6">
          <img
            src={charlie}
            alt="golden retriever with mountains behind him"
            className="img-responsive slidein"
          />
        </div>
        <div className="col-6 text-box text-width right">
          <h1 className="text-width">Charlie the Dog</h1>
          <p className="paragraph">
            Charlie is a dog. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
