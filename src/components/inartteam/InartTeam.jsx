import "./inartteam.css";
import question from "../img/question.png";

const InartTeam = () => {
  return (
    <div className="cardsTitle">
      <h1 id="cardsTitle"> InART Team</h1>

      <div className="cards">
        <div className="card cardPrimary">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Dr. Krum</h3>
            <h4>Advisor</h4>
          </div>
        </div>

        <div className="card card1">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Anthony Viramontes</h3>
            <h4>Document Lead</h4>
          </div>
        </div>
        <div className="card card2">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Joseph Chong</h3>
            <h4>Level Desginer / Programer</h4>
          </div>
        </div>

        <div className="card card3">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Jimmy Hernandez</h3>
            <h4>Sound Engineer/Programmer </h4>
          </div>
        </div>
        <div className="card card4">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Edwin Hernandez</h3>
            <h4>Lead Artist / Programmer</h4>
          </div>
        </div>
        <div className="card card5">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Jaquan Jones</h3>
            <h4>Sound Engineer / Level Desginer</h4>
          </div>
        </div>
        <div className="card card6">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Alberto Landeros</h3>
            <h4>Sound Engineer / Level Desginer</h4>
          </div>
        </div>
        <div className="card card7">
          <div className="card-container">
            <div className="card-back">Linked in</div>
            <img src={question} alt="No img" className="card-front" />
          </div>
          <div className="card-details">
            <h3>Tony Lee</h3>
            <h4>Sound Engineer / Level Desginer</h4>
          </div>
        </div>
        <div className="card card8">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Jennelle Maximo</h3>
            <h4>Sound Engineer / Level Desginer</h4>
          </div>
        </div>
        <div className="card card9">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Eduardo Meza</h3>
            <h4>Test Programmer</h4>
          </div>
        </div>
        <div className="card card10">
          <div className="card-container">
            <img src={question} alt="No img" />
          </div>
          <div className="card-details">
            <h3>Dean Nguyen</h3>
            <h4>Concept Desginer</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InartTeam;
