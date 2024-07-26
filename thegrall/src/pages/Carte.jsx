import { useState } from "react";

import MapPoint from "/src/components/BouttonSites";
import Button1 from "../assets/button01.png";
import Button2 from "../assets/button02.png";
import Button3 from "../assets/button03.png";
import Button4 from "../assets/button04.png";

import "../styles/Carte.css";

const dataSites = [
	{
		id: 1,
		src: Button1,
		desc: "Camelot",
		className: "button.site.camelot",
		alt: "button.site.camelot",
		top: 15,
		left: 22,
		dataInfo:
			"La légendaire forteresse du Roi Arthur, centre de la Table Ronde. Tu y trouveras toutes les armes dont tu aura besoin",
		btnLink: "/description/1",
	},
	{
		id: 2,
		src: Button2,
		desc: "Auberge d'Avalon",
		className: "button.site.avalon",
		alt: "Auberge Avalon",
		top: 25,
		left: 35,
		dataInfo: "Camelot Castle",
		btnLink: "/description/2",
	},

	{
		id: 3,
		src: Button3,
		desc: "Quête du Graal",
		className: "button.site.graal",
		alt: "button.site.graal",
		top: 77,
		left: 35,
		dataInfo:
			"La quête mythique entreprise par les chevaliers de la Table Ronde pour trouver le Saint Graal, une coupe sacrée qui apporterait l'illumination divine et la guérison à ceux qui la possèdent.",
		btnLink: "/description/3",
	},

	{
		id: 4,
		src: Button4,
		desc: "Les Tentes Burgondes",
		className: "button.site.burgondes",
		alt: "Tentes Burgondes",
		top: 87,
		left: 50,

		dataInfo:
			"Ce fameux endroit te permettra d'arroser tranquilement les poissons .",
		btnLink: "/description/4",
	},
];

const Carte = () => {
	const [info, setInfo] = useState("");
	const [showModal, setShowModal] = useState(false);

	const handleClick = (event) => {
		const info = event.target.getAttribute("data-info");
		setInfo(info);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
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
							desc={site.desc}
							onClick={handleClick}
						/>
					))}
				</div>
				{info && <div id="info-box">{info}</div>}
			</div>
			{/* <Modal show={showModal} onClose={handleCloseModal} dataInfo={info} /> */}
		</div>
	);
};

export default Carte;
