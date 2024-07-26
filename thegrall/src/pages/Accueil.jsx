import { Link } from "react-router-dom";
import "../styles/Accueil.css";

export default function Accueil() {
	return (
		<>
			<div className="accueilContainer">
				<h1 className="accueilTitle">The GRAAL</h1>;
				<Link className="btnLink" to="dame">
					Enter
				</Link>
			</div>
		</>
	);
}
