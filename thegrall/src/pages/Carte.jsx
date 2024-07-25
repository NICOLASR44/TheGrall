import { useState } from "react";

import MapPoint from "/src/components/BouttonSiteGraal";

import Button1 from "../assets/button1.png";
import Button2 from "../assets/button2.png";
import Button3 from "../assets/button3.png";
import Button4 from "../assets/button4.png";

import "../styles/Carte.css";
// import "../components/ButtonSite.css";

const dataSites = [
	{
		id: 1,
		src: Button1,
		className: "button.site.graal",
		alt: "button.site.graal",
		top: 50,
		left: 50,
		dataInfo:
			"La quête mythique entreprise par les chevaliers de la Table Ronde pour trouver le Saint Graal, une coupe sacrée qui apporterait l'illumination divine et la guérison à ceux qui la possèdent.",
		btnLink: "/",
	},

	{
		id: 2,
		src: Button2,
		className: "button.site.camelot",
		alt: "button.site.camelot",
		top: 20,
		left: 20,
		dataInfo:
			"La légendaire forteresse du Roi Arthur, centre de la Table Ronde. Tu y trouveras toutes les armes dont tu aura besoin",
		btnLink: "/camelot",
	},

	{
		id: 3,
		src: Button3,
		className: "button.site.avalon",
		alt: "Auberge Avalon",
		top: 60,
		left: 60,
		dataInfo: "Camelot Castle",
		btnLink: "/",
	},

	{
		id: 4,
		src: Button4,
		className: "button.site.burgondes",
		alt: "Tentes Burgondes",
		top: 70,
		left: 80,
		dataInfo:
			"Ce fameux endroit te permettra d'arroser tranquilement les poissons .",
		btnLink: "/",
	},
];

const Carte = () => {
	const [info, setInfo] = useState("");

	const handleClick = (event) => {
		const info = event.target.getAttribute("data-info");
		setInfo(info);
	};

	return (
		<div>
			<div className="carteContainer">
				{/* <h1 className="carteTitle">Je suis dans composant Carte</h1>; */}
				<div className="mapBroceliande">
					<img
						src="src\assets\map Brocéliande.jpg"
						alt="carte du pays de Brocéliande"
						className="mapBroceliande"
					/>
					{dataSites.map((site) => (
						<MapPoint
							className={`button.site.${site.className}`}
							key={site.id}
							src={site.src}
							alt={site.alt}
							top={site.top}
							left={site.left}
							btnLink={site.btnLink}
							dataInfo={site.dataInfo}
							onClick={handleClick}
						/>
					))}
				</div>
				{info && <div id="info-box">{info}</div>}
			</div>
		</div>
	);
};

export default Carte;
