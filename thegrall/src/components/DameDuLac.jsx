import { Link } from "react-router-dom";
import "../styles/DameDuLac.css";

export default function DameDuLac() {
  return (
    <>
      <div className="dameContainer">
        <h1 className="dameTitle">Bonjour Arthur</h1>
        <button className="dameButton">
          <Link to="/carte" className="linkToCarte">
            J&apos;Y VAIS
          </Link>
        </button>
      </div>
    </>
  );
}
