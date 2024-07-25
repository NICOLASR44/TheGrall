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

				<img
					src="src\assets\button 2.png"
					alt="Graal image"
					className="map-point"
					style={{ top: "50%", left: "50%" }}
					data-info="Grall"
					onClick={handleClick}
				></img>
				<div
					className="map-point"
					style={{ top: "50%", left: "60%" }}
					data-info="Avalon"
					onClick={handleClick}
				></div>
			</div>
			{info && <div id="info-box">{info}</div>}
		</div>
	);
};

export default Carte;
