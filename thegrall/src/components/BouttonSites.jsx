import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../components/ButtonSite.css";

const MapPoint = ({
	src,
	btnLink,
	alt,
	top,
	desc,
	left,
	dataInfo,
	onClick,
}) => {
	console.log(dataInfo);
	return (
		<div className="map-point-info">
			<Link to={btnLink}>
				<img
					src={src}
					alt={alt}
					className="map-point"
					style={{ top: `${top}%`, left: `${left}%` }}
					data-info={dataInfo}
					onClick={onClick}
				/>
				{/* <h3 className="map-point-info">{dataInfo}</h3> */}
				<span
					style={{
						position: "absolute",
						color: "black",
						backgroundColor: "rgb(235, 170, 84)",
						opacity: "0.8",
						borderRadius: "6px",
						padding: "3px",
						fontSize: "1.7vh",
						top: `${top - 2}%`,
						left: `${left + 7}%`,
					}}
				>
					{desc}
				</span>
			</Link>
		</div>
	);
};

MapPoint.propTypes = {
	src: PropTypes.string.isRequired,
	btnLink: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	dataInfo: PropTypes.string,
	onClick: PropTypes.func,
};

export default MapPoint;
