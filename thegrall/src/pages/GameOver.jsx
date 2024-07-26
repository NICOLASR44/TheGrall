import "../styles/GameOver.css";
import chantier from "../assets/chantier3.jpeg";

export default function GameOver() {
  return (
    <div className="gameOver-container">
      <img src={chantier} alt="site en chantier" />
    </div>
  );
}
