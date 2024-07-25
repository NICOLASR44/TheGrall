import { Link } from "react-router-dom";
import "../styles/DameDuLac.css";

export default function DameDuLac() {
  return (
    <>
      <div className="dameContainer">
        <h1 className="dameTitle">Je suis dans composant Dame Du Lac</h1>
        <Link to="/carte">CARTE</Link>
      </div>
    </>
  );
}
