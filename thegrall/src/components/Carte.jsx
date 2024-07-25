import { useState } from "react";
import "../styles/Carte.css";

const Carte = () => {
	const [info, setInfo] = useState("");

	const handleClick = (event) => {
		const info = event.target.getAttribute("data-info");
		setInfo(info);
	};

	return (
		<div className="carteContainer">
			{/* <h1 className="carteTitle">Je suis dans composant Carte</h1>; */}
			<div className="mapBroceliande">
				<img
					src="src\assets\map Brocéliande.jpg"
					alt="carte du pays de Brocéliande"
					className="mapBroceliande"
				/>
				<div
					className="map-point"
					style={{ top: "30%", left: "40%" }}
					data-info="Point 1"
					onClick={handleClick}
				></div>
				<div
					className="map-point"
					style={{ top: "50%", left: "60%" }}
					data-info="Point 2"
					onClick={handleClick}
				></div>
			</div>
			{info && <div id="info-box">{info}</div>}
		</div>
	);
};

// 		<div>
// 			<div className="map-container">
// 				<img src="votre_carte.jpg" alt="Carte" className="map-image" />
// 				<div
// 					className="map-point"
// 					style={{ top: "30%", left: "40%" }}
// 					data-info="Point 1"
// 					onClick={handleClick}
// 				></div>
// 				<div
// 					className="map-point"
// 					style={{ top: "50%", left: "60%" }}
// 					data-info="Point 2"
// 					onClick={handleClick}
// 				></div>
// 			</div>
// 			{info && <div id="info-box">{info}</div>}
// 		</div>
// 	);
// };

export default Carte;

/* Code Sandrine
export default function Carte() {
	return (
		<>
			<div className="carteContainer">
				<h1 className="carteTitle">Je suis dans composant Carte</h1>;
				<div className="mapBroceliande">
					<img
						src="src\assets\map Brocéliande.jpg"
						alt="carte du pays de Brocéliande"
						className="mapBroceliande"
					/>
				</div>
			</div>
		</>
	);
}
*/
