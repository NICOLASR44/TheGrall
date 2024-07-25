import { Link } from "react-router-dom";
import "../styles/Accueil.css";

export default function Accueil() {
  return (
    <>
      <div className="accueilContainer">
        <h1 className="accueilTitle">Je suis dans composant Accueil</h1>;<Link to="/dame">DAME</Link>
      </div>
    </>
  );
}
