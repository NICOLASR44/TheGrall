import { Link } from "react-router-dom";
import "../styles/Accueil.css";

export default function Accueil() {
  return (
    <>
      <div className="accueilContainer">
        
        <h1 className="accueilTitle">The GRAAL</h1>;
      <button className="accueil-button">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          
         <Link className="button-text" to="/dame">
          Enter
        </Link>
        </button>
      </div>
    </>
  );
}
